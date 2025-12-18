import * as THREE from 'three';
import { PlanetForge } from './worldgen.js';
import { AtmosphereSystem } from './AtmosphereSystem.js';
import { CloudSystem } from './CloudSystem.js';
import { normalizeHeightmap, smoothHeightmap } from './utils.js';
import { DEFAULT_DIAMETER_KM } from './constants.js';

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
            opacity: { value: 0.9 },
            fresnelPower: { value: 3.4 },
            iceCap: { value: 0.0 },
            iceColor: { value: new THREE.Color(0xd9f1ff) },
            windStrength: { value: 0.5 }
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

            normalizeHeightmap(this.forge.data);
            smoothHeightmap(this.forge.data, this.forge.size, settings.smoothPasses);
            this.forge.applyHydrology({ seaLevel: settings.seaLevel, riverDepth: 0.015, lakeThreshold: 0.003 });

            updateStatus('Meshing planet…');
            await new Promise(r => requestAnimationFrame(r));

            this.lastSettings = { ...settings };
            
            // Create Planet Mesh
            const mesh = this.forge.createMesh(settings.radius, settings.heightScale, settings.seaLevel, settings.subdivisions, settings.iceCap);
            mesh.userData.forge = this.forge;
            mesh.userData.settings = settings;
            mesh.rotation.x = 0.25;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            this.replacePlanet(mesh);

            // Create Water Mesh
            this.replaceWater(this.buildWaterMesh(settings.radius, settings.subdivisions, settings.seaLevel, settings.heightScale, settings.iceCap, settings.waterShader || 'balanced'));

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

    setAtmosphereWeather(map, rainHaze) {
        this.atmosphereSystem?.setWeather(map, rainHaze);
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
        this.planet.castShadow = true;
        this.planet.receiveShadow = true;
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
        this.water.castShadow = true;
        this.water.receiveShadow = true;
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
        this.freshwater.castShadow = true;
        this.freshwater.receiveShadow = true;
        if (this.planet) {
            this.planet.add(mesh);
        } else {
            this.sceneManager.planetGroup.add(mesh);
        }
    }

    buildWaterMesh(radius, subdivisions, seaLevel, heightScale, iceCap, shaderType = 'balanced') {
        const waterRadius = radius + ((seaLevel - 0.5) * heightScale) + 0.01;
        const geometry = new THREE.IcosahedronGeometry(waterRadius, Math.max(0, Math.floor(subdivisions)));
        this.waterUniforms.iceCap.value = iceCap ?? 0;
        const material = shaderType === 'fast'
            ? this.buildFastOceanMaterial()
            : this.buildBalancedOceanMaterial();
        return new THREE.Mesh(geometry, material);
    }

    buildBalancedOceanMaterial() {
        // Adapted from three.js webgl_gpgpu_water shaders (simplified for spherical use)
        const uniforms = {
            time: { value: 0 },
            color: { value: new THREE.Color(0x4d9bd6) },
            sunDirection: { value: new THREE.Vector3(0.3, 0.8, 0.45).normalize() },
            eye: { value: new THREE.Vector3() }
        };
        const material = new THREE.ShaderMaterial({
            uniforms,
            transparent: true,
            depthWrite: true,
            side: THREE.FrontSide,
            vertexShader: `
                #include <common>
                #include <logdepthbuf_pars_vertex>
                uniform float time;
                varying vec3 vWorldPos;
                varying vec3 vNormal;
                void main() {
                    vec3 pos = position;
                    float wave = sin((pos.x + pos.z) * 0.25 + time * 0.7) * 0.02;
                    float wave2 = sin((pos.y * 0.4 - pos.x * 0.3) + time * 0.9) * 0.015;
                    pos += normalize(normal) * (wave + wave2);
                    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
                    vWorldPos = worldPos.xyz;
                    vNormal = normalize(normalMatrix * normalize(pos));
                    gl_Position = projectionMatrix * viewMatrix * worldPos;
                    #include <logdepthbuf_vertex>
                }
            `,
            fragmentShader: `
                #include <common>
                #include <logdepthbuf_pars_fragment>
                uniform float time;
                uniform vec3 color;
                uniform vec3 sunDirection;
                uniform vec3 eye;
                varying vec3 vWorldPos;
                varying vec3 vNormal;

                float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
                float noise(vec2 p){
                    vec2 i = floor(p);
                    vec2 f = fract(p);
                    f = f*f*(3.0-2.0*f);
                    float a = hash(i);
                    float b = hash(i + vec2(1.0,0.0));
                    float c = hash(i + vec2(0.0,1.0));
                    float d = hash(i + vec2(1.0,1.0));
                    return mix(mix(a,b,f.x), mix(c,d,f.x), f.y);
                }
                float fbm(vec2 p){
                    float s = 0.0;
                    float a = 0.6;
                    for(int i=0;i<4;i++){
                        s += noise(p) * a;
                        p *= 2.1;
                        a *= 0.5;
                    }
                    return s;
                }

                void main() {
                    #include <logdepthbuf_fragment>
                    vec3 n = normalize(vNormal);
                    vec3 V = normalize(eye - vWorldPos);
                    vec3 L = normalize(sunDirection);
                    float fresnel = pow(1.0 - max(dot(V, n), 0.0), 3.0);
                    vec2 uv = vWorldPos.xz * 0.3 + vec2(time * 0.2, time * 0.15);
                    float bump = fbm(uv * 2.5) * 0.4 + fbm(uv * 5.0) * 0.2;
                    vec3 N = normalize(n + vec3(bump * 0.4, 0.0, bump * 0.4));
                    float diffuse = max(dot(N, L), 0.0);
                    vec3 base = mix(color * 0.6, color, diffuse);
                    float spec = pow(max(dot(reflect(-L, N), V), 0.0), 28.0) * 0.2;
                    vec3 col = base + vec3(spec) + fresnel * 0.25;
                    gl_FragColor = vec4(col, 0.9);
                }
            `
        });
        material.uniforms = uniforms;
        return material;
    }

    buildFastOceanMaterial() {
        // Adapted from webgl_shaders_ocean example (simplified)
        const uniforms = {
            time: { value: 0 },
            sunDirection: { value: new THREE.Vector3(0.3, 0.8, 0.45).normalize() },
            eye: { value: new THREE.Vector3() },
            uColor: { value: new THREE.Color(0x0d4b76) }
        };
        const material = new THREE.ShaderMaterial({
            uniforms,
            transparent: true,
            depthWrite: true,
            side: THREE.FrontSide,
            vertexShader: `
                #include <common>
                #include <logdepthbuf_pars_vertex>
                uniform float time;
                varying vec3 vWorldPos;
                varying vec3 vNormal;
                void main() {
                    vec3 pos = position;
                    float w = sin(pos.x * 0.3 + time * 0.6) * 0.015;
                    w += sin(pos.z * 0.2 + time * 0.5) * 0.012;
                    pos += normalize(normal) * w;
                    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
                    vWorldPos = worldPos.xyz;
                    vNormal = normalize(normalMatrix * normalize(pos));
                    gl_Position = projectionMatrix * viewMatrix * worldPos;
                    #include <logdepthbuf_vertex>
                }
            `,
            fragmentShader: `
                #include <common>
                #include <logdepthbuf_pars_fragment>
                uniform float time;
                uniform vec3 sunDirection;
                uniform vec3 eye;
                uniform vec3 uColor;
                varying vec3 vWorldPos;
                varying vec3 vNormal;
                void main() {
                    #include <logdepthbuf_fragment>
                    vec3 n = normalize(vNormal);
                    vec3 V = normalize(eye - vWorldPos);
                    vec3 L = normalize(sunDirection);
                    float fresnel = pow(1.0 - max(dot(V, n), 0.0), 2.5);
                    float diff = max(dot(n, L), 0.0);
                    float spec = pow(max(dot(reflect(-L, n), V), 0.0), 16.0) * 0.1;
                    vec3 col = uColor * (0.5 + diff * 0.5) + spec + fresnel * 0.15;
                    gl_FragColor = vec4(col, 0.85);
                }
            `
        });
        material.uniforms = uniforms;
        return material;
    }

    applyPlanetScale(diameterKm) {
        const scale = (diameterKm || DEFAULT_DIAMETER_KM) / DEFAULT_DIAMETER_KM;
        this.sceneManager.planetGroup.scale.setScalar(scale);
        this.sceneManager.controls.minDistance = Math.max(0.2, (10 * scale) * 0.1); // approx
    }

    updateAtmosphere(settings, weather) {
        if (!this.lastSettings) return;
        const sunDir = this.sceneManager.getSunDir();
        this.atmosphereSystem.updateVisuals(settings, this.lastSettings.radius, this.lastSettings.subdivisions, this.lastSettings.heightScale, sunDir);
        if (weather) {
            this.atmosphereSystem.setWeather(weather.map, weather.rainHaze);
        }
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
