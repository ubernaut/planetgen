import * as THREE from 'three';
import { SceneManager } from './SceneManager.js';
import { PlanetManager } from './PlanetManager.js';
import { UIManager } from './UIManager.js';
import { InputRouter } from './InputRouter.js';
import { TinyPlanetControls } from './TinyPlanetControls.js';

// --- Helpers ---
const isMobileDevice = () => window.matchMedia('(max-width: 768px)').matches || /Mobi|Android|iP(ad|hone|od)|IEMobile|BlackBerry|Kindle|Silk|Opera Mini/i.test(navigator.userAgent || '');

// --- Init Modules ---
const canvas = document.getElementById('viewport');
const sceneManager = new SceneManager(canvas);
const planetManager = new PlanetManager(sceneManager);
const input = new InputRouter();
input.setMode(isMobileDevice() ? 'mobile' : 'desktop');

// --- State ---
const clock = new THREE.Clock();
let savedOrbitState = null;
let xrSession = null;
let xrPrevButtons = new Map();
let vrSupported = false;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

// --- Presets ---
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

// --- Controls ---
const tinyControls = new TinyPlanetControls(
    sceneManager.camera, 
    sceneManager.renderer.domElement, 
    sceneManager.scene, 
    () => { // On Exit
        sceneManager.controls.enabled = true;
        uiManager.setStatus('');
        
        // Restore controls bounds based on last settings
        const settings = uiManager.readSettings();
        planetManager.applyPlanetScale(settings.planetDiameterKm);

        if (savedOrbitState) {
            sceneManager.controls.target.copy(savedOrbitState.target);
            sceneManager.camera.position.copy(savedOrbitState.position);
            savedOrbitState = null;
        }

        // Fix: Ensure camera is not too close after exiting
        const minDst = sceneManager.controls.minDistance;
        const currentDist = sceneManager.camera.position.distanceTo(sceneManager.controls.target);
        if (currentDist < minDst * 1.2) {
            const dir = sceneManager.camera.position.clone().sub(sceneManager.controls.target).normalize();
            if (dir.lengthSq() < 0.001) dir.set(0, 0, 1);
            sceneManager.camera.position.copy(sceneManager.controls.target).add(dir.multiplyScalar(minDst * 1.2));
        }
    }, 
    input
);

// --- UI Manager ---
let autoRegenTimer = null;
const queueRegen = () => {
    clearTimeout(autoRegenTimer);
    autoRegenTimer = setTimeout(() => {
        const settings = uiManager.readSettings();
        planetManager.generate(settings, (msg) => uiManager.setStatus(msg));
    }, 400);
};

const uiManager = new UIManager({
    onRegen: () => {
        uiManager.setStatus('Params changed. Regenerating…');
        queueRegen();
    },
    onPreset: (key) => {
        const preset = presets[key];
        if (preset) {
            uiManager.writeSettings(preset);
            uiManager.setStatus('Preset applied. Regenerating…');
            queueRegen();
        }
    },
    onAtmosphereUpdate: () => {
        planetManager.updateAtmosphere(uiManager.readSettings());
    },
    onCloudUpdate: () => {
        planetManager.rebuildClouds(sceneManager.getSunDir());
    },
    onDiameterChange: (val) => {
        planetManager.applyPlanetScale(val);
        if (planetManager.lastSettings) {
            uiManager.setStatus(`Planet diameter set to ${val.toLocaleString()} km`);
        }
    },
    onVRToggle: () => {
        if (xrSession) stopVR();
        else startVR();
    }
});

// Link cloud layers
planetManager.cloudLayerSettings = uiManager.cloudLayerSettings;

// --- Input Bindings ---
function handleSurfaceAction() {
    if (tinyControls.enabled) {
        tinyControls.snapToSurface();
        return;
    }
    if (!planetManager.planet) return;
    raycaster.setFromCamera(new THREE.Vector2(0, 0), sceneManager.camera);
    const hit = raycaster.intersectObject(planetManager.planet, false);
    if (hit.length) {
        savedOrbitState = {
            position: sceneManager.camera.position.clone(),
            target: sceneManager.controls.target.clone()
        };
        tinyControls.enter(hit[0].point, planetManager.planet);
        sceneManager.controls.enabled = false;
        uiManager.setStatus('Mode: Tiny Planet Explorer (ESC to exit)');
    }
}

uiManager.bindMobileControls(input, handleSurfaceAction);

window.addEventListener('mousedown', (event) => {
    if (event.button === 1) { // Middle Click
        event.preventDefault();
        
        if (tinyControls.enabled) {
            tinyControls.exit();
            sceneManager.controls.enabled = true;
            return;
        }

        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(pointer, sceneManager.camera);
        
        if (planetManager.planet) {
            savedOrbitState = {
                position: sceneManager.camera.position.clone(),
                target: sceneManager.controls.target.clone()
            };
            const intersects = raycaster.intersectObject(planetManager.planet, false);
            if (intersects.length > 0) {
                const point = intersects[0].point;
                tinyControls.enter(point, planetManager.planet);
                sceneManager.controls.enabled = false;
                uiManager.setStatus('Mode: Tiny Planet Explorer (ESC to exit)');
            }
        }
    }
});

