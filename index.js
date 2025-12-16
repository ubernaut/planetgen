import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { TinyPlanetControls } from './TinyPlanetControls.js';
import { PlanetForge } from './worldgen.js';
import { InputRouter } from './InputRouter.js';
import { WaterCycleSystem } from './WaterCycleSystem.js';
import { WaterCycleVolumeSystem } from './WaterCycleVolumeSystem.js';
import { RainSystem } from './RainSystem.js';

const canvas = document.getElementById('viewport');
const hudEl = document.getElementById('hud');
const hudToggleEl = document.getElementById('hudToggle');
const hudContentEl = document.getElementById('hudContent');
const statusEl = document.getElementById('status');
const presetEl = document.getElementById('preset');
const regenBtn = document.getElementById('regen');
const resolutionEl = document.getElementById('resolution');
const platesEl = document.getElementById('plates');
const plateSizeVarianceEl = document.getElementById('plateSizeVariance');
const jitterEl = document.getElementById('jitter');
const heightScaleEl = document.getElementById('heightScale');
const iterationsEl = document.getElementById('iterations');
const erosionRateEl = document.getElementById('erosionRate');
const evaporationEl = document.getElementById('evaporation');
const seaLevelEl = document.getElementById('seaLevel');
const smoothPassesEl = document.getElementById('smoothPasses');
const subdivisionsEl = document.getElementById('subdivisions');
const iceCapEl = document.getElementById('iceCap');
const plateDeltaEl = document.getElementById('plateDelta');
const faultTypeEl = document.getElementById('faultType');
const desymmetrizeTilingEl = document.getElementById('desymmetrizeTiling');
const atmosphereEl = document.getElementById('atmosphere');
const jitterValueEl = document.getElementById('jitterValue');
const heightScaleValueEl = document.getElementById('heightScaleValue');
const erosionRateValueEl = document.getElementById('erosionRateValue');
const evaporationValueEl = document.getElementById('evaporationValue');
const seaLevelValueEl = document.getElementById('seaLevelValue');
const smoothPassesValueEl = document.getElementById('smoothPassesValue');
const subdivisionsValueEl = document.getElementById('subdivisionsValue');
const iceCapValueEl = document.getElementById('iceCapValue');
const plateDeltaValueEl = document.getElementById('plateDeltaValue');
const plateSizeVarianceValueEl = document.getElementById('plateSizeVarianceValue');
const atmosphereValueEl = document.getElementById('atmosphereValue');
const atmosphereHeightEl = document.getElementById('atmosphereHeight');
const atmosphereHeightValueEl = document.getElementById('atmosphereHeightValue');
const atmosphereToggleEl = document.getElementById('atmosphereToggle');
const atmosphereAlphaEl = document.getElementById('atmosphereAlpha');
const atmosphereAlphaValueEl = document.getElementById('atmosphereAlphaValue');
const atmosphereColorEl = document.getElementById('atmosphereColor');
const cloudToggleEl = document.getElementById('cloudToggle');
const cloudAlphaEl = document.getElementById('cloudAlpha');
const cloudAlphaValueEl = document.getElementById('cloudAlphaValue');
const cloudSpeedEl = document.getElementById('cloudSpeed');
const cloudSpeedValueEl = document.getElementById('cloudSpeedValue');
const cloudQuantityEl = document.getElementById('cloudQuantity');
const cloudQuantityValueEl = document.getElementById('cloudQuantityValue');
const cloudHeightEl = document.getElementById('cloudHeight');
const cloudHeightValueEl = document.getElementById('cloudHeightValue');
const cloudColorEl = document.getElementById('cloudColor');
const cloudResolutionEl = document.getElementById('cloudResolution');
const cloudResolutionValueEl = document.getElementById('cloudResolutionValue');
const cloudShaderEl = document.getElementById('cloudShader');
const cloudLayersEl = document.getElementById('cloudLayers');
const addCloudLayerBtn = document.getElementById('addCloudLayer');
const waterCycleToggleEl = document.getElementById('waterCycleToggle');
const waterCycleCloudToggleEl = document.getElementById('waterCycleCloudToggle');
const waterCycleRunEl = document.getElementById('waterCycleRun');
const waterCycleStepBtn = document.getElementById('waterCycleStep');
const weatherSimModeEl = document.getElementById('weatherSimMode');
const weatherVolumeResEl = document.getElementById('weatherVolumeRes');
const weatherVolumeResValueEl = document.getElementById('weatherVolumeResValue');
const weatherAtmoThicknessEl = document.getElementById('weatherAtmoThickness');
const weatherAtmoThicknessValueEl = document.getElementById('weatherAtmoThicknessValue');
const axialTiltEl = document.getElementById('axialTilt');
const axialTiltValueEl = document.getElementById('axialTiltValue');
const seasonProgressEl = document.getElementById('seasonProgress');
const seasonProgressValueEl = document.getElementById('seasonProgressValue');
const weatherDebugEl = document.getElementById('weatherDebug');
const volumeSliceEl = document.getElementById('volumeSlice');
const volumeSliceValueEl = document.getElementById('volumeSliceValue');
let volumeDebugSprite = null;
const weatherSpeedEl = document.getElementById('weatherSpeed');
const weatherSpeedValueEl = document.getElementById('weatherSpeedValue');
const weatherUpdateHzEl = document.getElementById('weatherUpdateHz');
const weatherUpdateHzValueEl = document.getElementById('weatherUpdateHzValue');
const weatherMoistureLayersEl = document.getElementById('weatherMoistureLayers');
const weatherMoistureLayersValueEl = document.getElementById('weatherMoistureLayersValue');
const weatherEvapEl = document.getElementById('weatherEvap');
const weatherEvapValueEl = document.getElementById('weatherEvapValue');
const weatherPrecipEl = document.getElementById('weatherPrecip');
const weatherPrecipValueEl = document.getElementById('weatherPrecipValue');
const weatherWindEl = document.getElementById('weatherWind');
const weatherWindValueEl = document.getElementById('weatherWindValue');
const weatherWetnessEl = document.getElementById('weatherWetness');
const weatherWetnessValueEl = document.getElementById('weatherWetnessValue');
const weatherOceanInertiaEl = document.getElementById('weatherOceanInertia');
const weatherOceanInertiaValueEl = document.getElementById('weatherOceanInertiaValue');
const weatherRainFxToggleEl = document.getElementById('weatherRainFxToggle');
const weatherRainFxEl = document.getElementById('weatherRainFx');
const weatherRainFxValueEl = document.getElementById('weatherRainFxValue');
const weatherRainHazeEl = document.getElementById('weatherRainHaze');
const weatherRainHazeValueEl = document.getElementById('weatherRainHazeValue');
const movePadEl = document.getElementById('movePad');
const lookPadEl = document.getElementById('lookPad');
const mobileControlsEl = document.getElementById('mobileControls');
const surfaceOnlyBtn = document.getElementById('surfaceOnly');
const configToggleEl = document.getElementById('configToggle');
const configPanelEl = document.getElementById('configPanel');
const vrToggleEl = document.getElementById('vrToggle');
const reticleEl = document.getElementById('reticle');
const leftStickSensitivityEl = document.getElementById('leftStickSensitivity');
const leftStickSensitivityValueEl = document.getElementById('leftStickSensitivityValue');
const lookSensitivityXEl = document.getElementById('lookSensitivityX');
const lookSensitivityXValueEl = document.getElementById('lookSensitivityXValue');
const lookSensitivityYEl = document.getElementById('lookSensitivityY');
const lookSensitivityYValueEl = document.getElementById('lookSensitivityYValue');
const invertLookEl = document.getElementById('invertLook');
const planetDiameterEl = document.getElementById('planetDiameter');
const planetDiameterValueEl = document.getElementById('planetDiameterValue');

const DEFAULT_DIAMETER_KM = 1000;
const PERSON_HEIGHT_M = 2;
const BASE_RADIUS_UNITS = 10;
const DEFAULT_RADIUS_M = (DEFAULT_DIAMETER_KM * 1000) * 0.5;

const DEFAULT_WEATHER_TEX = (() => {
    const data = new Uint8Array([110, 0, 128, 0]);
    const tex = new THREE.DataTexture(data, 1, 1, THREE.RGBAFormat, THREE.UnsignedByteType);
    tex.needsUpdate = true;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    tex.colorSpace = THREE.NoColorSpace;
    return tex;
})();

const DEFAULT_WEATHER_AUX_TEX = (() => {
    const data = new Uint8Array([160, 0, 128, 128]);
    const tex = new THREE.DataTexture(data, 1, 1, THREE.RGBAFormat, THREE.UnsignedByteType);
    tex.needsUpdate = true;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = false;
    tex.colorSpace = THREE.NoColorSpace;
    return tex;
})();

function ensureVolumeDebugSprite() {
    if (volumeDebugSprite) return volumeDebugSprite;
    const material = new THREE.SpriteMaterial({
        map: DEFAULT_WEATHER_TEX,
        transparent: true,
        opacity: 1.0,
        depthTest: false,
        depthWrite: false,
        toneMapped: false
    });
    const sprite = new THREE.Sprite(material);
    sprite.renderOrder = 999;
    sprite.scale.set(5, 5, 1); // in camera space units
    // Move to top-right but keep fully visible.
    sprite.position.set(7.2, 7.5, -12);
    camera.add(sprite);
    volumeDebugSprite = sprite;
    return sprite;
}

function setVolumeDebugEnabled(enabled) {
    volumeDebugEnabled = enabled;
    if (!enabled && volumeDebugSprite) {
        volumeDebugSprite.visible = false;
    }
    if (enabled) {
        ensureVolumeDebugSprite();
        volumeDebugSprite.visible = true;
    }
}

function setVolumeSliceVisibility(show) {
    const field = document.getElementById('volumeSliceField');
    if (field) field.style.display = show ? 'block' : 'none';
}

function setVolumeSliceFromUI(val) {
    if (!volumeSliceEl) return;
    const max = Math.max(0, Number(volumeSliceEl.max) || 0);
    const v = Math.min(Math.max(Math.floor(val), 0), max);
    volumeDebugSlice = v;
    if (volumeSliceEl.value !== String(v)) volumeSliceEl.value = v;
    if (volumeSliceValueEl) volumeSliceValueEl.textContent = v;
    updateVolumeDebugSprite();
}

function syncVolumeSliceRange() {
    if (!volumeSliceEl) return;
    const meta = getWeatherVolumeMeta();
    const n = meta?.n ?? 0;
    const max = Math.max(0, n - 1);
    volumeSliceEl.max = String(max);
    if (volumeDebugSlice > max) {
        volumeDebugSlice = max;
        if (volumeSliceValueEl) volumeSliceValueEl.textContent = max;
    }
}

function getVolumeDebugTexture() {
    const atlas = getWeatherVolumeTexture();
    const meta = getWeatherVolumeMeta();
    if (!atlas || !meta) return null;
    const N = meta.n || 0;
    if (!volumeSliceTexture || volumeSliceTexture.image.width !== N || volumeSliceTexture.image.height !== N) {
        const data = new Uint8Array(Math.max(1, N * N * 4));
        volumeSliceTexture = new THREE.DataTexture(data, Math.max(1, N), Math.max(1, N), THREE.RGBAFormat, THREE.UnsignedByteType);
        volumeSliceTexture.needsUpdate = true;
        volumeSliceTexture.wrapS = THREE.ClampToEdgeWrapping;
        volumeSliceTexture.wrapT = THREE.ClampToEdgeWrapping;
        volumeSliceTexture.minFilter = THREE.NearestFilter;
        volumeSliceTexture.magFilter = THREE.NearestFilter;
        volumeSliceTexture.generateMipmaps = false;
        volumeSliceTexture.colorSpace = THREE.NoColorSpace;
    }
    const slice = Math.min(Math.max(volumeDebugSlice | 0, 0), Math.max(0, N - 1));
    const tilesX = meta.tilesX || 1;
    const tileX = slice % tilesX;
    const tileY = Math.floor(slice / tilesX);
    const atlasData = atlas.image?.data;
    if (!(atlasData && atlasData.length >= meta.atlasW * meta.atlasH * 4)) return atlas;
    const out = volumeSliceTexture.image.data;
    for (let y = 0; y < N; y++) {
        const srcRow = ((tileY * N + y) * meta.atlasW + tileX * N) * 4;
        const dstRow = y * N * 4;
        // Visualize cloud (R) as grayscale, rain (G) as blue tint to spot precip.
        for (let x = 0; x < N; x++) {
            const si = srcRow + x * 4;
            const di = dstRow + x * 4;
            const cloud = atlasData[si] ?? 0;
            const rain = atlasData[si + 1] ?? 0;
            const p = atlasData[si + 2] ?? 128;
            const rh = atlasData[si + 3] ?? 0;
            const c = Math.min(255, cloud * 2); // boost contrast
            out[di + 0] = c;
            out[di + 1] = Math.min(255, rain + c * 0.3);
            out[di + 2] = Math.min(255, p);
            out[di + 3] = Math.max(160, rh); // keep visible
        }
    }
    volumeSliceTexture.needsUpdate = true;
    return volumeSliceTexture;
}

function updateVolumeDebugSprite() {
    if (!volumeDebugEnabled || !volumeDebugSprite) return;
    const tex = getVolumeDebugTexture();
    if (!tex) {
        volumeDebugSprite.visible = false;
        return;
    }
    volumeDebugSprite.visible = true;
    volumeDebugSprite.material.map = tex;
    volumeDebugSprite.material.needsUpdate = true;
}

const isMobileDevice = () => window.matchMedia('(max-width: 768px)').matches || /Mobi|Android|iP(ad|hone|od)|IEMobile|BlackBerry|Kindle|Silk|Opera Mini/i.test(navigator.userAgent || '');

