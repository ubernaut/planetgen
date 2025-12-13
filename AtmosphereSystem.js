import * as THREE from 'three';

export class AtmosphereSystem {
    constructor(sceneGroup) {
        this.sceneGroup = sceneGroup;
        this.mesh = null;
        this.uniforms = {
            time: { value: 0 },
            glowColor: { value: new THREE.Color(0x4da8ff) },
            thickness: { value: 0.35 },
            alpha: { value: 0.4 }
        };
    }

    update(delta) {
        this.uniforms.time.value += 0.002;
    }

    // Rebuilds or updates the atmosphere mesh
    updateVisuals(settings, radius, subdivisions, heightScale, sunDir) {
        if (!settings.atmosphereEnabled) {
            if (this.mesh) this.mesh.visible = false;
            return;
        }

        const thickness = Math.max(0.05, settings.atmosphere);
        const heightOffset = settings.atmosphereHeight;
        const alpha = settings.atmosphereAlpha;
        const colorHex = settings.atmosphereColor;

        const outerRadius = radius + heightOffset + Math.max(0.05, thickness) * heightScale;
        
        this.uniforms.thickness.value = thickness;
        this.uniforms.alpha.value = alpha;
        this.uniforms.glowColor.value = new THREE.Color(colorHex);

        // Always rebuild geometry if resolution changes?
        // For simplicity, we rebuild mesh like original code.
        const geometry = new THREE.IcosahedronGeometry(outerRadius, Math.max(0, Math.floor(subdivisions)));
        
        const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            transparent: true,
            depthWrite: false,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            vertexShader: `
                #include <common>
                #include <logdepthbuf_pars_vertex>
                varying vec3 vNormal;
                varying vec3 vWorld;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    vec4 worldPos = modelMatrix * vec4(position, 1.0);
                    vWorld = worldPos.xyz;
                    gl_Position = projectionMatrix * viewMatrix * worldPos;
                    #include <logdepthbuf_vertex>
                }
            `,
            fragmentShader: `
                #include <common>
                #include <logdepthbuf_pars_fragment>
                uniform vec3 glowColor;
                uniform float thickness;
                uniform float alpha;
                varying vec3 vNormal;
                varying vec3 vWorld;
                void main() {
                    #include <logdepthbuf_fragment>
                    vec3 viewDir = normalize(cameraPosition - vWorld);
                    float rim = pow(1.0 - max(dot(viewDir, normalize(vNormal)), 0.0), 3.0);
                    float fade = smoothstep(0.0, 1.0, thickness);
                    float a = rim * fade * alpha * 0.9;
                    if(a < 0.01) discard;
                    gl_FragColor = vec4(glowColor, a);
                }
            `
        });

        if (this.mesh) {
            this.mesh.geometry.dispose();
            this.mesh.material.dispose?.();
            this.sceneGroup.remove(this.mesh);
        }

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.renderOrder = 3;
        this.sceneGroup.add(this.mesh);
    }
}
