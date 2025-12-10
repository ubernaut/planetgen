llm instructions for this file: this file contains the short term goals for this git branch. update as necessary. 

immediate goals: 

- Fix TinyPlanet first-person (spawn height/orientation, pointer-lock/mouselook, mobile input). Current state: broken after refactor; attempts failed (still spawning underground/inward-facing).

recent progress:

- Fixed camera zoom issue after exiting Tiny Planet mode.
- Implemented "Rocky Areas": Add surface detail/roughness modulation based on slope/height.
- Implemented sliding physics on ice surfaces.
- Refactored index.js: Extracted rendering, UI, and Planet generation into separate modules (SceneManager, PlanetManager, UIManager).
- Modularized Atmosphere and Cloud systems.
- Implemented physical ice collision in polar regions.
- Fixed VR spawn location bugs and inverted joystick inputs.
- VR entry/exit button added (WebXR), with thumbstick locomotion mapping.
- Water shader now blends to ice near poles.
- TrackballControls replaced OrbitControls for overview.
- Added mobile twinstick controls and dynamic switching.
- Input router abstraction created.