const renderer = new THREE.WebGLRenderer({ antialias: true, canvas, logarithmicDepthBuffer: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x05070f);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05070f);
scene.fog = new THREE.Fog(0x05070f, 30, 120);
const planetGroup = new THREE.Group();
scene.add(planetGroup);
let moon = null;
let moonOrbitPhase = 0;
const moonUniforms = {
    sunDir: { value: new THREE.Vector3(0, 1, 0) }
};
let landingMarker = null;
function rebuildMoon() {
    if (moon) {
        scene.remove(moon);
        moon.geometry.dispose();
        moon.material.dispose?.();
    }
    const radiusUnits = Math.max(0.05, (lastPlanetSettings?.radius ?? BASE_RADIUS_UNITS) * 0.2);
    const geom = new THREE.SphereGeometry(radiusUnits, 96, 48);
    // Crater displacement: generate random crater centers for round pits.
    const craterCount = 42;
    const centers = [];
    for (let i = 0; i < craterCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const s = Math.sin(phi);
        centers.push(new THREE.Vector3(Math.cos(theta) * s, Math.cos(phi), Math.sin(theta) * s));
    }
    const pos = geom.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i).normalize();
        let depth = 0;
        for (const c of centers) {
            const d = v.angleTo(c);
            if (d < 0.25) {
                const t = 1 - d / 0.25;
                depth -= t * t * 0.08;
            }
        }
        v.multiplyScalar(1 + depth);
        pos.setXYZ(i, v.x * radiusUnits, v.y * radiusUnits, v.z * radiusUnits);
    }
    pos.needsUpdate = true;
    geom.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
        color: 0xe0e6ed,
        roughness: 0.7,
        metalness: 0.0,
        emissive: new THREE.Color(0xffffff),
        emissiveIntensity: 0.15
    });
    moon = new THREE.Mesh(geom, mat);
    moon.castShadow = true;
    moon.receiveShadow = true;
    scene.add(moon);
}

const userGroup = new THREE.Group();
scene.add(userGroup);

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 200);
userGroup.add(camera);
camera.position.set(0, 10, 28);

const controls = new TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 1.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;
controls.dynamicDampingFactor = 0.15;
controls.noPan = true;
controls.minDistance = 12;
controls.maxDistance = 60;

const input = new InputRouter();
input.setMode(isMobileDevice() ? 'mobile' : 'desktop');
input.setLookMode('orbit');

const tinyControls = new TinyPlanetControls(camera, renderer.domElement, scene, () => {
    controls.enabled = true;
    setStatus('');
    if (savedOrbitState) {
        controls.target.copy(savedOrbitState.target);
        camera.position.copy(savedOrbitState.position);
        savedOrbitState = null;
    }
    updateOrbitBounds();
    input.setLookMode('orbit');
}, input);
const clock = new THREE.Clock();

scene.add(new THREE.HemisphereLight(0xd8e7ff, 0x0a0c12, 0.0009));
const dirLight = new THREE.DirectionalLight(0xffffff, 1.35);
dirLight.position.set(12, 16, 10);
dirLight.castShadow = true;
dirLight.shadow.mapSize.set(2048, 2048);
dirLight.shadow.camera.near = 1;
dirLight.shadow.camera.far = 200;
scene.add(dirLight);

scene.add(buildStarfield());

let planet = null;
let generating = false;
let autoRegenTimer = null;
let water = null;
let freshwater = null;
let atmosphere = null;
let clouds = [];
let waterCycleCloud = null;
let cloudLayerSettings = [];
let lastPlanetSettings = null;
let waterCycleSystem = null;
let waterCycleSystem2D = null;
let waterCycleSystem3D = null;
let pendingWaterCycleSurface = null;
let savedOrbitState = null;
let xrSession = null;
let xrPrevButtons = new Map();
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let vrSupported = false;
const weatherTmpQuat = new THREE.Quaternion();
const weatherTmpMat4 = new THREE.Matrix4();
const weatherInvRot = new THREE.Matrix3();
const weatherSunWorld = new THREE.Vector3();
const weatherSunLocal = new THREE.Vector3();
const weatherTmpMat3 = new THREE.Matrix3();
const weatherTmpVecA = new THREE.Vector3();
const weatherTmpVecB = new THREE.Vector3();
const weatherTmpVecC = new THREE.Vector3();
const weatherTmpVecD = new THREE.Vector3();
const weatherWindWorld = new THREE.Vector3();
let volumeDebugEnabled = false;
let volumeDebugSlice = 0;
let volumeSliceTexture = null;
let fpsDiv = null;
let fpsSMA = 60;

const rainSystem = new RainSystem(scene, { maxDrops: 12000 });

fpsDiv = document.createElement('div');
fpsDiv.style.position = 'fixed';
fpsDiv.style.top = '8px';
fpsDiv.style.right = '60px';
fpsDiv.style.padding = '4px 8px';
fpsDiv.style.background = 'rgba(0,0,0,0.35)';
fpsDiv.style.color = '#fff';
fpsDiv.style.fontSize = '12px';
fpsDiv.style.fontFamily = 'monospace';
fpsDiv.style.borderRadius = '6px';
fpsDiv.style.pointerEvents = 'none';
fpsDiv.textContent = 'fps: --';
document.body.appendChild(fpsDiv);

window.addEventListener('mousedown', (event) => {
    if (event.button === 1) { // Middle Click
        event.preventDefault();
        
        if (tinyControls.enabled) {
            tinyControls.exit();
            controls.enabled = true;
            return;
        }

        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(pointer, camera);
        
        // Raycast against the planet mesh
        if (planet) {
            savedOrbitState = {
                position: camera.position.clone(),
                target: controls.target.clone()
            };
            const intersects = raycaster.intersectObject(planet, false);
            if (intersects.length > 0) {
                const point = intersects[0].point;
                tinyControls.enter(point, planet, camera);
                controls.enabled = false;
                setStatus('Mode: Tiny Planet Explorer (ESC to exit)');
            }
        }
    }
});

function handleSurfaceAction() {
    if (tinyControls.enabled) {
        tinyControls.snapToSurface();
        return;
    }
    if (!planet) return;
    input.setLookMode('surface');
    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    const hit = raycaster.intersectObject(planet, false);
    if (!hit.length) return;
    savedOrbitState = {
        position: camera.position.clone(),
        target: controls.target.clone()
    };
    // Use the same entry path as middle-click so orientation matches.
    tinyControls.enter(hit[0].point, planet, camera);
    controls.enabled = false;
    setStatus('Mode: Tiny Planet Explorer (ESC to exit)');
}

const presets = {
    fast: {
        resolution: 384,
        numPlates: 9,
        jitter: 0.6,
        iterations: 80000,
        erosionRate: 0.36,
        evaporation: 0.5,
        radius: 10,
        heightScale: 18.2,
        seaLevel: 0.53,
        smoothPasses: 20,
        subdivisions: 128,
        iceCap: 0.15,
        plateDelta: 1.25,
        plateSizeVariance: 0.35,
        desymmetrizeTiling: true,
        atmosphere: 0.35,
        atmosphereHeight: 0.5,
        atmosphereAlpha: 1.0,
        atmosphereColor: '#4da8ff',
        faultType: 'ridge'
    },
    balanced: {
        resolution: 384,
        numPlates: 9,
        jitter: 0.6,
        iterations: 80000,
        erosionRate: 0.36,
        evaporation: 0.5,
        radius: 10,
        heightScale: 18.2,
        seaLevel: 0.53,
        smoothPasses: 20,
        subdivisions: 128,
        iceCap: 0.12,
        plateDelta: 1.25,
        plateSizeVariance: 0.35,
        desymmetrizeTiling: true,
        atmosphere: 0.35,
        atmosphereHeight: 0.5,
        atmosphereAlpha: 1.0,
        atmosphereColor: '#4da8ff',
        faultType: 'mixed'
    },
    high: {
        resolution: 384,
        numPlates: 9,
        jitter: 0.6,
        iterations: 80000,
        erosionRate: 0.36,
        evaporation: 0.5,
        radius: 10,
        heightScale: 18.2,
        seaLevel: 0.53,
        smoothPasses: 20,
        subdivisions: 128,
        iceCap: 0.15,
        plateDelta: 1.25,
        plateSizeVariance: 0.45,
        desymmetrizeTiling: true,
        atmosphere: 0.35,
        atmosphereHeight: 0.5,
        atmosphereAlpha: 1.0,
        atmosphereColor: '#4da8ff',
        faultType: 'ridge'
    }
};

const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));
const setStatus = (text) => {
    statusEl.textContent = text;
};
function setHudCollapsed(collapsed) {
    if (!hudEl || !hudToggleEl || !hudContentEl) return;
    hudEl.classList.toggle('collapsed', collapsed);
    hudToggleEl.setAttribute('aria-expanded', (!collapsed).toString());
    hudContentEl.setAttribute('aria-hidden', collapsed.toString());
    hudToggleEl.textContent = collapsed ? 'Show controls' : 'Hide controls';
}

setHudCollapsed(isMobileDevice());

function bindMobileControls() {
    if (!mobileControlsEl || !movePadEl || !lookPadEl) return;
    const set = (action, pressed) => input?.setAction(action, pressed);
    const trigger = (name) => input?.trigger(name);
    const bindPad = (padEl, onMove, onRelease) => {
        let active = false;
        let rect = null;
        const updateRect = () => { rect = padEl.getBoundingClientRect(); };
        const handle = (e) => {
            if (!rect) updateRect();
            const point = e.touches ? e.touches[0] : e;
            const x = point.clientX - rect.left - rect.width / 2;
            const y = point.clientY - rect.top - rect.height / 2;
            const maxR = Math.min(rect.width, rect.height) / 2;
            const dx = Math.max(-maxR, Math.min(maxR, x));
            const dy = Math.max(-maxR, Math.min(maxR, y));
            const nx = dx / maxR;
            const ny = dy / maxR;
            onMove(nx, ny);
        };
        const stop = () => {
            active = false;
            onRelease();
        };
        padEl.addEventListener('pointerdown', (e) => { e.preventDefault(); active = true; updateRect(); handle(e); });
        window.addEventListener('pointermove', (e) => { if (active) { e.preventDefault(); handle(e); } });
        window.addEventListener('pointerup', (e) => { if (active) { e.preventDefault(); stop(); } });
        padEl.addEventListener('touchstart', (e) => { active = true; updateRect(); handle(e); }, { passive: false });
        padEl.addEventListener('touchmove', (e) => { if (active) handle(e); }, { passive: false });
        padEl.addEventListener('touchend', (e) => { if (active) { stop(); } }, { passive: false });
        padEl.addEventListener('touchcancel', (e) => { if (active) { stop(); } }, { passive: false });
    };

    bindPad(movePadEl, (nx, ny) => {
        const sens = Math.max(0.1, getLeftStickSensitivity());
        const threshold = Math.max(0.1, 0.25 / sens);
        set('forward', ny < -threshold);
        set('backward', ny > threshold);
        set('left', nx < -threshold);
        set('right', nx > threshold);
    }, () => {
        set('forward', false);
        set('backward', false);
        set('left', false);
        set('right', false);
    });

    bindPad(lookPadEl, (nx, ny) => {
        // scale look
        const sx = Math.max(0.1, getLookSensitivityX());
        const sy = Math.max(0.1, getLookSensitivityY());
        const invert = isInvertLook() ? -1 : 1;
        input?.addLookDelta(nx * 6 * sx, ny * 6 * sy * invert);
    }, () => {});

    mobileControlsEl.querySelectorAll('[data-trigger]').forEach((btn) => {
        const action = btn.getAttribute('data-trigger');
        const fire = () => {
            trigger(action);
            if (action === 'surface') handleSurfaceAction();
        };
        btn.addEventListener('pointerdown', (e) => { e.preventDefault(); fire(); });
        btn.addEventListener('touchstart', (e) => { e.preventDefault(); fire(); }, { passive: false });
    });
    mobileControlsEl.querySelectorAll('.action-btn[data-action]').forEach((btn) => {
        const action = btn.getAttribute('data-action');
        const down = () => set(action, true);
        const up = () => set(action, false);
        btn.addEventListener('pointerdown', (e) => { e.preventDefault(); down(); });
        btn.addEventListener('pointerup', (e) => { e.preventDefault(); up(); });
        btn.addEventListener('pointerleave', up);
        btn.addEventListener('pointercancel', up);
        btn.addEventListener('touchstart', (e) => { e.preventDefault(); down(); }, { passive: false });
        btn.addEventListener('touchend', (e) => { e.preventDefault(); up(); }, { passive: false });
        btn.addEventListener('touchcancel', (e) => { e.preventDefault(); up(); }, { passive: false });
    });

    if (surfaceOnlyBtn) {
        surfaceOnlyBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); trigger('surface'); });
        surfaceOnlyBtn.addEventListener('touchstart', (e) => { e.preventDefault(); trigger('surface'); }, { passive: false });
    }
}

const waterUniforms = {
    time: { value: 0 },
    deepColor: { value: new THREE.Color(0x08203f) },
    shallowColor: { value: new THREE.Color(0x154f8a) },
    opacity: { value: 0.95 },
    fresnelPower: { value: 3.4 },
    iceCap: { value: 0.0 },
    iceColor: { value: new THREE.Color(0xd9f1ff) }
};
const atmosphereUniforms = {
    sunDir: { value: new THREE.Vector3(0, 1, 0) },
    glowColor: { value: new THREE.Color(0x4da8ff) },
    alpha: { value: 1.0 },
    density: { value: 6.0 },
    weatherMap: { value: DEFAULT_WEATHER_TEX },
    rainHaze: { value: 0.9 },
    planetInvRot: { value: new THREE.Matrix3() },
    planetInvScale: { value: 1.0 },
    innerRadius: { value: BASE_RADIUS_UNITS },
    outerRadius: { value: BASE_RADIUS_UNITS + 1 },
    rayleighScaleHeight: { value: 0.25 }, // fraction of (outer-inner)
    mieScaleHeight: { value: 0.08 }, // fraction of (outer-inner)
    mieG: { value: 0.76 },
    exposure: { value: 1.15 }
};

function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
}

function getPlanetDiameterKm() {
    if (!planetDiameterEl) return DEFAULT_DIAMETER_KM;
    const value = parseFloat(planetDiameterEl.value);
    return clamp(Number.isFinite(value) ? value : DEFAULT_DIAMETER_KM, 1, 1000);
}

function getPlanetScale() {
    return getPlanetDiameterKm() / DEFAULT_DIAMETER_KM;
}

function getWeatherTexture() {
    if (waterCycleToggleEl?.checked && waterCycleSystem?.enabled && waterCycleSystem.ready && waterCycleSystem.hasSurface) {
        return waterCycleSystem.getTexture();
    }
    return DEFAULT_WEATHER_TEX;
}

function getWeatherAuxTexture() {
    if (waterCycleToggleEl?.checked && waterCycleSystem?.enabled && waterCycleSystem.ready && waterCycleSystem.hasSurface) {
        return waterCycleSystem.getAuxTexture();
    }
    return DEFAULT_WEATHER_AUX_TEX;
}

function getWeatherVolumeTexture() {
    if (!(waterCycleToggleEl?.checked ?? false)) return null;
    if (!(waterCycleCloudToggleEl?.checked ?? false)) return null;
    if (!waterCycleSystem?.enabled || !waterCycleSystem.ready || !waterCycleSystem.hasSurface) return null;
    if (typeof waterCycleSystem.getVolumeTexture !== 'function') return null;
    return waterCycleSystem.getVolumeTexture();
}

