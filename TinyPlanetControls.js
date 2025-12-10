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
        this.cameraPitch = 0; // Track pitch separately for reliable mouselook

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
        this.onPointerLockError = this.onPointerLockError.bind(this);
        this.prevMouse = null; // fallback for non-locked mouse deltas
        
        // Remember the original camera parent so we can restore it on exit
        this.originalCameraParent = camera.parent || scene;
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
        if (this.externalInput) {
            this.externalInput.clear();
        }

        // Convert start point to Local Direction
        const localPoint = startPointWorld.clone();
        this.planetMesh.worldToLocal(localPoint);
        const spawnHeight = localPoint.length() + 2.0; 
        const startDir = localPoint.normalize();

        // Attach player to Planet (Local Space)
        this.planetMesh.add(this.player);
        
        // Position player using terrain height when available
        let surfaceRadius = spawnHeight;
        const settings = this.planetMesh.userData?.settings;
        const forge = this.planetMesh.userData?.forge;
        let sampledHeight = null;
        if (settings && forge) {
            const h = forge.getHeightAt(startDir);
            surfaceRadius = settings.radius + (h - settings.seaLevel) * settings.heightScale + this.playerHeight + 0.2;
            sampledHeight = { rawHeight: h, seaLevel: settings.seaLevel, radius: settings.radius, heightScale: settings.heightScale };
        }
        this.player.position.copy(startDir).multiplyScalar(surfaceRadius);
        
        // Attach camera first
        this.player.add(this.camera);
        this.camera.position.set(0, 0, 0);
        this.camera.rotation.set(0, 0, 0);
        
        // Align player so Y=surface normal and -Z=horizon (not into ground!)
        this.applyTangentLook(startDir);

        // Update matrices
        this.player.updateMatrixWorld(true);
        this.camera.updateMatrixWorld(true);
        this.planetMesh.updateMatrixWorld(true);

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

        // Debug dump for spawn issues
        this.debugSpawn(startDir, surfaceRadius, sampledHeight);
    }

    exit() {
        if (!this.enabled) return;
        this.enabled = false;

        this.removeListeners();
        document.exitPointerLock();

        // Detach camera
        this.player.remove(this.camera);
        if (this.originalCameraParent) {
            this.originalCameraParent.add(this.camera);
        } else {
            this.scene.add(this.camera);
        }
        
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
        document.addEventListener('pointerlockerror', this.onPointerLockError);
    }

    removeListeners() {
        if (!this.externalInput) {
            document.removeEventListener('keydown', this.onKeyDown);
            document.removeEventListener('keyup', this.onKeyUp);
        }
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('pointerlockchange', this.onPointerLockChange);
        document.removeEventListener('pointerlockerror', this.onPointerLockError);
        this.prevMouse = null;
    }

    onPointerLockChange() {
        this.isLocked = document.pointerLockElement === this.domElement;
        console.warn('[TinyDebug] pointerlock change', { locked: this.isLocked, el: document.pointerLockElement?.id || document.pointerLockElement?.tagName });
        if (!this.isLocked) {
            this.prevMouse = null;
        }
    }

    onPointerLockError() {
        console.warn('[TinyDebug] pointer lock error');
    }

    onKeyDown(event) {
        if (!this._loggedFirstKey) {
            console.warn('[TinyDebug] keydown', event.code);
            this._loggedFirstKey = true;
        }
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
        // Must have pointer lock to process mouse movement (like main branch)
        if (!this.isLocked) {
            // Debug log skipped mouse events
            if (!this._skippedMouseLog) {
                console.warn('[TinyDebug] mousemove SKIPPED (not locked)', { isLocked: this.isLocked, enabled: this.enabled });
                this._skippedMouseLog = true;
            }
            return;
        }

        const movementX = event.movementX || 0;
        const movementY = event.movementY || 0;

        // Debug: log mouse movement
        if (!this._mouseLogCount) this._mouseLogCount = 0;
        if (this._mouseLogCount < 3) {
            console.warn('[TinyDebug] mousemove PROCESSED', { movementX, movementY, isLocked: this.isLocked });
            this._mouseLogCount++;
        }

        // Yaw: rotate player around its local Y axis (surface normal)
        this.player.rotateY(-movementX * 0.002);
        
        // Pitch: update our tracked pitch value
        this.cameraPitch -= movementY * 0.002;
        this.cameraPitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.cameraPitch));
        
        // Apply pitch as a quaternion rotation around local X axis
        // This avoids Euler angle issues from gravity realignment
        this.camera.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), this.cameraPitch);
        
        // Debug log
        if (!this._rotLogCount) this._rotLogCount = 0;
        if (this._rotLogCount < 3) {
            console.warn('[TinyDebug] rotation applied', {
                movementX, movementY,
                cameraPitch: this.cameraPitch
            });
            this._rotLogCount++;
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
        if (!this.planetMesh || !this.planetMesh.userData?.forge || !this.planetMesh.userData?.settings) {
            console.warn('[TinyDebug] snap skipped (no planet data)');
            return;
        }
        const forge = this.planetMesh.userData.forge;
        const settings = this.planetMesh.userData.settings;
        const dir = this.player.position.clone().normalize();
        const h = forge.getHeightAt(dir);
        const targetRadius = settings.radius + (h - settings.seaLevel) * settings.heightScale + this.playerHeight;
        this.player.position.copy(dir).setLength(targetRadius + 0.2);
        const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0), dir);
        this.player.quaternion.copy(quat);
        this.player.up.copy(dir);
        // Reset camera pitch but keep player yaw (so mouselook yaw stays valid)
        this.camera.rotation.set(0, 0, 0);
        this.velocity.set(0,0,0);
        this.verticalVelocity = 0;
        this.debugSnap(dir, targetRadius + this.playerHeight, true);
    }

    debugSpawn(startDir, surfaceRadius, sampledHeight) {
        const ptrEl = document.pointerLockElement;
        const worldPos = new THREE.Vector3();
        this.player.getWorldPosition(worldPos);
        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.getWorldQuaternion(new THREE.Quaternion())).normalize();
        const inputState = this.externalInput?.getState ? { ...this.externalInput.getState() } : null;
        console.warn('[TinyDebug] spawn', {
            pointerLock: ptrEl ? { id: ptrEl.id || ptrEl.tagName, tag: ptrEl.tagName } : null,
            playerWorld: { x: worldPos.x, y: worldPos.y, z: worldPos.z, radius: worldPos.length() },
            forward: { x: forward.x, y: forward.y, z: forward.z },
            startDir: { x: startDir.x, y: startDir.y, z: startDir.z },
            sampledHeight,
            surfaceRadius,
            movementState: { flying: this.isFlying, swimming: this.isSwimming },
            inputState
        });
    }

    debugSnap(dir, targetRadius, hit) {
        const ptrEl = document.pointerLockElement;
        const worldPos = new THREE.Vector3();
        this.player.getWorldPosition(worldPos);
        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.getWorldQuaternion(new THREE.Quaternion())).normalize();
        console.warn('[TinyDebug] snap', {
            pointerLock: ptrEl ? { id: ptrEl.id || ptrEl.tagName, tag: ptrEl.tagName } : null,
            playerWorld: { x: worldPos.x, y: worldPos.y, z: worldPos.z, radius: worldPos.length() },
            forward: { x: forward.x, y: forward.y, z: forward.z },
            dir: { x: dir.x, y: dir.y, z: dir.z },
            targetRadius,
            hit
        });
    }

    applyTangentLook(upDir) {
        // The player's Y axis should align with the surface normal (up)
        // The player's forward (-Z) should be tangent to the surface
        const up = upDir.clone().normalize();
        
        // Compute a forward direction tangent to the surface
        // Use world Y to derive a tangent, unless we're at a pole
        let forward;
        if (Math.abs(up.y) > 0.99) {
            // Near poles - use world X as forward reference
            forward = new THREE.Vector3(1, 0, 0);
        } else {
            // Cross up with world Y to get a tangent (right), then cross up with right to get forward
            const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), up).normalize();
            forward = new THREE.Vector3().crossVectors(up, right).normalize();
        }
        
        // Create player orientation: Y=up, looking along forward
        // Use lookAt but offset from player position
        const playerPos = this.player.position.clone();
        const lookTarget = playerPos.clone().add(forward);
        
        // Build a quaternion that orients Y to up and -Z toward forward
        const m = new THREE.Matrix4();
        m.lookAt(playerPos, lookTarget, up);
        this.player.quaternion.setFromRotationMatrix(m);
        this.player.up.copy(up);
        
        // Reset camera to look straight ahead - use quaternion
        this.cameraPitch = 0;
        this.camera.quaternion.identity();
        
        this.player.updateMatrixWorld(true);
        this.camera.updateMatrixWorld(true);
        
        console.warn('[TinyDebug] applyTangentLook', {
            up: { x: up.x, y: up.y, z: up.z },
            forward: { x: forward.x, y: forward.y, z: forward.z },
            cameraRotationAfter: { x: this.camera.rotation.x, y: this.camera.rotation.y, z: this.camera.rotation.z }
        });
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
            
            // Debug: log when movement input is detected
            if (!this._loggedMovement && (this.moveForward || this.moveBackward || this.moveLeft || this.moveRight)) {
                console.warn('[TinyDebug] movement input', { 
                    forward: this.moveForward, 
                    backward: this.moveBackward,
                    left: this.moveLeft,
                    right: this.moveRight,
                    delta,
                    playerPos: this.player.position.clone()
                });
                this._loggedMovement = true;
            }
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

        // Variable friction for ice
        let friction = 10.0;
        let traction = 1.0;
        
        if (isFrozen && !this.isFlying && !this.isSwimming) {
            friction = 0.5; // Slippery
            traction = 0.05; // Reduced control authority to maintain similar top speed but slow response
        }

        // Friction
        this.velocity.x -= this.velocity.x * friction * delta;
        this.velocity.z -= this.velocity.z * friction * delta;

        let speed = this.walkSpeed;
        if (this.isFlying) speed = this.flySpeed;
        else if (this.isSwimming) speed = this.swimSpeed;
        else if (this.isRunning) speed = this.runSpeed;

        this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
        this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
        this.direction.normalize();

        if (this.moveForward || this.moveBackward) this.velocity.z += this.direction.z * speed * traction * delta;
        if (this.moveLeft || this.moveRight) this.velocity.x -= this.direction.x * speed * traction * delta;

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
