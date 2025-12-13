import * as THREE from 'three';
import { PlanetForge } from './worldgen.js';
import { AtmosphereSystem } from './AtmosphereSystem.js';
import { CloudSystem } from './CloudSystem.js';

export class PlanetManager {
    constructor(sceneManager) {
        this.sceneManager = sceneManager;
        this.forge = null;
        this.planet = null;
        this.water = null;
        this.freshwater = null;
        this.cloudLayerSettings = [];
        this.lastSettings = null;
        
        this.atmosphereSystem = new AtmosphereSystem(sceneManager.planetGroup);
        this.cloudSystem = new CloudSystem(sceneManager.planetGroup);

        this.waterUniforms = {
            time: { value: 0 },
            deepColor: { value: new THREE.Color(0x08203f) },
            shallowColor: { value: new THREE.Color(0x154f8a) },
            opacity: { value: 0.65 },
            fresnelPower: { value: 3.4 },
            iceCap: { value: 0.0 },
            iceColor: { value: new THREE.Color(0xd9f1ff) }
        };
    }

    async generate(settings, onStatusUpdate) {
        const updateStatus = (msg) => { if (onStatusUpdate) onStatusUpdate(msg); };
        
        try {
            updateStatus(`Tectonics: ${settings.numPlates} plates`);
            await new Promise(r => requestAnimationFrame(r));

            this.forge = new PlanetForge(settings.resolution);
            this.forge.generateTectonics({
                numPlates: settings.numPlates,
                jitter: settings.jitter,
                oceanFloor: 0.2,
                plateDelta: settings.plateDelta,
                faultType: settings.faultType,
                plateSizeVariance: settings.plateSizeVariance,
                desymmetrizeTiling: settings.desymmetrizeTiling
            });

            updateStatus(`Erosion: ${settings.iterations.toLocaleString()} droplets`);
            await new Promise(r => requestAnimationFrame(r));

            this.forge.applyErosion({
                iterations: settings.iterations,
                erosionRate: settings.erosionRate,
                evaporation: settings.evaporation
            });

            this.normalizeHeightmap(this.forge.data);
            this.smoothHeightmap(this.forge.data, this.forge.size, settings.smoothPasses);
            this.forge.applyHydrology({ seaLevel: settings.seaLevel, riverDepth: 0.015, lakeThreshold: 0.003 });

            updateStatus('Meshing planet…');
            await new Promise(r => requestAnimationFrame(r));

            this.lastSettings = { ...settings };
            
            // Create Planet Mesh
            const mesh = this.forge.createMesh(settings.radius, settings.heightScale, settings.seaLevel, settings.subdivisions, settings.iceCap);
            mesh.userData.forge = this.forge;
            mesh.userData.settings = settings;
            mesh.rotation.x = 0.25;
            this.replacePlanet(mesh);

            // Create Water Mesh
            this.replaceWater(this.buildWaterMesh(settings.radius, settings.subdivisions, settings.seaLevel, settings.heightScale, settings.iceCap));

            // Create Freshwater Mesh
            this.replaceFreshwater(this.forge.createFreshwaterMesh(settings.radius, settings.heightScale, settings.seaLevel, settings.subdivisions));

            // Atmosphere
            const sunDir = this.sceneManager.getSunDir();
            this.atmosphereSystem.updateVisuals(settings, settings.radius, settings.subdivisions, settings.heightScale, sunDir);

            // Clouds
            this.cloudSystem.rebuild(
                sunDir,
                settings.radius,
                settings.seaLevel,
                settings.heightScale,
                settings.subdivisions,
                this.cloudLayerSettings
            );
            
            this.applyPlanetScale(settings.planetDiameterKm);

            updateStatus(`${settings.resolution}² map · ${settings.iterations.toLocaleString()} steps`);
        } catch (err) {
            console.error(err);
            updateStatus('Generation failed – check console');
        }
    }

    update(delta, rotatePlanet = true) {
        if (this.planet && rotatePlanet) {
            this.planet.rotation.y += 0.0009;
        }
        if (this.water) this.waterUniforms.time.value += 0.016;
        if (this.freshwater) this.freshwater.material.uniforms.time.value += 0.016;
        
        this.atmosphereSystem.update(delta);
        this.cloudSystem.update(delta);
    }

    replacePlanet(mesh) {
        if (this.planet) {
            this.planet.geometry.dispose();
            if (Array.isArray(this.planet.material)) {
                this.planet.material.forEach((m) => m.dispose?.());
            } else {
                this.planet.material.dispose?.();
            }
            this.sceneManager.planetGroup.remove(this.planet);
        }
        this.planet = mesh;
        this.sceneManager.planetGroup.add(mesh);
    }

    replaceWater(mesh) {
        if (this.water) {
            this.water.geometry.dispose();
            if (Array.isArray(this.water.material)) {
                this.water.material.forEach((m) => m.dispose?.());
            } else {
                this.water.material.dispose?.();
            }
            this.sceneManager.planetGroup.remove(this.water);
        }
        this.water = mesh;
        this.sceneManager.planetGroup.add(mesh);
    }

