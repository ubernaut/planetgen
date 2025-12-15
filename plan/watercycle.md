llm instructions for this file: this file is the detailed implementation plan for the WebGPU water cycle + weather system (evaporation → clouds → precipitation, winds, pressure). Keep it concrete and actionable. When updates happen, append “Status / Changes” notes instead of rewriting the whole plan so it remains a living roadmap.

# WebGPU Water Cycle / Weather Plan

## Goal
Implement a physically grounded, GPU-simulated water cycle that drives:
- Evaporation from sunlit oceans (and weaker land evap via soil moisture).
- Cloud formation via condensation (uplift + cooling).
- Precipitation with realistic spatial patterns (orographic rain + convergence).
- Large-scale wind from pressure gradients + Coriolis.
- High/low pressure systems that evolve with latent heat + temperature.

The simulation runs in WebGPU compute pipelines and feeds Three.js rendering via a low-res weather texture.

## Constraints & Design Choices
- **WebGPU compute, Three.js WebGL render**: WebGPU→WebGL interop is not portable, so we **read back** a compact RGBA buffer and upload to `THREE.DataTexture`.
- **Spherical planet, 2D grid**: Use an equirectangular grid (`lon × lat`) with longitude wrap and clamped poles. Use spherical cell sizes (dx varies with `cos(lat)`).
- **Column model (single-layer)**: Start with a 2D “atmospheric column” per cell: temperature, vapor, cloud water, rain, pressure anomaly, wind, soil moisture.
- **Stability first**: Semi‑Lagrangian advection + relaxed (“nudged”) pressure/wind avoids explosions at interactive time scales.

## State & Units (v0)
Grid size (recommended start): `256×128` (≈33k cells).

Per-cell fields (in SI-ish units where reasonable):
- `T` (K): column temperature proxy.
- `q` (kg/kg): specific humidity.
- `qc` (kg/kg): cloud liquid water.
- `rain` (kg/kg): precipitating water proxy (for display + deposition).
- `p` (Pa): surface pressure anomaly proxy.
- `u,v` (m/s): horizontal wind components.
- `soil` (0..1): surface wetness proxy (deposition + evap).

Static per-cell surface inputs:
- `ocean` (0/1): ocean mask.
- `elev01` (0..1): elevation normalized above sea level.
- optional later: `albedo`, `landClass`, `heatCapacity`, `seaSurfaceTemp`.

## Core Physics (v0)
### Insolation
Compute normal from lat/lon; `I = max(dot(n, sunDirLocal), 0)`.

### Radiative equilibrium temperature (nudging)
`T_eq(lat, alt, I) = T0 - ΔT_lat*|sin(lat)| + ΔT_sun*I - lapse*alt`
`T ← mix(T, T_eq, dt*tempRelax)`

### Evaporation
- Ocean: `q += ocean * evapOcean * I * max(0, qsat(T) - q) * dt`
- Land (weak): `q += (1-ocean) * evapLand * I * soil * dt`

### Lift cooling (cloud genesis driver)
Two lift sources:
- **Convergence lift**: `w_conv ≈ max(0, -div(u,v)) * H` (H ≈ scale height).
- **Orographic lift**: `w_orog ≈ max(0, u*dhdx + v*dhdy)` with slopes from elevation.
Cooling: `T -= Γ * (w_conv + w_orog) * dt` (Γ ≈ 9.8 K/km).

### Condensation / Cloud water
Use Clausius‑Clapeyron saturation mixing ratio:
- if `q > qsat(T)`: `cond = (q - qsat) * clamp(dt/τ_cond, 0..1)`
  - `q -= cond`, `qc += cond`
  - `T += (L/Cp)*cond` (latent heating; scaled if needed for stability)
- if `q < qsat` and `qc > 0`: allow evaporation back toward saturation with longer timescale.

### Precipitation + deposition
Autoconversion threshold:
- `pr = max(0, qc - qcThresh) * clamp(dt/τ_precip, 0..1)`
- `qc -= pr`, `rain = rain*exp(-dt/τ_rainDecay) + pr`
- `soil += pr * soilGain * (1-ocean)` then `soil` decays over ~days.

### Pressure & Wind
Pressure anomaly target from temperature/humidity/altitude:
`p_eq = -a(T - T0) - b*q - c*alt`
`p ← mix(p, p_eq, dt*τ_p)`

Wind from geostrophic balance (regularized near equator):
- `dp/dx, dp/dy` via central differences with spherical dx/dy.
- `f = 2Ω sin(lat)`, clamp `|f| >= fMin`
- `u_geo = -(1/(ρf)) dp/dy`, `v_geo = (1/(ρf)) dp/dx`
- `u,v ← mix(u,v, u_geo,v_geo, dt*τ_w)` then apply drag and max-wind clamp.

### Advection
Semi‑Lagrangian backtrace with spherical cell sizes:
- `xB = x - u*dt/dx(lat)`
- `yB = y - v*dt/dy`
Bilinear sample from previous state for `(T,q,qc)` (optionally also `p` later).

## WebGPU Compute Architecture
### Buffers
- `stateA/stateB`: storage buffers, 2×`vec4<f32>` per cell.
- `surface`: storage buffer, `vec4<f32>` per cell `(ocean, elev01, rawHeight, _)`.
- `params`: uniform buffer as `array<vec4<f32>, N>` (avoid padding pitfalls).
- `outRGBA`: storage buffer `array<u32>` packed RGBA8 (little-endian).
- `readback[2]`: MAP_READ buffers for async readback ping-pong.