function getWeatherVolumeMeta() {
    if (!waterCycleSystem?.enabled || !waterCycleSystem.ready || !waterCycleSystem.hasSurface) return null;
    if (typeof waterCycleSystem.getVolumeMeta !== 'function') return null;
    return waterCycleSystem.getVolumeMeta();
}

function sampleDataTextureRGBA(tex, u, v) {
    const img = tex?.image;
    const data = img?.data;
    const w = img?.width ?? 0;
    const h = img?.height ?? 0;
    if (!data || !w || !h) return { r: 0, g: 0, b: 0, a: 0 };

    const uu = ((u % 1) + 1) % 1;
    const vv = clamp(v, 0, 1);
    const x = Math.min(w - 1, Math.floor(uu * w));
    const y = Math.min(h - 1, Math.floor(vv * h));
    const i = (y * w + x) * 4;
    return { r: data[i] ?? 0, g: data[i + 1] ?? 0, b: data[i + 2] ?? 0, a: data[i + 3] ?? 0 };
}

function computeWindWorldFromAux(tex, invScale, planetInvRot, out) {
    if (!tex?.image?.data || !planetInvRot) {
        (out ?? weatherWindWorld).set(0, 0, 0);
        return out ?? weatherWindWorld;
    }

    // Camera direction in planet-local unscaled coordinates.
    weatherTmpVecA.copy(camera.position).multiplyScalar(invScale).applyMatrix3(planetInvRot);
    if (weatherTmpVecA.lengthSq() < 1e-12) {
        (out ?? weatherWindWorld).set(0, 0, 0);
        return out ?? weatherWindWorld;
    }
    const dirLocal = weatherTmpVecA.normalize();
    const u = Math.atan2(dirLocal.z, dirLocal.x) / (2 * Math.PI) + 0.5;
    const v = Math.asin(clamp(dirLocal.y, -1, 1)) / Math.PI + 0.5;
    const px = sampleDataTextureRGBA(tex, u, v);
    const uNorm = ((px.b ?? 128) / 255 - 0.5) * 2;
    const vNorm = ((px.a ?? 128) / 255 - 0.5) * 2;

    // Local tangent basis (east/north).
    weatherTmpVecB.set(-dirLocal.z, 0, dirLocal.x);
    if (weatherTmpVecB.lengthSq() < 1e-8) weatherTmpVecB.set(1, 0, 0);
    weatherTmpVecB.normalize();
    weatherTmpVecC.crossVectors(dirLocal, weatherTmpVecB).normalize();

    // Wind vector in planet-local (tangent plane).
    weatherTmpVecD.copy(weatherTmpVecB).multiplyScalar(uNorm).addScaledVector(weatherTmpVecC, vNorm);

    // Rotate into world space (rot = transpose(invRot) for pure rotation).
    weatherTmpMat3.copy(planetInvRot).transpose();
    const windWorld = (out ?? weatherWindWorld).copy(weatherTmpVecD).applyMatrix3(weatherTmpMat3);

    // Keep mostly tangent at the camera location.
    const upWorld = weatherTmpVecA.copy(camera.position).normalize();
    windWorld.addScaledVector(upWorld, -windWorld.dot(upWorld));

    // Clamp magnitude and avoid NaNs.
    const len = windWorld.length();
    if (!(len > 1e-6)) windWorld.set(0, 0, 0);
    else {
        const mag = Math.min(1.0, len);
        windWorld.multiplyScalar(mag / len);
    }
    return windWorld;
}

function setPlanetWeatherTexture(texture) {
    if (!planet) return;
    const material = planet.material;
    if (!material?.userData) return;
    if (material.userData.weather) {
        material.userData.weather.texture = texture;
    }
    if (material.userData.shader?.uniforms?.uWeatherMap) {
        material.userData.shader.uniforms.uWeatherMap.value = texture;
    }
}

function setPlanetWeatherAuxTexture(texture) {
    if (!planet) return;
    const material = planet.material;
    if (!material?.userData) return;
    if (material.userData.weather) {
        material.userData.weather.auxTexture = texture;
    }
    if (material.userData.shader?.uniforms?.uWeatherAuxMap) {
        material.userData.shader.uniforms.uWeatherAuxMap.value = texture;
    }
}

function setPlanetWeatherStrength(strength) {
    if (!planet) return;
    const material = planet.material;
    if (!material?.userData) return;
    if (material.userData.weather) {
        material.userData.weather.strength = strength;
    }
    if (material.userData.shader?.uniforms?.uWeatherStrength) {
        material.userData.shader.uniforms.uWeatherStrength.value = strength;
    }
}

function setPlanetWeatherDebugMode(mode) {
    if (!planet) return;
    const material = planet.material;
    if (!material?.userData) return;
    if (material.userData.weather) {
        material.userData.weather.debug = mode;
    }
    if (material.userData.shader?.uniforms?.uWeatherDebug) {
        material.userData.shader.uniforms.uWeatherDebug.value = mode;
    }
}

function syncWaterCycleSurfaceFromForge(forge, settings) {
    if (!forge || !settings) return;
    const planetRadiusM = (settings.planetDiameterKm ?? getPlanetDiameterKm()) * 1000 * 0.5;
    const args = { heightmap: forge.data, size: forge.size, seaLevel: settings.seaLevel, planetRadiusM };
    pendingWaterCycleSurface = args;

    const systems = [waterCycleSystem, waterCycleSystem2D, waterCycleSystem3D].filter(Boolean);
    for (const sys of systems) {
        if (sys?.enabled && sys.ready) {
            sys.setPlanetSurface(args);
        }
    }

    setPlanetWeatherTexture(getWeatherTexture());
    setPlanetWeatherAuxTexture(getWeatherAuxTexture());
}

function getPersonHeightUnits() {
    const defaultRadiusMeters = (DEFAULT_DIAMETER_KM * 1000) * 0.5;
    const metersPerUnit = defaultRadiusMeters / BASE_RADIUS_UNITS;
    const baseHeightUnits = PERSON_HEIGHT_M / metersPerUnit;
    return baseHeightUnits * getPlanetScale();
}

function getLeftStickSensitivity() {
    const v = parseFloat(leftStickSensitivityEl?.value);
    return Number.isFinite(v) ? v : 1;
}
function getLookSensitivityX() {
    const v = parseFloat(lookSensitivityXEl?.value);
    return Number.isFinite(v) ? v : 0.4;
}
function getLookSensitivityY() {
    const v = parseFloat(lookSensitivityYEl?.value);
    return Number.isFinite(v) ? v : 0.4;
}
function isInvertLook() {
    return !!invertLookEl?.checked;
}

function updateOrbitBounds() {
    if (!lastPlanetSettings) return;
    const planetRadius = (lastPlanetSettings.radius ?? BASE_RADIUS_UNITS) + (lastPlanetSettings.heightScale ?? 0);
    const scale = getPlanetScale();
    const surfaceRadius = Math.max(0.5, planetRadius * scale);
    controls.minDistance = Math.max(0.2, surfaceRadius * 0.1);
    controls.maxDistance = Math.max(surfaceRadius * 8, controls.minDistance + 1);
    const camOffset = camera.position.clone().sub(controls.target);
    const dist = camOffset.length();
    const clampedDist = clamp(dist, controls.minDistance, controls.maxDistance);
    if (Math.abs(clampedDist - dist) > 1e-4) {
        camOffset.setLength(clampedDist);
        camera.position.copy(controls.target).add(camOffset);
    }
    camera.near = Math.max(0.002, surfaceRadius * 0.0005);
    camera.far = Math.max(150, surfaceRadius * 14);
    camera.updateProjectionMatrix();
}

function applyPlanetScale() {
    const scale = getPlanetScale();
    planetGroup.scale.setScalar(scale);
    updateOrbitBounds();
}

function syncMobileVisibility() {
    if (!mobileControlsEl) return;
    const mobile = isMobileDevice();
    const inTiny = tinyControls.enabled;
    if (!mobile) {
        mobileControlsEl.style.display = 'none';
    } else {
        mobileControlsEl.style.display = 'block';
        if (movePadEl) movePadEl.style.display = inTiny ? 'grid' : 'none';
        if (lookPadEl) lookPadEl.style.display = inTiny ? 'grid' : 'none';
        const actionColumn = mobileControlsEl.querySelector('.action-column');
        if (actionColumn) actionColumn.style.display = inTiny ? 'grid' : 'none';
        if (surfaceOnlyBtn) surfaceOnlyBtn.style.display = inTiny ? 'none' : 'inline-flex';
    }
    // Always show a consistent on-screen reticle (desktop + mobile).
    if (reticleEl) reticleEl.style.display = 'block';
}

function getWalkSpeed() {
    return 0.35 * Math.max(0.1, getPlanetScale());
}

function updateRangeLabels() {
    jitterValueEl.textContent = Number(jitterEl.value).toFixed(2);
    heightScaleValueEl.textContent = Number(heightScaleEl.value).toFixed(2);
    erosionRateValueEl.textContent = Number(erosionRateEl.value).toFixed(2);
    evaporationValueEl.textContent = Number(evaporationEl.value).toFixed(3);
    seaLevelValueEl.textContent = Number(seaLevelEl.value).toFixed(2);
    atmosphereValueEl.textContent = Number(atmosphereEl.value).toFixed(2);
    atmosphereHeightValueEl.textContent = Number(atmosphereHeightEl.value).toFixed(2);
    smoothPassesValueEl.textContent = Number(smoothPassesEl.value).toFixed(0);
    subdivisionsValueEl.textContent = Number(subdivisionsEl.value).toFixed(0);
    iceCapValueEl.textContent = Number(iceCapEl.value).toFixed(2);
    plateDeltaValueEl.textContent = Number(plateDeltaEl.value).toFixed(2);
    plateSizeVarianceValueEl.textContent = Number(plateSizeVarianceEl.value).toFixed(2);
    atmosphereAlphaValueEl.textContent = Number(atmosphereAlphaEl.value).toFixed(2);
    cloudAlphaValueEl.textContent = Number(cloudAlphaEl.value).toFixed(2);
    cloudSpeedValueEl.textContent = Number(cloudSpeedEl.value).toFixed(2);
    cloudQuantityValueEl.textContent = Number(cloudQuantityEl.value).toFixed(2);
    cloudHeightValueEl.textContent = Number(cloudHeightEl.value).toFixed(2);
    cloudResolutionValueEl.textContent = Number(cloudResolutionEl.value).toFixed(0);
    if (weatherSpeedEl && weatherSpeedValueEl) weatherSpeedValueEl.textContent = Number(weatherSpeedEl.value).toFixed(0);
    if (weatherUpdateHzEl && weatherUpdateHzValueEl) weatherUpdateHzValueEl.textContent = Number(weatherUpdateHzEl.value).toFixed(0);
    if (weatherVolumeResEl && weatherVolumeResValueEl) weatherVolumeResValueEl.textContent = Number(weatherVolumeResEl.value).toFixed(0);
    if (weatherAtmoThicknessEl && weatherAtmoThicknessValueEl) weatherAtmoThicknessValueEl.textContent = Number(weatherAtmoThicknessEl.value).toFixed(0);
    if (axialTiltEl && axialTiltValueEl) axialTiltValueEl.textContent = Number(axialTiltEl.value).toFixed(1);
    if (seasonProgressEl && seasonProgressValueEl) seasonProgressValueEl.textContent = Number(seasonProgressEl.value).toFixed(2);
    if (weatherMoistureLayersEl && weatherMoistureLayersValueEl) weatherMoistureLayersValueEl.textContent = Number(weatherMoistureLayersEl.value).toFixed(0);
    if (weatherEvapEl && weatherEvapValueEl) weatherEvapValueEl.textContent = Number(weatherEvapEl.value).toFixed(2);
    if (weatherPrecipEl && weatherPrecipValueEl) weatherPrecipValueEl.textContent = Number(weatherPrecipEl.value).toFixed(2);
    if (weatherWindEl && weatherWindValueEl) weatherWindValueEl.textContent = Number(weatherWindEl.value).toFixed(2);
    if (weatherWetnessEl && weatherWetnessValueEl) weatherWetnessValueEl.textContent = Number(weatherWetnessEl.value).toFixed(2);
    if (weatherOceanInertiaEl && weatherOceanInertiaValueEl) weatherOceanInertiaValueEl.textContent = Number(weatherOceanInertiaEl.value).toFixed(2);
    if (weatherRainFxEl && weatherRainFxValueEl) weatherRainFxValueEl.textContent = Number(weatherRainFxEl.value).toFixed(2);
    if (weatherRainHazeEl && weatherRainHazeValueEl) weatherRainHazeValueEl.textContent = Number(weatherRainHazeEl.value).toFixed(2);
    if (planetDiameterEl && planetDiameterValueEl) {
        planetDiameterValueEl.textContent = Number(planetDiameterEl.value).toFixed(0);
    }
    if (leftStickSensitivityEl && leftStickSensitivityValueEl) leftStickSensitivityValueEl.textContent = Number(leftStickSensitivityEl.value).toFixed(1);
    if (lookSensitivityXEl && lookSensitivityXValueEl) lookSensitivityXValueEl.textContent = Number(lookSensitivityXEl.value).toFixed(1);
    if (lookSensitivityYEl && lookSensitivityYValueEl) lookSensitivityYValueEl.textContent = Number(lookSensitivityYEl.value).toFixed(1);
}

function markDirty() {
    setStatus('Params changed. Regenerating…');
}

function applyPreset(key) {
    const preset = presets[key] || presets.balanced;
    presetEl.value = key;
    resolutionEl.value = preset.resolution;
    platesEl.value = preset.numPlates;
    plateSizeVarianceEl.value = preset.plateSizeVariance ?? 0.35;
    desymmetrizeTilingEl.checked = preset.desymmetrizeTiling ?? true;
    jitterEl.value = preset.jitter;
    heightScaleEl.value = preset.heightScale;
    iterationsEl.value = preset.iterations;
    erosionRateEl.value = preset.erosionRate;
    evaporationEl.value = preset.evaporation;
    seaLevelEl.value = preset.seaLevel ?? 0.53;
    atmosphereEl.value = preset.atmosphere ?? 0.35;
    atmosphereHeightEl.value = preset.atmosphereHeight ?? 0.5;
    atmosphereAlphaEl.value = preset.atmosphereAlpha ?? 1.0;
    atmosphereColorEl.value = preset.atmosphereColor || '#4da8ff';
    smoothPassesEl.value = preset.smoothPasses ?? 20;
    subdivisionsEl.value = preset.subdivisions ?? 60;
    iceCapEl.value = preset.iceCap ?? 0.15;
    plateDeltaEl.value = preset.plateDelta ?? 1.25;
    faultTypeEl.value = preset.faultType || 'ridge';
    updateRangeLabels();
}