window.addEventListener('resize', () => {
    sceneManager.onResize();
    uiManager.syncMobileVisibility(isMobileDevice(), tinyControls.enabled);
    input.setMode(isMobileDevice() ? 'mobile' : 'desktop');
});

// Global event for surface action (from InputRouter if needed, but InputRouter usually triggers callbacks inside TinyControls or here via bindMobile)
// InputRouter triggers are handled inside TinyControls update for actions, 
// OR via bindMobileControls callbacks.
// But we also have `document.addEventListener('surface', ...)` in old index.js.
document.addEventListener('surface', handleSurfaceAction);


// --- VR Logic ---
async function checkVRSupport() {
    if (!navigator.xr || !uiManager.els.vrToggle) return;
    try {
        vrSupported = await navigator.xr.isSessionSupported('immersive-vr');
        uiManager.els.vrToggle.style.display = vrSupported ? 'block' : 'none';
        if (uiManager.els.vrToggle) uiManager.els.vrToggle.disabled = !vrSupported;
    } catch (err) {
        console.warn('XR support check failed', err);
    }
}

async function startVR() {
    if (!navigator.xr) {
        uiManager.setStatus('WebXR not available');
        return;
    }
    try {
        const session = await navigator.xr.requestSession('immersive-vr', { optionalFeatures: ['local-floor', 'bounded-floor'] });
        xrSession = session;
        sceneManager.renderer.xr.enabled = true;
        await sceneManager.renderer.xr.setSession(session);

        if (sceneManager.controls) sceneManager.controls.enabled = false;

        // Ensure orbit camera is outside
        if (planetManager.planet && !tinyControls.enabled) {
            const settings = planetManager.lastSettings || uiManager.readSettings();
            const surfaceRadius = (settings.radius ?? 10) * planetManager.sceneManager.planetGroup.scale.x + (settings.heightScale ?? 0);
            const minDist = Math.max(surfaceRadius * 2.0, 30);
            const dir = sceneManager.camera.position.clone().sub(sceneManager.controls.target);
            if (dir.lengthSq() < 1e-6) dir.set(0, 0, 1);
            dir.normalize();
            const target = new THREE.Vector3(0, 0, 0);
            const newPos = target.clone().sub(dir.multiplyScalar(minDist));
            
            sceneManager.userGroup.position.copy(newPos);
            sceneManager.userGroup.lookAt(target);
            
            sceneManager.camera.position.set(0, 0, 0);
            sceneManager.camera.rotation.set(0, 0, 0);
        }
        uiManager.els.vrToggle.textContent = 'Exit VR';
        uiManager.setStatus('VR session started');
        session.addEventListener('end', () => {
            xrSession = null;
            xrPrevButtons.clear();
            sceneManager.renderer.xr.enabled = false;
            
            sceneManager.userGroup.position.set(0, 0, 0);
            sceneManager.userGroup.rotation.set(0, 0, 0);
            sceneManager.userGroup.quaternion.identity();
            if (sceneManager.controls) sceneManager.controls.enabled = true;

            uiManager.els.vrToggle.textContent = 'Enter VR';
            uiManager.setStatus('');
        });
    } catch (err) {
        console.error(err);
        uiManager.setStatus('VR start failed');
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

// --- Init Sequence ---
// Set initial mobile state
if (isMobileDevice()) {
    uiManager.setHudCollapsed(true);
}

// Initial Generation
const initialPreset = uiManager.els.preset.value || 'balanced';
uiManager.writeSettings(presets[initialPreset]);
planetManager.generate(uiManager.readSettings(), (msg) => uiManager.setStatus(msg));

// Animation Loop
sceneManager.renderer.setAnimationLoop(() => {
    const delta = clock.getDelta();
    
    // UI Update (Range labels etc) - technically redundant every frame if events handle it, 
    // but useful for lerping values if we add animation later. 
    // For now we trust bindEvents.
    // uiManager.updateRangeLabels(); // Disabled to save perf, events handle it.
    
    if (xrSession) {
        pollVRInputs();
    }
    
    const rotatePlanet = !tinyControls.enabled;
    if (tinyControls.enabled) {
        tinyControls.update(delta);
    }
    planetManager.update(delta, rotatePlanet); // keep water/atmosphere/clouds ticking even in Tiny mode
    sceneManager.update(); // Always render (controls.update is a no-op when disabled)
    uiManager.syncMobileVisibility(isMobileDevice(), tinyControls.enabled);
});

checkVRSupport();