### Pipelines
**v0**: single compute pipeline that:
1. Reads `stateSrc` + `surface`.
2. Computes `stateDst`.
3. Packs display channels into `outRGBA`.

Future split (v1+):
- separate passes for: wind/pressure, advection, microphysics (condense/precip), packing.
- optionally move “packing” to storage texture (if rendering path becomes WebGPU).

### Dispatch
Workgroup: `8×8` threads; dispatch `ceil(W/8) × ceil(H/8)`.

### Readback cadence
- Simulate every frame (dt scaled), but **read back at ~6–10 Hz** for UI/visuals.
- Use double-buffered readback to avoid mapping buffers still in use.

## Rendering Integration
### Weather texture channels (RGBA8)
- `R`: cloud density proxy (from `qc`)
- `G`: rain intensity proxy
- `B`: pressure anomaly normalized
- `A`: soil wetness proxy

### Volumetric clouds
- Render as a spherical shell with raymarching in fragment shader.
- Sample `weatherMap` (`R`,`G`) by mapping direction → lat/lon UV.
- Add 3D noise for detail; modulate density by vertical profile in shell.
- Darken/thicken where `rain` is high; light by sun direction.

### Surface wetness
- Inject `uWeatherMap` into planet shader and darken land by `max(rain, soil)` while avoiding snow/ice regions.

## Validation / Debug Plan
- Add a debug toggle to show `pressure` or `wind` as false-color overlays on a thin sphere.
- Add a one-shot “step sim” button + pause to inspect stability.
- Basic unit tests for CPU preprocessing (downsample/triplanar sampling).

## Roadmap (Next Iterations)
1. **Two-layer atmosphere** (boundary layer + cloud layer): better humidity transport and realistic cloud bases.
2. **Mass/energy consistency**: explicit budgets for vapor/cloud/precip and better latent heating scaling.
3. **Snow/ice precipitation**: temperature-dependent phase change; accumulate snowpack and melt.
4. **Ocean heat capacity**: slow SST, diurnal cycle, land/ocean contrast.
5. **Improved dynamics**: shallow-water-like momentum with explicit vorticity, jet formation, and less “diagnostic” wind.
6. **Orographic rain shadows**: refine lift using true slopes and wind direction; add lee-side drying.
7. **Visual rain**: GPU particle/line rain in active precip regions + splash/atmospheric haze.

## Status / Changes
- 2025-12-14: v0 implementation landed (WebGPU compute + readback weather texture, volumetric cloud shader sampling weather map, surface wetness modulation).
- 2025-12-15: Added Water Cycle config controls (enable, speed, update rate, evap/precip/wind multipliers, wetness strength) and wired them into the sim + surface shading.
- 2025-12-15: Implemented v1 iteration pieces: two-layer humidity (boundary layer + free troposphere), snow/rain phase split (cold precip no longer counts as rain/wetness), ocean thermal inertia for temperature relaxation, and a terrain debug view + pause/step controls for inspection.
- 2025-12-15: Added an aux weather texture (temp, snowpack, wind) alongside the main weather map, implemented snowpack accumulation + melt, and extended terrain debug to visualize temp/snow/wind; terrain snow shading now includes dynamic snowpack.
- 2025-12-15: Added visual rain streak FX driven by the weather rain channel + local wind tilt, and updated the volumetric cloud shader to advect detail using the simulated wind field (aux map).
- 2025-12-15: Added rain haze in the atmosphere shader by sampling the weather rain channel to boost Mie scattering in rainy regions; exposed a HUD control for haze strength.
- 2025-12-15: Made the number of vertical moisture layers configurable (1–4). Default is 2 (boundary + free troposphere), with optional upper layers for richer transport.

## Configuration (HUD)
- `Water cycle enabled (WebGPU)`: gates simulation updates and whether the weather texture is used for rendering.
- `Run simulation`: pauses/resumes updates while keeping the current weather texture visible.
- `Step simulation`: advances the sim by a fixed dt and forces a readback (useful while paused).
- `Weather debug view`: overrides terrain shading to show `cloud/rain/pressure/soil/temp/snow/wind`.
- `Weather speed (minutes/sec)`: maps to `timeScale = minutesPerSec * 60`.
- `Weather update rate (Hz)`: maps to `readbackIntervalS = 1 / hz` (visual texture refresh cadence).
- `Moisture layers`: sets the number of vertical moisture layers in the sim (1–4). (Evaporation feeds the bottom layer; condensation targets layer 1 when present.)
- `Evaporation strength`: multiplies ocean + land evaporation rates.
- `Precipitation strength`: multiplies precipitation/autoconversion rate.
- `Wind strength`: multiplies wind relaxation rate and max wind.
- `Surface wetness strength`: sets terrain shader `uWeatherStrength` (darkens wet land by `max(rain, soil)`).
- `Ocean thermal inertia`: multiplies ocean temperature relaxation rate (lower = slower ocean temperature response).
- `Visual rain`: enables/disables GPU rain streaks near the camera (driven by the weather rain channel).
- `Rain FX strength`: scales rain streak density/opacity and volume sizing.
- `Rain haze`: boosts near-ground atmospheric haze in rainy regions.