function readSettings() {
    return {
        resolution: clamp(parseInt(resolutionEl.value, 10) || 256, 64, 4096),
        numPlates: clamp(parseInt(platesEl.value, 10) || 9, 4, 400),
        plateSizeVariance: clamp(parseFloat(plateSizeVarianceEl.value) || 0, 0, 2),
        desymmetrizeTiling: Boolean(desymmetrizeTilingEl?.checked),
        jitter: clamp(parseFloat(jitterEl.value) || 0.5, 0, 1),
        iterations: clamp(parseInt(iterationsEl.value, 10) || 50000, 1000, 2000000),
        erosionRate: clamp(parseFloat(erosionRateEl.value) || 0.1, 0.001, 2),
        evaporation: clamp(parseFloat(evaporationEl.value) || 0.02, 0, 2),
        heightScale: clamp(parseFloat(heightScaleEl.value) || 2, 0, 80),
        seaLevel: clamp(parseFloat(seaLevelEl.value) || 0.5, 0, 1),
        atmosphere: clamp(parseFloat(atmosphereEl.value) || 0.35, 0.05, 1.5),
        atmosphereHeight: clamp(parseFloat(atmosphereHeightEl.value) || 0.5, 0, 5),
        atmosphereAlpha: clamp(parseFloat(atmosphereAlphaEl.value) || 1.0, 0, 1),
        atmosphereColor: atmosphereColorEl.value || '#4da8ff',
        smoothPasses: Math.round(clamp(parseFloat(smoothPassesEl.value) || 0, 0, 40)),
        subdivisions: Math.round(clamp(parseFloat(subdivisionsEl.value) || 128, 0, 512)),
        iceCap: clamp(parseFloat(iceCapEl.value) || 0.1, 0, 1),
        plateDelta: clamp(parseFloat(plateDeltaEl.value) || 1.25, 0, 2),
        faultType: faultTypeEl.value || 'ridge',
        radius: BASE_RADIUS_UNITS
    };
}

function writeSettings(settings) {
    resolutionEl.value = settings.resolution;
    platesEl.value = settings.numPlates;
    plateSizeVarianceEl.value = settings.plateSizeVariance;
    if (desymmetrizeTilingEl) desymmetrizeTilingEl.checked = !!settings.desymmetrizeTiling;
    jitterEl.value = settings.jitter;
    iterationsEl.value = settings.iterations;
    erosionRateEl.value = settings.erosionRate;
    evaporationEl.value = settings.evaporation;
    heightScaleEl.value = settings.heightScale;
    seaLevelEl.value = settings.seaLevel;
    atmosphereEl.value = settings.atmosphere;
    atmosphereHeightEl.value = settings.atmosphereHeight;
    atmosphereAlphaEl.value = settings.atmosphereAlpha;
    atmosphereColorEl.value = settings.atmosphereColor;
    smoothPassesEl.value = settings.smoothPasses;
    subdivisionsEl.value = settings.subdivisions;
    iceCapEl.value = settings.iceCap;
    plateDeltaEl.value = settings.plateDelta;
    faultTypeEl.value = settings.faultType;
    updateRangeLabels();
}

function normalizeHeightmap(buffer) {
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

function smoothHeightmap(buffer, size, passes = 1) {
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

async function generateWorld(presetKey) {
    if (generating) return;
    
    // Exit FPS mode if active
    if (tinyControls.enabled) {
        tinyControls.exit();
        controls.enabled = true;
    }

    generating = true;
    clearTimeout(autoRegenTimer);
    regenBtn.disabled = true;
    presetEl.disabled = true;
    resolutionEl.disabled = true;
    platesEl.disabled = true;
    plateSizeVarianceEl.disabled = true;
    desymmetrizeTilingEl.disabled = true;
    jitterEl.disabled = true;
    heightScaleEl.disabled = true;
    iterationsEl.disabled = true;
    erosionRateEl.disabled = true;
    evaporationEl.disabled = true;
    seaLevelEl.disabled = true;
    atmosphereEl.disabled = true;
    atmosphereHeightEl.disabled = true;
    smoothPassesEl.disabled = true;
    subdivisionsEl.disabled = true;
    iceCapEl.disabled = true;
    atmosphereHeightEl.disabled = true;

    const settings = readSettings();
    writeSettings(settings); // ensure UI reflects clamped values

    try {
        setStatus(`Tectonics: ${settings.numPlates} plates`);
        await nextFrame();

        const forge = new PlanetForge(settings.resolution);
        forge.generateTectonics({
            numPlates: settings.numPlates,
            jitter: settings.jitter,
            oceanFloor: 0.2,
            plateDelta: settings.plateDelta,
            faultType: settings.faultType,
            plateSizeVariance: settings.plateSizeVariance,
            desymmetrizeTiling: settings.desymmetrizeTiling
        });

        setStatus(`Erosion: ${settings.iterations.toLocaleString()} droplets`);
        await nextFrame();

        forge.applyErosion({
            iterations: settings.iterations,
            erosionRate: settings.erosionRate,
            evaporation: settings.evaporation
        });

        normalizeHeightmap(forge.data);
        smoothHeightmap(forge.data, forge.size, settings.smoothPasses);
        forge.applyHydrology({ seaLevel: settings.seaLevel, riverDepth: 0.015, lakeThreshold: 0.003 });

        setStatus('Meshing planet…');
        await nextFrame();

        lastPlanetSettings = { ...settings, planetDiameterKm: getPlanetDiameterKm() };
        syncWaterCycleSurfaceFromForge(forge, lastPlanetSettings);
        const mesh = forge.createMesh(
            settings.radius,
            settings.heightScale,
            settings.seaLevel,
            settings.subdivisions,
            settings.iceCap,
            getWeatherTexture(),
            getWeatherAuxTexture()
        );
        mesh.userData.forge = forge;
        mesh.userData.settings = settings;
        mesh.rotation.x = 0.25;
        replacePlanet(mesh);
        setPlanetWeatherTexture(getWeatherTexture());
        setPlanetWeatherAuxTexture(getWeatherAuxTexture());
        applyWaterCycleConfig();
        replaceWater(buildWaterMesh(settings.radius, settings.subdivisions, settings.seaLevel, settings.heightScale, settings.iceCap));
        replaceFreshwater(forge.createFreshwaterMesh(settings.radius, settings.heightScale, settings.seaLevel, settings.subdivisions));
        const sunDir = new THREE.Vector3().copy(dirLight.position).normalize();
        if (atmosphereToggleEl.checked) {
            replaceAtmosphere(buildAtmosphereMesh(settings.radius, settings.subdivisions, settings.heightScale, settings.atmosphereHeight, settings.atmosphere, sunDir, settings.atmosphereAlpha, settings.atmosphereColor));
        } else if (atmosphere) {
            atmosphere.visible = false;
        }
        rebuildClouds(sunDir);
        rebuildWaterCycleClouds(sunDir);
        rebuildMoon();
        applyPlanetScale();

        setStatus(`${settings.resolution}² map · ${settings.iterations.toLocaleString()} steps`);
    } catch (err) {
        console.error(err);
        setStatus('Generation failed – check console');
    } finally {
        generating = false;
        regenBtn.disabled = false;
        presetEl.disabled = false;
        resolutionEl.disabled = false;
        platesEl.disabled = false;
        plateSizeVarianceEl.disabled = false;
        desymmetrizeTilingEl.disabled = false;
        jitterEl.disabled = false;
        heightScaleEl.disabled = false;
        iterationsEl.disabled = false;
        erosionRateEl.disabled = false;
        evaporationEl.disabled = false;
        seaLevelEl.disabled = false;
        atmosphereEl.disabled = false;
        atmosphereHeightEl.disabled = false;
        smoothPassesEl.disabled = false;
        subdivisionsEl.disabled = false;
        iceCapEl.disabled = false;
    }
}

function replacePlanet(mesh) {
    if (planet) {
        planet.geometry.dispose();
        if (Array.isArray(planet.material)) {
            planet.material.forEach((m) => m.dispose?.());
        } else {
            planet.material.dispose?.();
        }
        planetGroup.remove(planet);
    }
    planet = mesh;
    planetGroup.add(mesh);
}

function replaceWater(mesh) {
    if (water) {
        water.geometry.dispose();
        if (Array.isArray(water.material)) {
            water.material.forEach((m) => m.dispose?.());
        } else {
            water.material.dispose?.();
        }
        planetGroup.remove(water);
    }
    water = mesh;
    planetGroup.add(mesh);
}

function replaceFreshwater(mesh) {
    if (freshwater) {
        freshwater.geometry.dispose();
        freshwater.material.dispose?.();
        if (freshwater.parent) freshwater.parent.remove(freshwater);
    }
    freshwater = mesh;
    freshwater.renderOrder = 1;
    if (planet) {
        planet.add(mesh);
    } else {
        planetGroup.add(mesh);
    }
}

function replaceAtmosphere(mesh) {
    if (atmosphere) {
        atmosphere.geometry.dispose();
        atmosphere.material.dispose?.();
        planetGroup.remove(atmosphere);
    }
    atmosphere = mesh;
    // Draw before clouds so scattering doesn't wash out volumetric clouds (clouds don't write depth).
    atmosphere.renderOrder = 1;
    planetGroup.add(mesh);
}

function replaceClouds(mesh) {
    if (clouds) {
        clouds.geometry.dispose();
        clouds.material.dispose?.();
        planetGroup.remove(clouds);
    }
    clouds = mesh;
    planetGroup.add(mesh);
}

function buildStarfield() {
    const starCount = 1200;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
        const r = 90 + Math.random() * 60;
        const theta = Math.random() * Math.PI * 2;
        const u = Math.random() * 2 - 1;
        const phi = Math.acos(u);
        const sinPhi = Math.sin(phi);

        positions[i * 3] = r * sinPhi * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.cos(phi);
        positions[i * 3 + 2] = r * sinPhi * Math.sin(theta);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
        color: 0x7dd3fc,
        size: 0.5,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.7
    });
    return new THREE.Points(geometry, material);
}

