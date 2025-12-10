import * as THREE from 'three';

export class TinyPlanetControls {
    constructor(camera, domElement, scene, onExit, inputMultiplexer = null) {
        this.camera = camera;
        this.domElement = domElement;
        this.scene = scene;
        this.onExitCallback = onExit;
        this.externalInput = inputMultiplexer;
        this.planetMesh = null;
        this.planetGroup = null;
        this.surfaceRay = new THREE.Raycaster();

        // Configuration
        this.planetRadius = 10; // Base radius from worldgen
        this.walkSpeed = 5;
        this.runSpeed = 10;
        this.flySpeed = 10;
        this.swimSpeed = 3;
        this.jumpForce = 2.0;
        this.gravity = 30.0;
        this.playerHeight = 0.04;

        // State
        this.enabled = false;
        this.isLocked = false;
        this.isFlying = false;
        this.isSwimming = false;
        this.moveForward = false;
        this.moveBackward = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;
        this.rollLeft = false;
        this.rollRight = false;
        this.isRunning = false;
        this.canJump = false;

        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();
        this.verticalVelocity = 0;

        // The player rig
        this.player = new THREE.Object3D();
        this.player.name = "TinyPlanetPlayer";
        
        // Helper vectors
        this.raycaster = new THREE.Raycaster();
        this.worldUp = new THREE.Vector3();
        this.dummyVec = new THREE.Vector3();
        this.dummyQuat = new THREE.Quaternion();

        // Bind events
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onPointerLockChange = this.onPointerLockChange.bind(this);
    }

    setPlanet(mesh) {
        this.planetMesh = mesh;
    }

