import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { TinyPlanetControls } from './TinyPlanetControls.js';
import { PlanetForge } from './worldgen.js';
import { InputRouter } from './InputRouter.js';

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

const isMobileDevice = () => window.matchMedia('(max-width: 768px)').matches || /Mobi|Android|iP(ad|hone|od)|IEMobile|BlackBerry|Kindle|Silk|Opera Mini/i.test(navigator.userAgent || '');

const renderer = new THREE.WebGLRenderer({ antialias: true, canvas, logarithmicDepthBuffer: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x05070f);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05070f);
scene.fog = new THREE.Fog(0x05070f, 30, 120);
const planetGroup = new THREE.Group();
scene.add(planetGroup);

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

const tinyControls = new TinyPlanetControls(camera, renderer.domElement, scene, () => {
    controls.enabled = true;
    setStatus('');
    if (savedOrbitState) {
        controls.target.copy(savedOrbitState.target);
        camera.position.copy(savedOrbitState.position);
        savedOrbitState = null;
    }
    updateOrbitBounds();
}, input);
const clock = new THREE.Clock();

scene.add(new THREE.HemisphereLight(0xd8e7ff, 0x0a0c12, 0.9));
const dirLight = new THREE.DirectionalLight(0xffffff, 1.35);
dirLight.position.set(12, 16, 10);
scene.add(dirLight);

scene.add(buildStarfield());