function buildWaterMesh(radius, subdivisions, seaLevel, heightScale, iceCap) {
    const waterRadius = radius + ((seaLevel - 0.5) * heightScale) + 0.01; // align to slider, tiny lift to avoid z-fight
    const geometry = new THREE.IcosahedronGeometry(waterRadius, Math.max(0, Math.floor(subdivisions)));
    waterUniforms.iceCap.value = iceCap ?? 0;
    const material = new THREE.ShaderMaterial({
        uniforms: waterUniforms,
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


function buildAtmosphereMesh(radius, subdivisions, heightScale, heightOffset, thickness, sunDir, alpha, colorHex) {
    const outerRadius = radius + heightOffset + Math.max(0.05, thickness) * heightScale;
    atmosphereUniforms.alpha.value = alpha;
    atmosphereUniforms.glowColor.value = new THREE.Color(colorHex);
    atmosphereUniforms.sunDir.value = sunDir.clone().normalize();
    atmosphereUniforms.innerRadius.value = radius;
    atmosphereUniforms.outerRadius.value = outerRadius;

    const detail = Math.max(2, Math.min(6, Math.floor(subdivisions / 24)));
    const geometry = new THREE.IcosahedronGeometry(outerRadius, detail);
    const material = new THREE.ShaderMaterial({
        uniforms: atmosphereUniforms,
        transparent: true,
        depthWrite: false,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        vertexShader: `
            #include <common>
            #include <logdepthbuf_pars_vertex>
            varying vec3 vWorld;
            void main() {
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorld = worldPos.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPos;
                #include <logdepthbuf_vertex>
            }
        `,
        fragmentShader: `
            #include <common>
            #include <logdepthbuf_pars_fragment>
            uniform float alpha;
            uniform float density;
            uniform vec3 glowColor;
            uniform vec3 sunDir;
            uniform sampler2D weatherMap;
            uniform float rainHaze;
            uniform mat3 planetInvRot;
            uniform float planetInvScale;
            uniform float innerRadius;
            uniform float outerRadius;
            uniform float rayleighScaleHeight;
            uniform float mieScaleHeight;
            uniform float mieG;
            uniform float exposure;
            varying vec3 vWorld;

            vec2 raySphere(vec3 ro, vec3 rd, float r) {
                float b = dot(ro, rd);
                float c = dot(ro, ro) - r * r;
                float h = b * b - c;
                if (h < 0.0) return vec2(1e9, -1e9);
                h = sqrt(h);
                return vec2(-b - h, -b + h);
            }

            float phaseRayleigh(float mu) {
                return 3.0 / (16.0 * PI) * (1.0 + mu * mu);
            }

            float phaseMie(float mu, float g) {
                float g2 = g * g;
                float denom = pow(max(1.0 + g2 - 2.0 * g * mu, 1e-4), 1.5);
                return (1.0 - g2) / (4.0 * PI * denom);
            }

            vec3 exp3(vec3 v) {
                return vec3(exp(-v.x), exp(-v.y), exp(-v.z));
            }

            void main() {
                #include <logdepthbuf_fragment>

                vec3 ro = planetInvRot * (cameraPosition * planetInvScale);
                vec3 p1 = planetInvRot * (vWorld * planetInvScale);
                vec3 rd = normalize(p1 - ro);
                float tFrag = length(p1 - ro);

                vec3 sunLocal = normalize(planetInvRot * sunDir);
                vec3 viewDirLocal = normalize(p1);
                float wu = atan(viewDirLocal.z, viewDirLocal.x) / (2.0 * PI) + 0.5;
                float wv = asin(clamp(viewDirLocal.y, -1.0, 1.0)) / PI + 0.5;
                float rainDir = texture2D(weatherMap, vec2(wu, wv)).g;

                vec2 tOuter = raySphere(ro, rd, outerRadius);
                float tStart = max(tOuter.x, 0.0);
                float tEnd = min(tOuter.y, tFrag);
                if (tEnd <= tStart) discard;

                vec2 tInner = raySphere(ro, rd, innerRadius);
                if (tInner.x > 0.0) {
                    tEnd = min(tEnd, tInner.x);
                }
                if (tEnd <= tStart) discard;

                float atmoH = max(outerRadius - innerRadius, 1e-3);
                float HR = max(atmoH * rayleighScaleHeight, 1e-4);
                float HM = max(atmoH * mieScaleHeight, 1e-4);
                float rainM = clamp(rainDir * rainHaze, 0.0, 2.0);
                HM = max(HM / (1.0 + rainM * 0.9), 1e-4); // concentrate haze near ground

                // Wavelength-weighted Rayleigh coefficients (scaled for our unit system)
                vec3 betaR = vec3(5.8e-3, 13.5e-3, 33.1e-3);
                // Use glowColor as a tint/bias for Rayleigh (keeps UI meaningful)
                betaR *= mix(vec3(0.75), glowColor, 0.85);

                betaR *= density;
                float betaM = 21e-3 * density;
                betaM *= (1.0 + rainM * 1.35);

                const int PRIMARY_STEPS = 8;
                const int LIGHT_STEPS = 4;

                float segLen = (tEnd - tStart) / float(PRIMARY_STEPS);
                float optR = 0.0;
                float optM = 0.0;
                vec3 sumR = vec3(0.0);
                vec3 sumM = vec3(0.0);

                for (int i = 0; i < PRIMARY_STEPS; i++) {
                    float t = tStart + (float(i) + 0.5) * segLen;
                    vec3 pos = ro + rd * t;
                    float height = max(length(pos) - innerRadius, 0.0);
                    float dR = exp(-height / HR);
                    float dM = exp(-height / HM);

                    optR += dR * segLen;
                    optM += dM * segLen;

                    vec2 tSunOuter = raySphere(pos, sunLocal, outerRadius);
                    float tSunEnd = tSunOuter.y;
                    if (tSunEnd <= 0.0) continue;

                    vec2 tSunInner = raySphere(pos, sunLocal, innerRadius);
                    float shadow = 1.0;
                    if (tSunInner.x > 0.0 && tSunInner.x < tSunEnd) {
                        shadow = 0.0;
                    }

                    float segL = tSunEnd / float(LIGHT_STEPS);
                    float optSunR = 0.0;
                    float optSunM = 0.0;
                    for (int j = 0; j < LIGHT_STEPS; j++) {
                        float tl = (float(j) + 0.5) * segL;
                        vec3 pl = pos + sunLocal * tl;
                        float hL = max(length(pl) - innerRadius, 0.0);
                        optSunR += exp(-hL / HR) * segL;
                        optSunM += exp(-hL / HM) * segL;
                    }

                    vec3 tau = betaR * (optR + optSunR) + vec3(betaM * (optM + optSunM));
                    vec3 trans = exp3(tau);
                    trans *= shadow;

                    sumR += trans * dR * segLen;
                    sumM += trans * dM * segLen;
                }

                float mu = dot(rd, sunLocal);
                float pR = phaseRayleigh(mu);
                float pM = phaseMie(mu, mieG);

                vec3 radiance = (betaR * sumR * pR + vec3(betaM) * sumM * pM) * 18.0;
                radiance = vec3(1.0) - exp(-radiance * exposure);
                radiance *= alpha;

                float lum = max(radiance.r, max(radiance.g, radiance.b));
                if (lum < 0.002) discard;

                gl_FragColor = vec4(radiance, 1.0);
            }
        `
    });
    return new THREE.Mesh(geometry, material);
}

function buildCloudMesh(radius, baseSubdivisions, sunDir, planetRadius, seaLevel, heightScale, settings) {
    const baseRadius = Math.max(0.1, radius + settings.height);
    const halfThickness = Math.max(0.25, heightScale * 0.03);
    const minInner = planetRadius + ((seaLevel - 0.5) * heightScale) + 0.05;
    const innerRadius = Math.max(minInner, baseRadius - halfThickness);
    // Keep cloud shell thickness stable even when the layer is clamped above the surface.
    const outerRadius = innerRadius + (2.0 * halfThickness);

    const modeId = settings.mode === 'billow' ? 1 : settings.mode === 'cellular' ? 2 : 0;
    const uniforms = {
        windOffset: { value: 0 },
        color: { value: new THREE.Color(settings.color) },
        opacity: { value: settings.alpha },
        sunDir: { value: sunDir.clone().normalize() }, // world-space; converted in shader via planetInvRot
        windDir: { value: new THREE.Vector3(0, 0, 1) },
        quantity: { value: settings.quantity },
        noiseScale: { value: Math.max(1, settings.resolution) },
        mode: { value: modeId },
        weatherMap: { value: getWeatherTexture() },
        weatherAuxMap: { value: getWeatherAuxTexture() },
        planetInvRot: { value: new THREE.Matrix3() },
        planetInvScale: { value: 1.0 },
        innerRadius: { value: innerRadius },
        outerRadius: { value: outerRadius }
    };

    const detail = Math.max(2, Math.min(6, Math.floor(baseSubdivisions / 24)));
    const geometry = new THREE.IcosahedronGeometry(outerRadius, detail);
    const material = new THREE.ShaderMaterial({
        uniforms,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.NormalBlending,
        vertexShader: `
            #include <common>
            #include <logdepthbuf_pars_vertex>
            varying vec3 vWorld;
            void main() {
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorld = worldPos.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPos;
                #include <logdepthbuf_vertex>
            }
        `,
        fragmentShader: `
            #include <common>
            #include <logdepthbuf_pars_fragment>
            uniform vec3 color;
            uniform float opacity;
            uniform float windOffset;
            uniform vec3 sunDir;
            uniform vec3 windDir;
            uniform float quantity;
            uniform float noiseScale;
            uniform float mode;
            uniform sampler2D weatherMap;
            uniform sampler2D weatherAuxMap;
            uniform mat3 planetInvRot;
            uniform float planetInvScale;
            uniform float innerRadius;
            uniform float outerRadius;
            varying vec3 vWorld;

            float hash(vec3 p) {
                p = fract(p * 0.3183099 + vec3(0.1,0.2,0.3));
                p *= 17.0;
                return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
            }
            float noise(vec3 p) {
                vec3 i = floor(p);
                vec3 f = fract(p);
                f = f*f*(3.0-2.0*f);
                float n000 = hash(i + vec3(0,0,0));
                float n100 = hash(i + vec3(1,0,0));
                float n010 = hash(i + vec3(0,1,0));
                float n110 = hash(i + vec3(1,1,0));
                float n001 = hash(i + vec3(0,0,1));
                float n101 = hash(i + vec3(1,0,1));
                float n011 = hash(i + vec3(0,1,1));
                float n111 = hash(i + vec3(1,1,1));
                float nx00 = mix(n000, n100, f.x);
                float nx10 = mix(n010, n110, f.x);
                float nx01 = mix(n001, n101, f.x);
                float nx11 = mix(n011, n111, f.x);
                float nxy0 = mix(nx00, nx10, f.y);
                float nxy1 = mix(nx01, nx11, f.y);
                return mix(nxy0, nxy1, f.z);
            }
            float fbm(vec3 p) {
                float sum = 0.0;
                float amp = 0.55;
                for(int i=0;i<4;i++){
                    sum += noise(p) * amp;
                    p *= 2.1;
                    amp *= 0.5;
                }
                return sum;
            }

            float densityAt(vec3 pos, out float rainOut) {
                float r = length(pos);
                if (r < innerRadius || r > outerRadius) { rainOut = 0.0; return 0.0; }
                float h = (r - innerRadius) / max(outerRadius - innerRadius, 1e-3);
                float profile = smoothstep(0.0, 0.12, h) * (1.0 - smoothstep(0.55, 1.0, h));

                vec3 dir = pos / max(r, 1e-6);
                float u = atan(dir.z, dir.x) / (2.0 * 3.14159265) + 0.5;
                float v = asin(clamp(dir.y, -1.0, 1.0)) / 3.14159265 + 0.5;
                vec4 w = texture2D(weatherMap, vec2(u, v));
                vec4 wa = texture2D(weatherAuxMap, vec2(u, v));
                float cloud = w.r;
                float rain = w.g;
                rainOut = rain;

                float cover = cloud * (0.45 + quantity * 1.1);

                float freq = max(1.0, noiseScale) * 0.003;
                vec2 windUV = (wa.ba - 0.5) * 2.0;
                vec3 east = vec3(-dir.z, 0.0, dir.x);
                float el = length(east);
                east = (el < 1e-5) ? vec3(1.0, 0.0, 0.0) : (east / el);
                vec3 north = normalize(cross(dir, east));
                vec3 windVec = east * windUV.x + north * windUV.y;
                float wMag = clamp(length(windUV), 0.0, 1.0);
                vec3 advDir = normalize(mix(windDir, windVec, 0.75));
                vec3 np = pos * freq + advDir * (windOffset * (0.35 + 1.05 * wMag));
                float n = fbm(np);
                if (mode > 0.5 && mode < 1.5) {
                    n = abs(n) * 2.0 - 1.0;
                } else if (mode > 1.5) {
                    vec3 q = floor(np * 0.9);
                    float c = fract(sin(dot(q, vec3(12.9898,78.233,45.164))) * 43758.5453);
                    n = mix(n, c * 2.0 - 1.0, 0.55);
                }
                float detail = smoothstep(0.15, 0.75, n + 0.2);
                float d = cover * profile * detail;
                d *= mix(1.0, 1.25, rain);
                return d;
            }

            vec2 raySphere(vec3 ro, vec3 rd, float r) {
                float b = dot(ro, rd);
                float c = dot(ro, ro) - r * r;
                float h = b*b - c;
                if (h < 0.0) return vec2(1e9, -1e9);
                h = sqrt(h);
                return vec2(-b - h, -b + h);
            }

            void main() {
                #include <logdepthbuf_fragment>

                vec3 ro = planetInvRot * (cameraPosition * planetInvScale);
                vec3 p1 = planetInvRot * (vWorld * planetInvScale);
                vec3 rd = normalize(p1 - ro);

                vec2 tOuter = raySphere(ro, rd, outerRadius);
                float tStart = max(tOuter.x, 0.0);
                float tEnd = tOuter.y;
                if (tEnd <= tStart) discard;

                vec2 tInner = raySphere(ro, rd, innerRadius);
                // Clip marching segment to the cloud shell so step sizes stay stable from orbit.
                if (tInner.x <= tInner.y) {
                    if (tInner.x > 0.0) tEnd = min(tEnd, tInner.x);
                    else if (tInner.y > 0.0) tStart = max(tStart, tInner.y);
                }
                if (tEnd <= tStart) discard;

                const int STEPS = 26;
                float stepSize = (tEnd - tStart) / float(STEPS);
                vec3 sum = vec3(0.0);
                float alpha = 0.0;

                vec3 sunLocal = normalize(planetInvRot * sunDir);

                for (int i = 0; i < STEPS; i++) {
                    float t = tStart + (float(i) + 0.5) * stepSize;
                    vec3 pos = ro + rd * t;

                    float rainNow = 0.0;
                    float d = densityAt(pos, rainNow);
                    if (d <= 1e-4) continue;

                    float day = clamp(dot(normalize(pos), sunLocal), 0.0, 1.0);
                    float light = mix(0.55, 1.15, day);
                    vec3 ccol = mix(color, color * 0.85, rainNow) * light;

                    float a = 1.0 - exp(-d * stepSize * 4.5);
                    sum += (1.0 - alpha) * ccol * a;
                    alpha += (1.0 - alpha) * a;
                    if (alpha > 0.985) break;
                }

                alpha *= opacity;
                if (alpha < 0.01) discard;
                gl_FragColor = vec4(sum, alpha);
            }
        `
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData.uniforms = uniforms;
    mesh.userData.settings = settings;
    mesh.renderOrder = 2;
    return mesh;
}

function clearWaterCycleCloudMesh() {
    if (!waterCycleCloud) return;
    planetGroup.remove(waterCycleCloud);
    waterCycleCloud.geometry.dispose();
    waterCycleCloud.material.dispose?.();
    waterCycleCloud = null;
}

function getWaterCycleCloudSettings() {
    return {
        id: 'watercycle',
        enabled: (waterCycleCloudToggleEl?.checked ?? true),
        alpha: clamp(parseFloat(cloudAlphaEl?.value) || 0.74, 0, 1),
        speed: clamp(parseFloat(cloudSpeedEl?.value) || 0.9, 0, 2),
        quantity: clamp(parseFloat(cloudQuantityEl?.value) || 0.76, 0, 1),
        height: clamp(parseFloat(cloudHeightEl?.value) || -2.4, -5, 5),
        color: cloudColorEl?.value || '#ffffff',
        resolution: Math.max(1, Math.floor(parseFloat(cloudResolutionEl?.value) || 256)),
        mode: cloudShaderEl?.value || 'billow'
    };
}

function buildWaterCycleCloudMeshVolume(radius, baseSubdivisions, sunDir, planetRadius, seaLevel, heightScale, settings, volumeTex, volumeMeta) {
    const modeId = settings.mode === 'billow' ? 1 : settings.mode === 'cellular' ? 2 : 0;

    const surfaceRadius = planetRadius + ((seaLevel - 0.5) * heightScale) + 0.05;
    const metersPerUnit = ((volumeMeta?.planetRadiusM ?? DEFAULT_RADIUS_M) / BASE_RADIUS_UNITS);
    const atmoUnits = ((volumeMeta?.atmoThicknessM ?? 20_000) / Math.max(metersPerUnit, 1e-6));
    // Tie the inner cloud shell to the actual surface so clouds can extend to ground/sea.
    const baseRadius = surfaceRadius;
    const halfThickness = Math.max(0.25, atmoUnits * 0.5);
    // Let clouds hug the surface/ocean: bring inner shell slightly below surfaceRadius.
    const innerRadius = Math.max(0.1, baseRadius - 0.05);
    const outerRadius = innerRadius + (2.0 * halfThickness);

    const uniforms = {
        windOffset: { value: 0 },
        color: { value: new THREE.Color(settings.color) },
        opacity: { value: settings.alpha },
        sunDir: { value: sunDir.clone().normalize() },
        windDir: { value: new THREE.Vector3(0, 0, 1) },
        quantity: { value: settings.quantity },
        noiseScale: { value: Math.max(1, settings.resolution) },
        mode: { value: modeId },
        volumeAtlas: { value: volumeTex },
        volumeN: { value: volumeMeta?.n ?? 64 },
        tilesX: { value: volumeMeta?.tilesX ?? 8 },
        atlasW: { value: volumeMeta?.atlasW ?? 512 },
        atlasH: { value: volumeMeta?.atlasH ?? 512 },
        volumeExtentM: { value: volumeMeta?.extentM ?? 520_000 },
        metersPerUnit: { value: metersPerUnit },
        planetInvRot: { value: new THREE.Matrix3() },
        planetInvScale: { value: 1.0 },
        innerRadius: { value: innerRadius },
        outerRadius: { value: outerRadius }
    };

    const detail = Math.max(2, Math.min(6, Math.floor(baseSubdivisions / 24)));
    const geometry = new THREE.IcosahedronGeometry(outerRadius, detail);
    const material = new THREE.ShaderMaterial({
        uniforms,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.NormalBlending,
        vertexShader: `
            #include <common>
            #include <logdepthbuf_pars_vertex>
            varying vec3 vWorld;
            void main() {
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorld = worldPos.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPos;
                #include <logdepthbuf_vertex>
            }
        `,
        fragmentShader: `
            #include <common>
            #include <logdepthbuf_pars_fragment>
            uniform vec3 color;
            uniform float opacity;
            uniform float windOffset;
            uniform vec3 sunDir;
            uniform vec3 windDir;
            uniform float quantity;
            uniform float noiseScale;
            uniform float mode;
            uniform sampler2D volumeAtlas;
            uniform float volumeN;
            uniform float tilesX;
            uniform float atlasW;
            uniform float atlasH;
            uniform float volumeExtentM;
            uniform float metersPerUnit;
            uniform mat3 planetInvRot;
            uniform float planetInvScale;
            uniform float innerRadius;
            uniform float outerRadius;
            varying vec3 vWorld;

            float hash(vec3 p) {
                p = fract(p * 0.3183099 + vec3(0.1,0.2,0.3));
                p *= 17.0;
                return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
            }
            float noise(vec3 p) {
                vec3 i = floor(p);
                vec3 f = fract(p);
                f = f*f*(3.0-2.0*f);
                float n000 = hash(i + vec3(0,0,0));
                float n100 = hash(i + vec3(1,0,0));
                float n010 = hash(i + vec3(0,1,0));
                float n110 = hash(i + vec3(1,1,0));
                float n001 = hash(i + vec3(0,0,1));
                float n101 = hash(i + vec3(1,0,1));
                float n011 = hash(i + vec3(0,1,1));
                float n111 = hash(i + vec3(1,1,1));
                float nx00 = mix(n000, n100, f.x);
                float nx10 = mix(n010, n110, f.x);
                float nx01 = mix(n001, n101, f.x);
                float nx11 = mix(n011, n111, f.x);
                float nxy0 = mix(nx00, nx10, f.y);
                float nxy1 = mix(nx01, nx11, f.y);
                return mix(nxy0, nxy1, f.z);
            }
            float fbm(vec3 p) {
                float sum = 0.0;
                float amp = 0.55;
                for(int i=0;i<4;i++){
                    sum += noise(p) * amp;
                    p *= 2.1;
                    amp *= 0.5;
                }
                return sum;
            }

            vec2 sampleVolumeAtlas(vec3 idx) {
                float tx = mod(idx.z, tilesX);
                float ty = floor(idx.z / tilesX);
                float ax = (tx * volumeN + idx.x + 0.5) / atlasW;
                float ay = (ty * volumeN + idx.y + 0.5) / atlasH;
                return texture2D(volumeAtlas, vec2(ax, ay)).rg; // cloud, rain
            }

            vec4 sampleVolumeTrilinear(vec3 posLocal) {
                // posLocal is in planet-local *unscaled* render units.
                vec3 posM = posLocal * metersPerUnit;
                vec3 uvw = clamp(posM / max(volumeExtentM, 1e-3) * 0.5 + vec3(0.5), 0.0, 0.999999);
                vec3 posGrid = uvw * (volumeN - 1.0);
                vec3 i0 = floor(posGrid);
                vec3 f = clamp(posGrid - i0, 0.0, 1.0);
                vec3 i1 = min(i0 + 1.0, vec3(volumeN - 1.0));
                vec2 c000 = sampleVolumeAtlas(i0);
                vec2 c100 = sampleVolumeAtlas(vec3(i1.x, i0.y, i0.z));
                vec2 c010 = sampleVolumeAtlas(vec3(i0.x, i1.y, i0.z));
                vec2 c110 = sampleVolumeAtlas(vec3(i1.x, i1.y, i0.z));
                vec2 c001 = sampleVolumeAtlas(vec3(i0.x, i0.y, i1.z));
                vec2 c101 = sampleVolumeAtlas(vec3(i1.x, i0.y, i1.z));
                vec2 c011 = sampleVolumeAtlas(vec3(i0.x, i1.y, i1.z));
                vec2 c111 = sampleVolumeAtlas(i1);

                float wx = f.x, wy = f.y, wz = f.z;
                vec2 cx0 = mix(c000, c100, wx);
                vec2 cx1 = mix(c010, c110, wx);
                vec2 cx2 = mix(c001, c101, wx);
                vec2 cx3 = mix(c011, c111, wx);
                vec2 cy0 = mix(cx0, cx1, wy);
                vec2 cy1 = mix(cx2, cx3, wy);
                vec2 c = mix(cy0, cy1, wz);

                return vec4(c, 0.0, 0.0);
            }

            float densityAt(vec3 pos, out float rainOut) {
                float r = length(pos);
                if (r < innerRadius || r > outerRadius) { rainOut = 0.0; return 0.0; }
                float h = (r - innerRadius) / max(outerRadius - innerRadius, 1e-3);
                float profile = smoothstep(0.0, 0.12, h) * (1.0 - smoothstep(0.55, 1.0, h));

                // Slight atlas smoothing to hide voxel seams at high res.
                vec4 v = sampleVolumeTrilinear(pos);
                vec4 v2 = sampleVolumeTrilinear(pos + vec3(0.3, -0.2, 0.15) * metersPerUnit * 0.25);
                vec4 v3 = sampleVolumeTrilinear(pos + vec3(-0.25, 0.18, -0.22) * metersPerUnit * 0.35);
                vec4 v4 = sampleVolumeTrilinear(pos + vec3(0.12, 0.24, -0.3) * metersPerUnit * 0.2);
                vec4 vMix = (v + v2 + v3 + v4) * 0.25;

                float cloud = vMix.r;
                float rain = vMix.g;
                rainOut = rain;

                float cover = cloud * (0.45 + quantity * 1.1);

                float freq = max(1.0, noiseScale) * 0.003;
                vec3 advDir = normalize(windDir);
                vec3 np = pos * freq + advDir * (windOffset * 0.35);
                float n = fbm(np);
                if (mode > 0.5 && mode < 1.5) {
                    n = abs(n) * 2.0 - 1.0;
                } else if (mode > 1.5) {
                    vec3 q = floor(np * 0.9);
                    float c = fract(sin(dot(q, vec3(12.9898,78.233,45.164))) * 43758.5453);
                    n = mix(n, c * 2.0 - 1.0, 0.55);
                }
                float detail = smoothstep(0.15, 0.75, n + 0.2);
                float d = cover * profile * detail;
                d *= mix(1.0, 1.25, rain);
                return d;
            }

            vec2 raySphere(vec3 ro, vec3 rd, float r) {
                float b = dot(ro, rd);
                float c = dot(ro, ro) - r * r;
                float h = b*b - c;
                if (h < 0.0) return vec2(1e9, -1e9);
                h = sqrt(h);
                return vec2(-b - h, -b + h);
            }

            void main() {
                #include <logdepthbuf_fragment>

                vec3 ro = planetInvRot * (cameraPosition * planetInvScale);
                vec3 p1 = planetInvRot * (vWorld * planetInvScale);
                vec3 rd = normalize(p1 - ro);

                vec2 tOuter = raySphere(ro, rd, outerRadius);
                float tStart = max(tOuter.x, 0.0);
                float tEnd = tOuter.y;
                if (tEnd <= tStart) discard;

                vec2 tInner = raySphere(ro, rd, innerRadius);
                // Clip marching segment to the cloud shell so step sizes stay stable from orbit.
                if (tInner.x <= tInner.y) {
                    if (tInner.x > 0.0) tEnd = min(tEnd, tInner.x);
                    else if (tInner.y > 0.0) tStart = max(tStart, tInner.y);
                }
                if (tEnd <= tStart) discard;

                // More steps for higher volume resolutions to accumulate enough opacity.
                int steps = int(clamp(mix(28.0, 48.0, clamp((volumeN - 32.0) / 96.0, 0.0, 1.0)), 28.0, 48.0));
                float stepSize = (tEnd - tStart) / float(steps);
                vec3 sum = vec3(0.0);
                float alpha = 0.0;

                vec3 sunLocal = normalize(planetInvRot * sunDir);

                for (int i = 0; i < 48; i++) { // 48 is the max; exit early if steps smaller.
                    if (i >= steps) break;
                    float t = tStart + (float(i) + 0.5) * stepSize;
                    vec3 pos = ro + rd * t;

                    float rainNow = 0.0;
                    float d = densityAt(pos, rainNow);
                    if (d <= 1e-4) continue;

                    float day = clamp(dot(normalize(pos), sunLocal), 0.0, 1.0);
                    float light = mix(0.55, 1.15, day);
                    vec3 ccol = mix(color, color * 0.85, rainNow) * light;

                    float a = 1.0 - exp(-d * stepSize * 4.5);
                    sum += (1.0 - alpha) * ccol * a;
                    alpha += (1.0 - alpha) * a;
                    if (alpha > 0.985) break;
                }

                alpha *= opacity;
                if (alpha < 0.01) discard;
                gl_FragColor = vec4(sum, alpha);
            }
        `
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData.uniforms = uniforms;
    mesh.userData.settings = settings;
    mesh.renderOrder = 2;
    return mesh;
}

function rebuildWaterCycleClouds(sunDir) {
    if (!lastPlanetSettings) return;
    clearWaterCycleCloudMesh();

    const enabled = (waterCycleToggleEl?.checked ?? false) && (waterCycleCloudToggleEl?.checked ?? false);
    if (!enabled) return;

    const settings = getWaterCycleCloudSettings();
    const volTex = getWeatherVolumeTexture();
    const volMeta = getWeatherVolumeMeta();

    let mesh = null;
    if (volTex && volMeta) {
        mesh = buildWaterCycleCloudMeshVolume(
            lastPlanetSettings.radius + lastPlanetSettings.heightScale * 0.2,
            lastPlanetSettings.subdivisions,
            sunDir,
            lastPlanetSettings.radius,
            lastPlanetSettings.seaLevel,
            lastPlanetSettings.heightScale,
            settings,
            volTex,
            volMeta
        );
    } else {
        mesh = buildCloudMesh(
            lastPlanetSettings.radius + lastPlanetSettings.heightScale * 0.2,
            lastPlanetSettings.subdivisions,
            sunDir,
            lastPlanetSettings.radius,
            lastPlanetSettings.seaLevel,
            lastPlanetSettings.heightScale,
            settings
        );
    }

    waterCycleCloud = mesh;
    planetGroup.add(mesh);
}

function clearCloudMeshes() {
    for (const c of clouds) {
        planetGroup.remove(c);
        c.geometry.dispose();
        c.material.dispose?.();
    }
    clouds = [];
}

function getBaseCloudSettings() {
    return {
        id: 'base',
        enabled: cloudToggleEl.checked,
        alpha: clamp(parseFloat(cloudAlphaEl.value) || 0.74, 0, 1),
        speed: clamp(parseFloat(cloudSpeedEl.value) || 0.9, 0, 2),
        quantity: clamp(parseFloat(cloudQuantityEl.value) || 0.76, 0, 1),
        height: clamp(parseFloat(cloudHeightEl.value) || -2.4, -5, 5),
        color: cloudColorEl.value || '#ffffff',
        resolution: Math.max(1, Math.floor(parseFloat(cloudResolutionEl.value) || 256)),
        mode: cloudShaderEl.value || 'billow'
    };
}

function rebuildClouds(sunDir) {
    if (!lastPlanetSettings) return;
    clearCloudMeshes();
    const layers = [];
    const base = getBaseCloudSettings();
    if (base.enabled) layers.push(base);
    for (const layer of cloudLayerSettings) {
        if (layer.enabled) layers.push(layer);
    }
    for (const layer of layers) {
        const mesh = buildCloudMesh(
            lastPlanetSettings.radius + lastPlanetSettings.heightScale * 0.2,
            lastPlanetSettings.subdivisions,
            sunDir,
            lastPlanetSettings.radius,
            lastPlanetSettings.seaLevel,
            lastPlanetSettings.heightScale,
            layer
        );
        clouds.push(mesh);
        planetGroup.add(mesh);
    }
}

function updateAtmosphereVisuals(sunDir) {
    if (!lastPlanetSettings) return;
    if (!atmosphereToggleEl.checked) {
        if (atmosphere) atmosphere.visible = false;
        return;
    }
    const thickness = clamp(parseFloat(atmosphereEl.value) || 0.35, 0.05, 1.5);
    const heightOffset = clamp(parseFloat(atmosphereHeightEl.value) || 0.5, 0, 5);
    const alpha = clamp(parseFloat(atmosphereAlphaEl.value) || 1.0, 0, 1);
    const color = atmosphereColorEl.value || '#4da8ff';
    replaceAtmosphere(
        buildAtmosphereMesh(
            lastPlanetSettings.radius,
            lastPlanetSettings.subdivisions,
            lastPlanetSettings.heightScale,
            heightOffset,
            thickness,
            sunDir,
            alpha,
            color
        )
    );
}

function createCloudLayerControls(layer) {
    const wrapper = document.createElement('div');
    wrapper.className = 'layer';
    wrapper.style.border = '1px solid var(--border)';
    wrapper.style.padding = '8px';
    wrapper.style.marginBottom = '8px';
    const idLabel = document.createElement('div');
    idLabel.textContent = `Layer ${layer.label || cloudLayerSettings.length + 1}`;
    idLabel.style.fontSize = '12px';
    idLabel.style.color = 'var(--muted)';
    wrapper.appendChild(idLabel);

    const makeRange = (label, key, min, max, step) => {
        const field = document.createElement('div');
        field.className = 'field';
        const l = document.createElement('label');
        l.textContent = label;
        const row = document.createElement('div');
        row.className = 'range-row';
        const input = document.createElement('input');
        input.type = 'range';
        input.min = min;
        input.max = max;
        input.step = step;
        input.value = layer[key];
        const span = document.createElement('span');
        span.className = 'value';
        span.textContent = Number(layer[key]).toFixed(step < 1 ? 2 : 0);
        row.appendChild(input);
        row.appendChild(span);
        field.appendChild(l);
        field.appendChild(row);
        input.addEventListener('input', () => {
            layer[key] = parseFloat(input.value);
            span.textContent = Number(layer[key]).toFixed(step < 1 ? 2 : 0);
            rebuildClouds(new THREE.Vector3().copy(dirLight.position).normalize());
        });
        return field;
    };

    const enabled = document.createElement('label');
    const toggle = document.createElement('input');
    toggle.type = 'checkbox';
    toggle.checked = layer.enabled;
    toggle.addEventListener('change', () => {
        layer.enabled = toggle.checked;
        rebuildClouds(new THREE.Vector3().copy(dirLight.position).normalize());
    });
    enabled.appendChild(toggle);
    enabled.append(' Layer enabled');
    wrapper.appendChild(enabled);

    wrapper.appendChild(makeRange('Alpha', 'alpha', 0, 1, 0.01));
    wrapper.appendChild(makeRange('Speed', 'speed', 0, 2, 0.05));
    wrapper.appendChild(makeRange('Quantity', 'quantity', 0, 1, 0.01));
    wrapper.appendChild(makeRange('Height', 'height', -5, 5, 0.05));
    wrapper.appendChild(makeRange('Resolution', 'resolution', 1, 256, 1));

    const shaderField = document.createElement('div');
    shaderField.className = 'field';
    const shaderLabel = document.createElement('label');
    shaderLabel.textContent = 'Shader';
    const shaderSelect = document.createElement('select');
    ['fbm','billow','cellular'].forEach((m) => {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = m.charAt(0).toUpperCase() + m.slice(1);
        if (layer.mode === m) opt.selected = true;
        shaderSelect.appendChild(opt);
    });
    shaderSelect.addEventListener('change', () => {
        layer.mode = shaderSelect.value;
        rebuildClouds(new THREE.Vector3().copy(dirLight.position).normalize());
    });
    shaderField.appendChild(shaderLabel);
    shaderField.appendChild(shaderSelect);
    wrapper.appendChild(shaderField);

    const colorField = document.createElement('div');
    colorField.className = 'field';
    const colorLabel = document.createElement('label');
    colorLabel.textContent = 'Color';
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = layer.color;
    colorInput.addEventListener('input', () => {
        layer.color = colorInput.value;
        rebuildClouds(new THREE.Vector3().copy(dirLight.position).normalize());
    });
    colorField.appendChild(colorLabel);
    colorField.appendChild(colorInput);
    wrapper.appendChild(colorField);

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = 'Remove layer';
    removeBtn.addEventListener('click', () => {
        cloudLayerSettings = cloudLayerSettings.filter((l) => l !== layer);
        renderCloudLayerControls();
        rebuildClouds(new THREE.Vector3().copy(dirLight.position).normalize());
    });
    wrapper.appendChild(removeBtn);

    return wrapper;
}

function renderCloudLayerControls() {
    cloudLayersEl.innerHTML = '';
    for (const layer of cloudLayerSettings) {
        cloudLayersEl.appendChild(createCloudLayerControls(layer));
    }
}

function ensureLandingMarker() {
    if (landingMarker) return landingMarker;
    const ring = new THREE.RingGeometry(0.15, 0.18, 32);
    const mat = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.8, depthWrite: false });
    landingMarker = new THREE.Mesh(ring, mat);
    landingMarker.visible = false;
    scene.add(landingMarker);
    return landingMarker;
}

function onResize() {
    const { innerWidth, innerHeight } = window;
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    if (input) {
        input.setMode(isMobileDevice() ? 'mobile' : 'desktop');
    }
    syncMobileVisibility();
}

function applyOrbitLookDelta(look) {
    const { x, y } = look;
    if (Math.abs(x) < 1e-4 && Math.abs(y) < 1e-4) return;
    const target = controls.target;
    const offset = camera.position.clone().sub(target);
    const yaw = -x * 0.01;
    const pitch = -y * 0.01;
    const up = new THREE.Vector3(0, 1, 0);
    const quatYaw = new THREE.Quaternion().setFromAxisAngle(up, yaw);
    offset.applyQuaternion(quatYaw);
    const right = new THREE.Vector3().crossVectors(up, offset).normalize();
    const quatPitch = new THREE.Quaternion().setFromAxisAngle(right, pitch);
    offset.applyQuaternion(quatPitch);
    camera.position.copy(target).add(offset);
    camera.lookAt(target);
}

function updateWeatherFrame() {
    const invScale = planetGroup.scale.x ? (1 / planetGroup.scale.x) : 1;

    // Update sun direction from axial tilt + season phase.
    const tiltDeg = clamp(parseFloat(axialTiltEl?.value) || 23.4, 0, 45);
    const season = clamp(parseFloat(seasonProgressEl?.value) || 0, 0, 1);
    const tiltRad = THREE.MathUtils.degToRad(tiltDeg);
    const seasonAng = season * Math.PI * 2;
    const decl = tiltRad * Math.sin(seasonAng);
    const sunVec = new THREE.Vector3(Math.cos(decl), Math.sin(decl), 0.6).normalize().multiplyScalar(16);
    dirLight.position.copy(sunVec);

    weatherSunWorld.copy(dirLight.position).normalize();
    weatherInvRot.identity();
    weatherSunLocal.copy(weatherSunWorld);
    if (planet) {
        planet.getWorldQuaternion(weatherTmpQuat);
        weatherTmpQuat.invert();
        weatherTmpMat4.makeRotationFromQuaternion(weatherTmpQuat);
        weatherInvRot.setFromMatrix4(weatherTmpMat4);
        weatherSunLocal.copy(weatherSunWorld).applyQuaternion(weatherTmpQuat).normalize();
    }

    return invScale;
}

function updateMoon(delta) {
    if (!moon) return;
    const radiusUnits = Math.max(0.05, (lastPlanetSettings?.radius ?? BASE_RADIUS_UNITS) * 0.2);
    const orbitRadius = Math.max(3, (lastPlanetSettings?.radius ?? BASE_RADIUS_UNITS) * 4);
    const orbitIncline = THREE.MathUtils.degToRad(8.0);
    moonOrbitPhase += delta * 0.02; // slower drift
    const cosP = Math.cos(moonOrbitPhase);
    const sinP = Math.sin(moonOrbitPhase);
    const x = orbitRadius * cosP;
    const y = orbitRadius * Math.sin(orbitIncline) * sinP;
    const z = orbitRadius * Math.cos(orbitIncline) * sinP;
    moon.position.set(x, y, z);
    moon.lookAt(planetGroup.position);
    moonUniforms.sunDir.value.copy(weatherSunWorld);
    updateMoonMaterialForPhase();
    // Aim the light shadow camera to include moon + planet.
    dirLight.target.position.set(0, 0, 0);
    dirLight.target.updateMatrixWorld();
}

function animate() {
    const delta = clock.getDelta();
    // FPS overlay (simple EMA).
    const fps = delta > 1e-6 ? 1 / delta : 0;
    fpsSMA = fpsSMA * 0.9 + fps * 0.1;
    if (fpsDiv) fpsDiv.textContent = `fps: ${fpsSMA.toFixed(1)}`;
    
    updateRangeLabels();
    
    if (xrSession) {
        pollVRInputs();
    }

    if (tinyControls.enabled) {
        tinyControls.update(delta);
    } else {
        if (input.consume('surface')) {
            handleSurfaceAction();
        }
        if (planet && !generating) {
            planet.rotation.y += 0.0009;
        }
        controls.update();
        // Apply orbit look from keyboard arrows via InputRouter.
        applyOrbitLookDelta(input.consumeLookDelta());
    }
    syncMobileVisibility();

    // Planet-local sun direction (for water cycle + cloud sampling)
    const invScale = updateWeatherFrame();
    updateMoon(delta);
    // Update landing marker (orbit view).
    ensureLandingMarker();
    if (!tinyControls.enabled && planet) {
        raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
        const hit = raycaster.intersectObject(planet, false);
        if (hit.length) {
            landingMarker.visible = true;
            landingMarker.position.copy(hit[0].point);
            landingMarker.lookAt(camera.position);
        } else {
            landingMarker.visible = false;
        }
    } else if (landingMarker) {
        landingMarker.visible = false;
    }
    const runWeather = (waterCycleToggleEl?.checked ?? false) && (waterCycleRunEl?.checked ?? true);
    if (runWeather && waterCycleSystem?.enabled) {
        waterCycleSystem.update(delta, weatherSunLocal);
    }

    // Atmosphere scattering operates in planet-local + unscaled coordinates.
    atmosphereUniforms.sunDir.value.copy(weatherSunWorld);
    atmosphereUniforms.planetInvRot.value.copy(weatherInvRot);
    atmosphereUniforms.planetInvScale.value = invScale;
    atmosphereUniforms.weatherMap.value = getWeatherTexture();

    if (water) waterUniforms.time.value += 0.016;
    if (freshwater) freshwater.material.uniforms.time.value += 0.016;
    if (clouds.length) {
        const dt = Math.min(delta, 0.25); // avoid huge jumps after tab inactivity
        const weatherTex = DEFAULT_WEATHER_TEX;
        const weatherAuxTex = DEFAULT_WEATHER_AUX_TEX;
        for (const mesh of clouds) {
            const u = mesh.userData.uniforms;
            const s = mesh.userData.settings;
            const speed = s.speed || 1;
            // Accumulate wind offset at constant rate controlled by speed slider
            // Wind direction is constant (set at creation) - no rotation to avoid spiral acceleration
            u.windOffset.value += dt * speed * 0.3;
            if (u.planetInvRot) u.planetInvRot.value.copy(weatherInvRot);
            if (u.planetInvScale) u.planetInvScale.value = invScale;
            if (u.weatherMap) u.weatherMap.value = weatherTex;
            if (u.weatherAuxMap) u.weatherAuxMap.value = weatherAuxTex;
        }
    }
    if (waterCycleCloud) {
        const dt = Math.min(delta, 0.25);
        const u = waterCycleCloud.userData.uniforms;
        const s = waterCycleCloud.userData.settings;
        const speed = s?.speed || 1;
        u.windOffset.value += dt * speed * 0.3;
        if (u.planetInvRot) u.planetInvRot.value.copy(weatherInvRot);
        if (u.planetInvScale) u.planetInvScale.value = invScale;
        if (u.weatherMap) u.weatherMap.value = getWeatherTexture();
        if (u.weatherAuxMap) u.weatherAuxMap.value = getWeatherAuxTexture();
        if (u.volumeAtlas) u.volumeAtlas.value = getWeatherVolumeTexture() ?? u.volumeAtlas.value;
        const meta = getWeatherVolumeMeta();
        if (meta) {
            if (u.volumeN) u.volumeN.value = meta.n;
            if (u.tilesX) u.tilesX.value = meta.tilesX;
            if (u.atlasW) u.atlasW.value = meta.atlasW;
            if (u.atlasH) u.atlasH.value = meta.atlasH;
            if (u.volumeExtentM) u.volumeExtentM.value = meta.extentM;
            if (u.metersPerUnit) u.metersPerUnit.value = (meta.planetRadiusM ?? DEFAULT_RADIUS_M) / BASE_RADIUS_UNITS;
        }
    }
    updateVolumeDebugSprite();

    if (rainSystem) {
        rainSystem.setWeatherFrame({ planetInvRot: weatherInvRot, planetInvScale: invScale });
        rainSystem.setWeatherMap(getWeatherTexture());
        rainSystem.setWindWorld(computeWindWorldFromAux(getWeatherAuxTexture(), invScale, weatherInvRot, weatherWindWorld));
        rainSystem.update(delta);
    }
    
    setPlanetWeatherTexture(getWeatherTexture());
    setPlanetWeatherAuxTexture(getWeatherAuxTexture());
    
    renderer.render(scene, camera);
}

if (hudToggleEl) {
    hudToggleEl.addEventListener('click', () => {
        setHudCollapsed(!hudEl.classList.contains('collapsed'));
    });
}

// Surface action global trigger
document.addEventListener('surface', handleSurfaceAction);

function toggleConfigPanel(show) {
    if (!configPanelEl || !configToggleEl) return;
    const next = show ?? configPanelEl.style.display !== 'block';
    configPanelEl.style.display = next ? 'block' : 'none';
    configToggleEl.setAttribute('aria-expanded', next.toString());
    if (reticleEl) reticleEl.style.display = next ? 'none' : 'block';
}

if (configToggleEl) {
    configToggleEl.addEventListener('click', () => toggleConfigPanel());
}

async function checkVRSupport() {
    if (!navigator.xr || !vrToggleEl) return;
    try {
        vrSupported = await navigator.xr.isSessionSupported('immersive-vr');
        vrToggleEl.style.display = vrSupported ? 'block' : 'none';
        if (vrToggleEl) vrToggleEl.disabled = !vrSupported;
    } catch (err) {
        console.warn('XR support check failed', err);
    }
}

async function startVR() {
    if (!navigator.xr) {
        setStatus('WebXR not available');
        return;
    }
    try {
        const session = await navigator.xr.requestSession('immersive-vr', { optionalFeatures: ['local-floor', 'bounded-floor'] });
        xrSession = session;
        renderer.xr.enabled = true;
        await renderer.xr.setSession(session);

        if (controls) controls.enabled = false;

        // Ensure orbit camera is outside the planet before entering XR
        if (planet && !tinyControls.enabled) {
            const surfaceRadius = (lastPlanetSettings?.radius ?? BASE_RADIUS_UNITS) * getPlanetScale() + (lastPlanetSettings?.heightScale ?? 0);
            const minDist = Math.max(surfaceRadius * 2.0, 30);
            const dir = camera.position.clone().sub(controls.target);
            if (dir.lengthSq() < 1e-6) dir.set(0, 0, 1);
            dir.normalize();
            const target = new THREE.Vector3(0, 0, 0);
            const newPos = target.clone().sub(dir.multiplyScalar(minDist));
            
            userGroup.position.copy(newPos);
            userGroup.lookAt(target);
            
            // Reset camera local transform as it's now relative to userGroup
            camera.position.set(0, 0, 0);
            camera.rotation.set(0, 0, 0);
        }
        vrToggleEl.textContent = 'Exit VR';
        setStatus('VR session started');
        session.addEventListener('end', () => {
            xrSession = null;
            xrPrevButtons.clear();
            renderer.xr.enabled = false;
            
            userGroup.position.set(0, 0, 0);
            userGroup.rotation.set(0, 0, 0);
            userGroup.quaternion.identity();
            if (controls) controls.enabled = true;

            vrToggleEl.textContent = 'Enter VR';
            setStatus('');
        });
    } catch (err) {
        console.error(err);
        setStatus('VR start failed');
    }
}

function stopVR() {
    if (xrSession) {
        xrSession.end();
    }
}

function pollVRInputs() {
    if (!xrSession || !input) return;
    let moveX = 0;
    let moveY = 0;
    const dead = 0.15;
    for (const source of xrSession.inputSources) {
        const gp = source.gamepad;
        if (!gp) continue;
        const prev = xrPrevButtons.get(source) || [];
        const buttons = gp.buttons || [];
        const axes = gp.axes || [];
        if (axes.length >= 4) {
            moveX = axes[2];
            moveY = axes[3];
        }
        // Button mapping: 0 jump, 1 fly toggle, 3 exit
        const pressed = buttons.map((b) => !!b && b.pressed);
        if (pressed[0] && !prev[0]) input.trigger('jump');
        if (pressed[1] && !prev[1]) input.trigger('flyToggle');
        if (pressed[3] && !prev[3]) input.trigger('exit');
        xrPrevButtons.set(source, pressed);
    }
    input.setAction('forward', moveY > dead);
    input.setAction('backward', moveY < -dead);
    input.setAction('left', moveX > dead);
    input.setAction('right', moveX < -dead);
}

if (vrToggleEl) {
    vrToggleEl.addEventListener('click', () => {
        if (xrSession) stopVR();
        else startVR();
    });
}

regenBtn.addEventListener('click', () => generateWorld(presetEl.value));

const regenControls = [
    resolutionEl,
    platesEl,
    plateSizeVarianceEl,
    desymmetrizeTilingEl,
    jitterEl,
    heightScaleEl,
    iterationsEl,
    erosionRateEl,
    evaporationEl,
    seaLevelEl,
    atmosphereEl,
    smoothPassesEl,
    subdivisionsEl,
    iceCapEl,
    plateDeltaEl,
    faultTypeEl
];

function handleDiameterChange() {
    if (!planetDiameterEl) return;
    updateRangeLabels();
    if (lastPlanetSettings) {
        lastPlanetSettings.planetDiameterKm = getPlanetDiameterKm();
    }
    applyPlanetScale();
    if (!generating) {
        setStatus(`Planet diameter set to ${getPlanetDiameterKm().toLocaleString()} km`);
    }
}

function queueAutoRegen() {
    if (generating) return;
    clearTimeout(autoRegenTimer);
    autoRegenTimer = setTimeout(() => generateWorld(presetEl.value), 400);
}

regenControls.forEach((el) => {
    el.addEventListener('input', () => {
        updateRangeLabels();
        markDirty();
        queueAutoRegen();
    });
    el.addEventListener('change', () => {
        updateRangeLabels();
        markDirty();
        queueAutoRegen();
    });
});

presetEl.addEventListener('change', () => {
    applyPreset(presetEl.value);
    setStatus('Preset applied. Regenerating…');
    queueAutoRegen();
});
if (planetDiameterEl) {
    planetDiameterEl.addEventListener('input', handleDiameterChange);
    planetDiameterEl.addEventListener('change', handleDiameterChange);
}

// Atmosphere/Cloud controls (no regen)
function handleAtmosphereUpdate() {
    updateRangeLabels();
    updateAtmosphereVisuals(new THREE.Vector3().copy(dirLight.position).normalize());
}
function handleCloudUpdate() {
    updateRangeLabels();
    const sunDir = new THREE.Vector3().copy(dirLight.position).normalize();
    rebuildClouds(sunDir);
    rebuildWaterCycleClouds(sunDir);
}

const waterCycleUiControls = [
    waterCycleToggleEl,
    waterCycleCloudToggleEl,
    waterCycleRunEl,
    waterCycleStepBtn,
    weatherSimModeEl,
    weatherVolumeResEl,
    weatherDebugEl,
    weatherSpeedEl,
    weatherUpdateHzEl,
    weatherMoistureLayersEl,
    weatherEvapEl,
    weatherPrecipEl,
    weatherWindEl,
    weatherWetnessEl,
    weatherOceanInertiaEl,
    weatherRainFxToggleEl,
    weatherRainFxEl,
    weatherRainHazeEl
].filter(Boolean);

function setWaterCycleUiDisabled(disabled) {
    for (const el of waterCycleUiControls) el.disabled = disabled;
}

function getWeatherSimMode() {
    const v = (weatherSimModeEl?.value || '3d').toLowerCase();
    return v === '2d' ? '2d' : '3d';
}

function getWeatherVolumeResolutionN() {
    const v = parseFloat(weatherVolumeResEl?.value);
    const n = Number.isFinite(v) ? v : 64;
    return clamp(Math.round(n), 32, 128);
}

function updateWaterCycleModeUi(mode) {
    const is3d = mode === '3d';
    if (weatherMoistureLayersEl) weatherMoistureLayersEl.disabled = is3d;
    if (weatherVolumeResEl) weatherVolumeResEl.disabled = !is3d;
}

let selectingWeatherSim = 0;
async function selectWaterCycleSystemIfNeeded() {
    const mode = getWeatherSimMode();
    updateWaterCycleModeUi(mode);

    const token = ++selectingWeatherSim;

    try {
        if (mode === '3d') {
            const desiredN = getWeatherVolumeResolutionN();
            if (waterCycleSystem3D && waterCycleSystem3D.volumeN !== desiredN) {
                waterCycleSystem3D = null;
            }
            if (!waterCycleSystem3D) {
                waterCycleSystem3D = await WaterCycleVolumeSystem.create({ volumeN: desiredN, surfaceW: 256, surfaceH: 128 });
            }
            if (token !== selectingWeatherSim) return;
            waterCycleSystem = waterCycleSystem3D;
        } else {
            if (!waterCycleSystem2D) {
                waterCycleSystem2D = await WaterCycleSystem.create({ gridWidth: 256, gridHeight: 128 });
            }
            if (token !== selectingWeatherSim) return;
            waterCycleSystem = waterCycleSystem2D;
        }
    } catch (err) {
        console.warn('[WaterCycle] init failed', err);
        if (token !== selectingWeatherSim) return;
        setWaterCycleUiDisabled(true);
        if (waterCycleToggleEl) {
            waterCycleToggleEl.checked = false;
            waterCycleToggleEl.disabled = true;
        }
        return;
    }

    if (!waterCycleSystem?.enabled) {
        setWaterCycleUiDisabled(true);
        if (waterCycleToggleEl) {
            waterCycleToggleEl.checked = false;
            waterCycleToggleEl.disabled = true;
        }
        if (waterCycleRunEl) {
            waterCycleRunEl.checked = false;
            waterCycleRunEl.disabled = true;
        }
        if (waterCycleStepBtn) waterCycleStepBtn.disabled = true;
        return;
    }

    setWaterCycleUiDisabled(false);
    updateWaterCycleModeUi(mode);

    if (pendingWaterCycleSurface && waterCycleSystem.enabled && waterCycleSystem.ready) {
        waterCycleSystem.setPlanetSurface(pendingWaterCycleSurface);
    }

    applyWaterCycleConfig();
    setPlanetWeatherTexture(getWeatherTexture());
    setPlanetWeatherAuxTexture(getWeatherAuxTexture());
    rebuildWaterCycleClouds(new THREE.Vector3().copy(dirLight.position).normalize());
}

function applyWaterCycleConfig() {
    const mode = getWeatherSimMode();
    const minutesPerSec = clamp(parseFloat(weatherSpeedEl?.value) || 20, 0, 60);
    const updateHz = clamp(parseFloat(weatherUpdateHzEl?.value) || 7, 1, 20);
    const moistureLayers = clamp(parseFloat(weatherMoistureLayersEl?.value) || 2, 1, 4);
    const evapStrength = clamp(parseFloat(weatherEvapEl?.value) || 1, 0, 3);
    const precipStrength = clamp(parseFloat(weatherPrecipEl?.value) || 1, 0, 3);
    const windStrength = clamp(parseFloat(weatherWindEl?.value) || 1, 0, 3);
    const wetnessStrength = clamp(parseFloat(weatherWetnessEl?.value) || 0.75, 0, 2);
    const oceanInertia = clamp(parseFloat(weatherOceanInertiaEl?.value) || 0.25, 0.05, 1);
    const rainFxEnabled = (weatherRainFxToggleEl?.checked ?? true);
    const rainFxStrength = clamp(parseFloat(weatherRainFxEl?.value) || 1, 0, 2);
    const rainHaze = clamp(parseFloat(weatherRainHazeEl?.value) || 0.9, 0, 2);
    const debugKey = (weatherDebugEl?.value || 'off').toLowerCase();
    const debugMode = debugKey === 'cloud' ? 1
        : debugKey === 'rain' ? 2
        : debugKey === 'pressure' ? 3
        : debugKey === 'soil' ? 4
        : debugKey === 'temp' ? 5
        : debugKey === 'snow' ? 6
        : debugKey === 'wind' ? 7
        : 0;
    const debugVolume = debugKey === 'volume';

    const atmoThicknessKm = clamp(parseFloat(weatherAtmoThicknessEl?.value) || 20, 5, 60);
    const axialTiltDeg = clamp(parseFloat(axialTiltEl?.value) || 23.4, 0, 45);
    const seasonPhase = clamp(parseFloat(seasonProgressEl?.value) || 0, 0, 1);

    if (waterCycleSystem?.enabled && waterCycleSystem.ready) {
        const cfg = {
            timeScale: minutesPerSec * 60,
            readbackIntervalS: 1 / updateHz,
            evapStrength,
            precipStrength,
            windStrength,
            oceanInertia,
            atmoThicknessM: atmoThicknessKm * 1000,
            axialTiltDeg,
            seasonPhase
        };
        if (mode === '2d') cfg.moistureLayers = moistureLayers;
        waterCycleSystem.setConfig(cfg);
    }
    setPlanetWeatherStrength(wetnessStrength);
    setPlanetWeatherDebugMode(debugMode);
    setVolumeDebugEnabled(debugVolume);
    setVolumeSliceVisibility(debugVolume);
    atmosphereUniforms.rainHaze.value = rainHaze;
    syncVolumeSliceRange();
    syncVolumeSliceRange();

    if (rainSystem) {
        const showRain = (waterCycleToggleEl?.checked ?? false) && rainFxEnabled;
        rainSystem.setEnabled(showRain);
        rainSystem.setStrength(rainFxStrength);
        rainSystem.setDensity(clamp(0.15 + rainFxStrength * 0.35, 0, 1));

        if (lastPlanetSettings) {
            const nearR = (lastPlanetSettings.radius ?? BASE_RADIUS_UNITS) + (lastPlanetSettings.heightScale ?? 0);
            rainSystem.setPlanetNearRadius(nearR);
        }

        // Size rain relative to player scale so it looks sensible in Tiny mode.
        const person = getPersonHeightUnits();
        const sizeMul = 0.7 + rainFxStrength * 0.65;
        rainSystem.setSizes({
            dropLength: person * (6.0 * sizeMul),
            dropWidth: person * (0.08 * sizeMul),
            volumeRadius: person * (340.0 * sizeMul),
            volumeHeight: person * (260.0 * sizeMul),
            fallDistance: person * (420.0 * sizeMul)
        });
    }
}
function handleWaterCycleUpdate() {
    updateRangeLabels();
    void selectWaterCycleSystemIfNeeded();
    syncVolumeSliceRange();
    applyWaterCycleConfig();
    rebuildWaterCycleClouds(new THREE.Vector3().copy(dirLight.position).normalize());
}

[atmosphereEl, atmosphereAlphaEl, atmosphereColorEl, atmosphereToggleEl].forEach((el) => {
    el.addEventListener(el.type === 'color' ? 'input' : 'change', handleAtmosphereUpdate);
    if (el.type === 'range') el.addEventListener('input', handleAtmosphereUpdate);
});
[cloudToggleEl, cloudAlphaEl, cloudSpeedEl, cloudQuantityEl, cloudHeightEl, cloudColorEl, cloudResolutionEl, cloudShaderEl].forEach((el) => {
    el.addEventListener(el.type === 'color' ? 'input' : 'change', handleCloudUpdate);
    if (el.type === 'range') el.addEventListener('input', handleCloudUpdate);
});
[waterCycleToggleEl, waterCycleCloudToggleEl, waterCycleRunEl, weatherSimModeEl, weatherVolumeResEl, weatherAtmoThicknessEl, weatherDebugEl, weatherSpeedEl, weatherUpdateHzEl, weatherMoistureLayersEl, weatherEvapEl, weatherPrecipEl, weatherWindEl, weatherWetnessEl, weatherOceanInertiaEl, weatherRainFxToggleEl, weatherRainFxEl, weatherRainHazeEl].forEach((el) => {
    if (!el) return;
    el.addEventListener(el.type === 'checkbox' ? 'change' : (el.type === 'color' ? 'input' : 'change'), handleWaterCycleUpdate);
    if (el.type === 'range') el.addEventListener('input', handleWaterCycleUpdate);
});
if (volumeSliceEl) {
    volumeSliceEl.addEventListener('input', (e) => setVolumeSliceFromUI(Number(e.target.value)));
    volumeSliceEl.addEventListener('change', (e) => setVolumeSliceFromUI(Number(e.target.value)));
    if (volumeSliceValueEl) volumeSliceValueEl.textContent = volumeSliceEl.value;
}
if (waterCycleStepBtn) {
    waterCycleStepBtn.addEventListener('click', () => {
        if (!(waterCycleToggleEl?.checked)) return;
        if (!(waterCycleSystem?.enabled && waterCycleSystem.ready && waterCycleSystem.hasSurface)) return;
        updateWeatherFrame();
        // Advance by 10 simulated minutes and force a readback so visuals update immediately.
        waterCycleSystem.update(0, weatherSunLocal, { dtSimOverride: 600, forceReadback: true });
    });
}

addCloudLayerBtn.addEventListener('click', () => {
    const base = getBaseCloudSettings();
    const bump = cloudLayerSettings.length ? cloudLayerSettings[cloudLayerSettings.length - 1].height : base.height;
    const newLayer = { ...base, id: `extra-${Date.now()}`, height: bump + 0.3 };
    cloudLayerSettings.push(newLayer);
    renderCloudLayerControls();
    rebuildClouds(new THREE.Vector3().copy(dirLight.position).normalize());
});
window.addEventListener('resize', onResize);

// Config inputs
[leftStickSensitivityEl, lookSensitivityXEl, lookSensitivityYEl].forEach((el) => {
    if (!el) return;
    el.addEventListener('input', updateRangeLabels);
});
if (invertLookEl) invertLookEl.addEventListener('change', updateRangeLabels);
setWaterCycleUiDisabled(true);
void selectWaterCycleSystemIfNeeded();

applyPreset(presetEl.value);
generateWorld(presetEl.value);
renderCloudLayerControls();
bindMobileControls();
renderer.setAnimationLoop(animate);
checkVRSupport();
function updateMoonMaterialForPhase() {
    if (!moon) return;
    const dirToSun = new THREE.Vector3().copy(weatherSunWorld).normalize().multiplyScalar(-1);
    const viewDir = new THREE.Vector3().copy(camera.position).sub(moon.position).normalize();
    // Phase factor based on angle between sun direction and view.
    const phase = Math.max(0, dirToSun.dot(viewDir));
    const mat = moon.material;
    mat.emissiveIntensity = 0.0;
    mat.color.setScalar(0.75 + 0.25 * phase);
    mat.needsUpdate = true;
}