    // Enter FPS mode at specific world position
    enter(startPointWorld, planetMesh) {
        if (this.enabled) return;
        this.enabled = true;
        this.planetMesh = planetMesh;
        this.planetGroup = planetMesh.parent;

        // Convert start point to Local Direction
        const localPoint = startPointWorld.clone();
        this.planetMesh.worldToLocal(localPoint);
        const startDir = localPoint.normalize();

        // Attach player to Planet (Local Space)
        this.planetMesh.add(this.player);
        
        // Position player
        // We start slightly above surface based on startDir
        const spawnHeight = localPoint.length() + 2.0; 
        this.player.position.copy(startDir).multiplyScalar(spawnHeight);
        
        // Align up
        const quaternion = new THREE.Quaternion();
        quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), startDir);
        this.player.quaternion.copy(quaternion);
        this.player.up.copy(startDir);
        
        // Attach camera
        this.player.add(this.camera);
        this.camera.position.set(0, 0, 0);
        this.camera.rotation.set(0, 0, 0);

        // Reset physics
        this.velocity.set(0, 0, 0);
        this.verticalVelocity = 0;
        this.isFlying = false;

        // Lock pointer (desktop only)
        const isMobile = /Mobi|Android|iP(ad|hone|od)/i.test(navigator.userAgent || '');
        if (!isMobile && this.domElement.requestPointerLock) {
            this.domElement.requestPointerLock();
        }
        
        this.addListeners();
    }

    exit() {
        if (!this.enabled) return;
        this.enabled = false;

        this.removeListeners();
        document.exitPointerLock();

        // Detach camera
        this.player.remove(this.camera);
        this.scene.add(this.camera); // Return to scene root
        
        // Remove player
        if (this.player.parent) {
            this.player.parent.remove(this.player);
        }
        
        if (this.onExitCallback) {
            this.onExitCallback();
        }

        if (this.externalInput) {
            this.externalInput.clear();
        }
    }

    addListeners() {
        if (!this.externalInput) {
            document.addEventListener('keydown', this.onKeyDown);
            document.addEventListener('keyup', this.onKeyUp);
        }
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('pointerlockchange', this.onPointerLockChange);
    }

    removeListeners() {
        if (!this.externalInput) {
            document.removeEventListener('keydown', this.onKeyDown);
            document.removeEventListener('keyup', this.onKeyUp);
        }
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('pointerlockchange', this.onPointerLockChange);
    }

    onPointerLockChange() {
        this.isLocked = document.pointerLockElement === this.domElement;
        if (!this.isLocked && this.enabled) {
            // User unlocked cursor
        }
    }

    onKeyDown(event) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW': this.moveForward = true; break;
            case 'ArrowLeft':
            case 'KeyA': this.moveLeft = true; break;
            case 'ArrowDown':
            case 'KeyS': this.moveBackward = true; break;
            case 'ArrowRight':
            case 'KeyD': this.moveRight = true; break;
            case 'Space': 
                if(this.isFlying) this.moveUp = true;
                else if (this.canJump) { 
                    this.verticalVelocity = this.jumpForce; 
                    this.canJump = false; 
                }
                break;
            case 'ControlLeft': this.moveDown = true; break;
            case 'ShiftLeft': this.isRunning = true; break;
            case 'KeyF': this.toggleFlight(); break;
            case 'KeyQ': this.rollLeft = true; break;
            case 'KeyE': this.rollRight = true; break;
            case 'Escape': this.exit(); break; // Allow manual exit
        }
    }

    onKeyUp(event) {
        switch (event.code) {
            case 'ArrowUp':
            case 'KeyW': this.moveForward = false; break;
            case 'ArrowLeft':
            case 'KeyA': this.moveLeft = false; break;
            case 'ArrowDown':
            case 'KeyS': this.moveBackward = false; break;
            case 'ArrowRight':
            case 'KeyD': this.moveRight = false; break;
            case 'Space': this.moveUp = false; break;
            case 'ControlLeft': this.moveDown = false; break;
            case 'ShiftLeft': this.isRunning = false; break;
            case 'KeyQ': this.rollLeft = false; break;
            case 'KeyE': this.rollRight = false; break;
        }
    }

    onMouseMove(event) {
        if (!this.isLocked) return;

        const movementX = event.movementX || 0;
        const movementY = event.movementY || 0;

        if (this.isFlying) {
            const camLocalUp = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion);
            this.player.rotateOnAxis(camLocalUp, -movementX * 0.002);
            this.camera.rotateX(-movementY * 0.002);
        } else {
            this.player.rotateY(-movementX * 0.002);
            this.camera.rotateX(-movementY * 0.002);
            this.camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.camera.rotation.x));
        }
    }

    toggleFlight() {
        this.isFlying = !this.isFlying;
        this.verticalVelocity = 0;
        if (!this.isFlying) {
            // Re-align to gravity
            const planetNormal = this.player.position.clone().normalize();
            const dummyUp = new THREE.Vector3(0, 1, 0);
            const alignQuat = new THREE.Quaternion().setFromUnitVectors(dummyUp, planetNormal);
            this.player.quaternion.copy(alignQuat);
            this.player.up.copy(planetNormal);
            this.camera.rotation.x = 0;
            this.velocity.set(0,0,0);
        }
    }

    snapToSurface() {
        if (!this.planetMesh || !this.planetMesh.userData?.forge || !this.planetMesh.userData?.settings) return;
        const forge = this.planetMesh.userData.forge;
        const settings = this.planetMesh.userData.settings;
        // Raycast from camera through center
        this.surfaceRay.setFromCamera(new THREE.Vector2(0, 0), this.camera);
        const hit = this.surfaceRay.intersectObject(this.planetMesh, false);
        if (!hit.length) return;
        const pointWorld = hit[0].point.clone();
        const dirLocal = pointWorld.clone();
        this.planetMesh.worldToLocal(dirLocal);
        const dir = dirLocal.normalize();
        const h = forge.getHeightAt(dir);
        const targetRadius = settings.radius + (h - settings.seaLevel) * settings.heightScale + this.playerHeight;
        const newPos = dir.clone().multiplyScalar(targetRadius + 0.2);
        this.player.position.copy(newPos);
        // Align up
        const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0), dir);
        this.player.quaternion.copy(quat);
        this.player.up.copy(dir);
        this.camera.rotation.set(0,0,0);
        this.velocity.set(0,0,0);
        this.verticalVelocity = 0;
    }

    update(delta) {
        if (!this.enabled) return;

        if (this.externalInput) {
            const a = this.externalInput.getState();
            this.moveForward = !!a.forward;
            this.moveBackward = !!a.backward;
            this.moveLeft = !!a.left;
            this.moveRight = !!a.right;
            this.moveUp = !!a.up;
            this.moveDown = !!a.down;
            this.isRunning = !!a.run;
            this.rollLeft = !!a.rollLeft;
            this.rollRight = !!a.rollRight;
            if (this.externalInput.consume('flyToggle')) {
                this.toggleFlight();
            }
            if (this.externalInput.consume('exit')) {
                this.exit();
                return;
            }
            if (this.externalInput.consume('surface')) {
                this.snapToSurface();
            }
            if (!this.isFlying && !this.isSwimming && this.canJump && this.externalInput.consume('jump')) {
                this.verticalVelocity = this.jumpForce;
                this.canJump = false;
            }
            const look = this.externalInput.consumeLookDelta();
            if (Math.abs(look.x) > 1e-4 || Math.abs(look.y) > 1e-4) {
                const yaw = -look.x * 0.01;
                const pitch = -look.y * 0.01;
                this.player.rotateY(yaw);
                this.camera.rotateX(pitch);
                this.camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.camera.rotation.x));
            }
        }

        // Check for water
        let isFrozen = false;
        if (this.planetMesh && this.planetMesh.userData.forge) {
            const forge = this.planetMesh.userData.forge;
            const settings = this.planetMesh.userData.settings;

            // Check for ice (World Y based)
            this.player.getWorldPosition(this.dummyVec);
            const pole = Math.abs(this.dummyVec.normalize().y);
            const iceStart = Math.max(0.0, Math.min(1.0, 1.0 - settings.iceCap));
            isFrozen = pole > iceStart;
            
            // Get current position info
            const dir = this.player.position.clone().normalize();
            const waterData = forge.getWaterDataAt(dir);
            
            // Calculate physical heights
            const waterSurfaceHeight = settings.radius + (waterData.waterHeight - settings.seaLevel) * settings.heightScale;
            const currentRadius = this.player.position.length();
            const inDeepWater = waterData.hasWater && waterData.waterMask > 0.15;
            
            // Enter swim mode if in sufficiently deep water and below surface (plus small margin)
            // But NOT if it's frozen
            if (!isFrozen && inDeepWater && currentRadius < waterSurfaceHeight + 0.05) {
                if (!this.isSwimming) {
                    this.isSwimming = true;
                    this.verticalVelocity = 0;
                }
            } else if (this.isSwimming && (currentRadius > waterSurfaceHeight + 0.3 || !inDeepWater || isFrozen)) {
                // Exit swim mode if we rise above surface or leave water or enter ice
                this.isSwimming = false;
                // Re-align to gravity and reset pitch to avoid tilted exit
                const up = this.player.position.clone().normalize();
                const realign = new THREE.Quaternion().setFromUnitVectors(this.player.up, up);
                this.player.quaternion.premultiply(realign);
                this.player.up.copy(up);
                this.camera.rotation.x = 0;
                this.verticalVelocity = 0;
            }
        }

        // Friction
        this.velocity.x -= this.velocity.x * 10.0 * delta;
        this.velocity.z -= this.velocity.z * 10.0 * delta;

        let speed = this.walkSpeed;
        if (this.isFlying) speed = this.flySpeed;
        else if (this.isSwimming) speed = this.swimSpeed;
        else if (this.isRunning) speed = this.runSpeed;

        this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
        this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
        this.direction.normalize();

        if (this.moveForward || this.moveBackward) this.velocity.z += this.direction.z * speed * delta;
        if (this.moveLeft || this.moveRight) this.velocity.x -= this.direction.x * speed * delta;

        if (this.isFlying || this.isSwimming) {
             const moveVec = new THREE.Vector3();
             if (this.moveForward) moveVec.z -= 1;
             if (this.moveBackward) moveVec.z += 1;
             if (this.moveLeft) moveVec.x -= 1;
             if (this.moveRight) moveVec.x += 1;
             if (this.moveUp) moveVec.y += 1;
             if (this.moveDown) moveVec.y -= 1;
             moveVec.normalize().multiplyScalar(speed * delta);
             
             // Transform Camera Local -> Player Local -> Planet Local
             moveVec.applyQuaternion(this.camera.quaternion);
             moveVec.applyQuaternion(this.player.quaternion); 
             
             this.player.position.add(moveVec);
             
             // Roll
             const roll = Number(this.rollLeft) - Number(this.rollRight);
             if (roll !== 0) {
                 this.camera.rotateZ(roll * 2.0 * delta);
             }
             
             // Keep player upright (gravity align) even when swimming/flying
             // But allow free movement
             if (this.isSwimming) {
                 // In swim mode, maybe dampen vertical velocity or handle buoyancy?
                 // For "like flying", we just use the moveVec logic above which moves in camera direction
             }

        } else {
            // Walking
            this.player.translateX(-this.velocity.x * delta);
            this.player.translateZ(-this.velocity.z * delta);

            this.verticalVelocity -= this.gravity * delta;
            
            // Terrain Following
            // Use heightmap sampling for O(1) performance
            let targetHeight = 0;
            
            const forge = this.planetMesh.userData.forge;
            const settings = this.planetMesh.userData.settings;

            if (forge && settings) {
                // Dir from Center (0,0,0) to Player
                // Since Player is child of Planet, player.position is Local.
                const dir = this.player.position.clone().normalize();
                
                // Get 0-1 height from heightmap
                const rawHeight = forge.getHeightAt(dir);
                
                // Target Height in GEOMETRY Units (Local Space)
                targetHeight = settings.radius + (rawHeight - settings.seaLevel) * settings.heightScale;

                // Check for ice walking
                this.player.getWorldPosition(this.dummyVec);
                const pole = Math.abs(this.dummyVec.normalize().y);
                const iceStart = Math.max(0.0, Math.min(1.0, 1.0 - settings.iceCap));
                
                if (pole > iceStart) {
                    // Check Global Ocean
                    // Match buildWaterMesh logic in index.js: radius + ((seaLevel - 0.5) * heightScale)
                    const oceanRadius = settings.radius + (settings.seaLevel - 0.5) * settings.heightScale;
                    
                    if (targetHeight < oceanRadius) {
                        targetHeight = oceanRadius;
                    }

                    // Check Freshwater
                    const waterData = forge.getWaterDataAt(dir);
                    if (waterData.hasWater) {
                        const waterSurfaceHeight = settings.radius + (waterData.waterHeight - settings.seaLevel) * settings.heightScale;
                        // If ice is higher than terrain (e.g. over ocean/lake), walk on it
                        if (waterSurfaceHeight > targetHeight) {
                            targetHeight = waterSurfaceHeight;
                        }
                    }
                }
            } else {
                // Fallback
                targetHeight = this.planetRadius;
            }

            const distFromCenter = this.player.position.length();
            
            // Player height on top of terrain
            const floorHeight = targetHeight + this.playerHeight;
            
            let currentHeight = distFromCenter + this.verticalVelocity * delta;
            
            if (currentHeight < floorHeight) {
                currentHeight = floorHeight;
                this.verticalVelocity = 0;
                this.canJump = true;
            } else {
                this.canJump = false;
            }
            
            // Apply height (Local Space)
            this.player.position.setLength(currentHeight);
            
            // Re-align to gravity (Local Space)
            const newUp = this.player.position.clone().normalize();
            const alignQuaternion = new THREE.Quaternion();
            alignQuaternion.setFromUnitVectors(this.player.up, newUp);
            this.player.quaternion.premultiply(alignQuaternion);
            this.player.up.copy(newUp);
        }
    }
}