let planet = null;
let generating = false;
let autoRegenTimer = null;
let water = null;
let freshwater = null;
let atmosphere = null;
let clouds = [];
let cloudLayerSettings = [];
let lastPlanetSettings = null;
let savedOrbitState = null;
let xrSession = null;
let xrPrevButtons = new Map();
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let vrSupported = false;

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
                tinyControls.enter(point, planet);
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
    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    const hit = raycaster.intersectObject(planet, false);
    if (hit.length) {
        savedOrbitState = {
            position: camera.position.clone(),
            target: controls.target.clone()
        };
        tinyControls.enter(hit[0].point, planet);
        controls.enabled = false;
        setStatus('Mode: Tiny Planet Explorer (ESC to exit)');
    }
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
        atmosphereAlpha: 0.4,
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
        atmosphereAlpha: 0.4,
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
        atmosphereAlpha: 0.4,
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
    opacity: { value: 0.65 },
    fresnelPower: { value: 3.4 },
    iceCap: { value: 0.0 },
    iceColor: { value: new THREE.Color(0xd9f1ff) }
};
const atmosphereUniforms = {
    time: { value: 0 },
    glowColor: { value: new THREE.Color(0x4da8ff) },
    thickness: { value: 0.35 },
    alpha: { value: 0.4 }
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
    if (!mobile) {
        mobileControlsEl.style.display = 'none';
        input?.clear();
        if (reticleEl) reticleEl.style.display = 'none';
        return;
    }
    const inTiny = tinyControls.enabled;
    mobileControlsEl.style.display = 'block';
    if (movePadEl) movePadEl.style.display = inTiny ? 'grid' : 'none';
    if (lookPadEl) lookPadEl.style.display = inTiny ? 'grid' : 'none';
    const actionColumn = mobileControlsEl.querySelector('.action-column');
    if (actionColumn) actionColumn.style.display = inTiny ? 'grid' : 'none';
    if (surfaceOnlyBtn) surfaceOnlyBtn.style.display = inTiny ? 'none' : 'inline-flex';
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
    atmosphereAlphaEl.value = preset.atmosphereAlpha ?? 0.4;
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
        atmosphereAlpha: clamp(parseFloat(atmosphereAlphaEl.value) || 0.4, 0, 1),
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
        const mesh = forge.createMesh(settings.radius, settings.heightScale, settings.seaLevel, settings.subdivisions, settings.iceCap);
        mesh.userData.forge = forge;
        mesh.userData.settings = settings;
        mesh.rotation.x = 0.25;
        replacePlanet(mesh);
        replaceWater(buildWaterMesh(settings.radius, settings.subdivisions, settings.seaLevel, settings.heightScale, settings.iceCap));
        replaceFreshwater(forge.createFreshwaterMesh(settings.radius, settings.heightScale, settings.seaLevel, settings.subdivisions));
        const sunDir = new THREE.Vector3().copy(dirLight.position).normalize();
        if (atmosphereToggleEl.checked) {
            replaceAtmosphere(buildAtmosphereMesh(settings.radius, settings.subdivisions, settings.heightScale, settings.atmosphereHeight, settings.atmosphere, sunDir, settings.atmosphereAlpha, settings.atmosphereColor));
        } else if (atmosphere) {
            atmosphere.visible = false;
        }
        rebuildClouds(sunDir);
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
    atmosphere.renderOrder = 3;
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
    atmosphereUniforms.thickness.value = Math.max(0.05, thickness);
    atmosphereUniforms.alpha.value = alpha;
    atmosphereUniforms.glowColor.value = new THREE.Color(colorHex);
    const geometry = new THREE.IcosahedronGeometry(outerRadius, Math.max(0, Math.floor(subdivisions)));
    const material = new THREE.ShaderMaterial({
        uniforms: atmosphereUniforms,
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
    return new THREE.Mesh(geometry, material);
}

function buildCloudMesh(radius, baseSubdivisions, sunDir, planetRadius, seaLevel, heightScale, settings) {
    const cloudRadius = Math.max(0.1, radius + settings.height);
    const modeId = settings.mode === 'billow' ? 1 : settings.mode === 'cellular' ? 2 : 0;
    const uniforms = {
        time: { value: 0 },
        color: { value: new THREE.Color(settings.color) },
        opacity: { value: settings.alpha },
        sunDir: { value: sunDir.clone().normalize() },
        windDir: { value: new THREE.Vector3(0, 0, 1) },
        planetRadius: { value: planetRadius },
        seaLevel: { value: seaLevel },
        heightScale: { value: heightScale },
        speed: { value: settings.speed },
        quantity: { value: settings.quantity },
        noiseScale: { value: Math.max(0.1, settings.resolution) },
        mode: { value: modeId }
    };
    const geometry = new THREE.IcosahedronGeometry(cloudRadius, Math.max(1, Math.floor(baseSubdivisions * 0.5)));
    const material = new THREE.ShaderMaterial({
        uniforms,
        transparent: true,
        depthWrite: false,
        side: THREE.FrontSide,
        blending: THREE.NormalBlending,
        vertexShader: `
            #include <common>
            #include <logdepthbuf_pars_vertex>
            uniform float time;
            uniform vec3 sunDir;
            uniform vec3 windDir;
            uniform float planetRadius;
            uniform float seaLevel;
            uniform float heightScale;
            uniform float quantity;
            uniform float noiseScale;
            uniform float mode;
            varying vec3 vWorld;
            varying vec3 vNormal;
            // 3D noise helpers
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
                float amp = 0.5;
                for(int i=0;i<4;i++){
                    sum += noise(p) * amp;
                    p *= 2.1;
                    amp *= 0.5;
                }
                return sum;
            }
            void main() {
                vec3 pos = position;
                vec3 dir = normalize(pos);
                float base = fbm(dir * (noiseScale * 0.05) + windDir * time);
                float n = base;
                if (mode > 0.5 && mode < 1.5) {
                    n = abs(base) * 2.0 - 1.0;
                } else if (mode > 1.5) {
                    vec3 q = floor(dir * noiseScale);
                    float c = fract(sin(dot(q, vec3(12.9898,78.233,45.164))) * 43758.5453);
                    n = mix(base, c * 2.0 - 1.0, 0.5);
                }
                pos += normal * n * 0.35;
                vec4 worldPos = modelMatrix * vec4(pos, 1.0);
                vWorld = worldPos.xyz;
                vNormal = normalize(normalMatrix * normalize(pos));
                gl_Position = projectionMatrix * viewMatrix * worldPos;
                #include <logdepthbuf_vertex>
            }
        `,
        fragmentShader: `
            #include <common>
            #include <logdepthbuf_pars_fragment>
            uniform vec3 color;
            uniform float opacity;
            uniform float time;
            uniform vec3 sunDir;
            uniform vec3 windDir;
            uniform float planetRadius;
            uniform float seaLevel;
            uniform float heightScale;
            uniform float quantity;
            uniform float noiseScale;
            uniform float mode;
            varying vec3 vWorld;
            varying vec3 vNormal;
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
                float amp = 0.5;
                for(int i=0;i<4;i++){
                    sum += noise(p) * amp;
                    p *= 2.1;
                    amp *= 0.5;
                }
                return sum;
            }
            void main() {
                #include <logdepthbuf_fragment>
                vec3 dir = normalize(vWorld);
                float day = clamp(dot(dir, normalize(sunDir)), 0.0, 1.0);
                float lat = 1.0 - abs(dir.y);
                float base = fbm(dir * (noiseScale * 0.02 + 0.6) + windDir * time * 0.5 + vec3(0.0, time * 0.02, 0.0));
                float n = base;
                if (mode > 0.5 && mode < 1.5) {
                    n = abs(base) * 2.0 - 1.0;
                } else if (mode > 1.5) {
                    vec3 q = floor(dir * noiseScale);
                    float c = fract(sin(dot(q, vec3(12.9898,78.233,45.164))) * 43758.5453);
                    n = mix(base, c * 2.0 - 1.0, 0.5);
                }
                float coverage = n + lat * 0.2 + day * 0.25;
                coverage += (quantity - 0.5) * 0.8;
                float alpha = smoothstep(0.48, 0.68, coverage) * opacity;
                if(alpha < 0.01) discard;
                vec3 viewDir = normalize(cameraPosition - vWorld);
                float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 2.0);
                gl_FragColor = vec4(color * (0.8 + fresnel * 0.4), alpha);
            }
        `
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData.uniforms = uniforms;
    mesh.userData.settings = settings;
    mesh.renderOrder = 2;
    return mesh;
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
    const alpha = clamp(parseFloat(atmosphereAlphaEl.value) || 0.4, 0, 1);
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

function animate() {
    const delta = clock.getDelta();
    
    updateRangeLabels();
    
    if (xrSession) {
        pollVRInputs();
    }

    if (tinyControls.enabled) {
        tinyControls.update(delta);
    } else {
        if (planet && !generating) {
            planet.rotation.y += 0.0009;
        }
        controls.update();
    }
    syncMobileVisibility();

    if (water) waterUniforms.time.value += 0.016;
    if (freshwater) freshwater.material.uniforms.time.value += 0.016;
    if (clouds.length) {
        const dt = Math.min(delta, 0.25); // avoid huge jumps after tab inactivity
        for (const mesh of clouds) {
            const u = mesh.userData.uniforms;
            const s = mesh.userData.settings;
            const speed = s.speed || 1;
            u.time.value += dt * speed;
            const windAngle = u.time.value * 0.2;
            u.windDir.value.set(Math.sin(windAngle), 0, Math.cos(windAngle)).normalize();
        }
    }
    if (atmosphere) atmosphereUniforms.time.value += 0.002;
    
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
    rebuildClouds(new THREE.Vector3().copy(dirLight.position).normalize());
}

[atmosphereEl, atmosphereAlphaEl, atmosphereColorEl, atmosphereToggleEl].forEach((el) => {
    el.addEventListener(el.type === 'color' ? 'input' : 'change', handleAtmosphereUpdate);
    if (el.type === 'range') el.addEventListener('input', handleAtmosphereUpdate);
});
[cloudToggleEl, cloudAlphaEl, cloudSpeedEl, cloudQuantityEl, cloudHeightEl, cloudColorEl, cloudResolutionEl, cloudShaderEl].forEach((el) => {
    el.addEventListener(el.type === 'color' ? 'input' : 'change', handleCloudUpdate);
    if (el.type === 'range') el.addEventListener('input', handleCloudUpdate);
});

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

applyPreset(presetEl.value);
generateWorld(presetEl.value);
renderCloudLayerControls();
bindMobileControls();
renderer.setAnimationLoop(animate);
checkVRSupport();