    replaceFreshwater(mesh) {
        if (this.freshwater) {
            this.freshwater.geometry.dispose();
            this.freshwater.material.dispose?.();
            if (this.freshwater.parent) this.freshwater.parent.remove(this.freshwater);
        }
        this.freshwater = mesh;
        this.freshwater.renderOrder = 1;
        if (this.planet) {
            this.planet.add(mesh);
        } else {
            this.sceneManager.planetGroup.add(mesh);
        }
    }

    buildWaterMesh(radius, subdivisions, seaLevel, heightScale, iceCap) {
        const waterRadius = radius + ((seaLevel - 0.5) * heightScale) + 0.01;
        const geometry = new THREE.IcosahedronGeometry(waterRadius, Math.max(0, Math.floor(subdivisions)));
        this.waterUniforms.iceCap.value = iceCap ?? 0;
        const material = new THREE.ShaderMaterial({
            uniforms: this.waterUniforms,
            transparent: true,
            depthWrite: true,
            side: THREE.FrontSide,
            blending: THREE.NormalBlending,
            vertexShader: `
                #include <common>
                #include <logdepthbuf_pars_vertex>
                uniform float time;
                varying vec3 vWorldPos;
                varying vec3 vNormal;
                void main() {
                    vec3 pos = position;
                    float wave = sin((pos.x + pos.z) * 0.35 + time * 0.6) * 0.02;
                    pos += normalize(normal) * wave;
                    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
                    vWorldPos = worldPos.xyz;
                    vNormal = normalize(normalMatrix * normalize(pos));
                    vec4 mvPosition = viewMatrix * worldPos;
                    gl_Position = projectionMatrix * mvPosition;
                    #include <logdepthbuf_vertex>
                }
            `,
            fragmentShader: `
                #include <common>
                #include <logdepthbuf_pars_fragment>
                uniform vec3 deepColor;
                uniform vec3 shallowColor;
                uniform float opacity;
                uniform float fresnelPower;
                uniform float iceCap;
                uniform vec3 iceColor;
                varying vec3 vWorldPos;
                varying vec3 vNormal;
                void main() {
                    #include <logdepthbuf_fragment>
                    vec3 viewDir = normalize(cameraPosition - vWorldPos);
                    float fresnel = pow(1.0 - max(dot(viewDir, normalize(vNormal)), 0.0), fresnelPower);
                    vec3 base = mix(shallowColor, deepColor, fresnel);
                    float sparkle = pow(fresnel, 4.0) * 0.3;
                    float pole = abs(normalize(vWorldPos).y);
                    float start = clamp(1.0 - iceCap, 0.0, 1.0);
                    float iceMask = smoothstep(start, start + 0.08, pole);
                    vec3 color = mix(base + sparkle, iceColor, iceMask);
                    gl_FragColor = vec4(color, opacity);
                }
            `
        });
        return new THREE.Mesh(geometry, material);
    }

    normalizeHeightmap(buffer) {
        let min = Infinity;
        let max = -Infinity;
        for (let i = 0; i < buffer.length; i++) {
            const v = buffer[i];
            if (v < min) min = v;
            if (v > max) max = v;
        }
        const range = Math.max(max - min, 1e-5);
        for (let i = 0; i < buffer.length; i++) {
            buffer[i] = (buffer[i] - min) / range;
        }
    }
    
    smoothHeightmap(buffer, size, passes = 1) {
        if (passes <= 0) return;
        const temp = new Float32Array(buffer.length);
        for (let p = 0; p < passes; p++) {
            for (let y = 0; y < size; y++) {
                const yUp = Math.max(0, y - 1);
                const yDown = Math.min(size - 1, y + 1);
                for (let x = 0; x < size; x++) {
                    const left = (x - 1 + size) % size;
                    const right = (x + 1) % size;
                    const idx = y * size + x;
                    const acc = buffer[idx] * 2
                        + buffer[y * size + left]
                        + buffer[y * size + right]
                        + buffer[yUp * size + x]
                        + buffer[yDown * size + x];
                    temp[idx] = acc / 6;
                }
            }
            buffer.set(temp);
        }
    }

    applyPlanetScale(diameterKm) {
        const DEFAULT_DIAMETER_KM = 1000;
        const scale = (diameterKm || DEFAULT_DIAMETER_KM) / DEFAULT_DIAMETER_KM;
        this.sceneManager.planetGroup.scale.setScalar(scale);
        this.sceneManager.controls.minDistance = Math.max(0.2, (10 * scale) * 0.1); // approx
    }

    updateAtmosphere(settings) {
        if (!this.lastSettings) return;
        const sunDir = this.sceneManager.getSunDir();
        this.atmosphereSystem.updateVisuals(settings, this.lastSettings.radius, this.lastSettings.subdivisions, this.lastSettings.heightScale, sunDir);
    }

    rebuildClouds(sunDir) {
        if (!this.lastSettings) return;
        this.cloudSystem.rebuild(
            sunDir,
            this.lastSettings.radius,
            this.lastSettings.seaLevel,
            this.lastSettings.heightScale,
            this.lastSettings.subdivisions,
            this.cloudLayerSettings
        );
    }
}
