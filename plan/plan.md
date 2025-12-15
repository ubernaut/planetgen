llm instructions for this file: this file contains the high level project plan. what we're building, tasks completed, tasks remaining, and roadmap. 

* add section for plate tectonic options
    expose more config options. 
    num plates
    plate activity
    volcanic activity
    alternate algorithm (other than voroni)

* add rocky areas. 

* add realistic weather (v0 implemented; iterate)
    * convection based on ocean and sun
    * high / low pressure systems
    * realistic wind
    * realistic moisture depositing resulting in dryer and wetter areas
    * v1: two-layer humidity + snow/rain phase + debug view + pause/step (implemented)
    * v1.1: aux weather map (temp/snow/wind) + snowpack accumulation/melt + temp/snow/wind debug overlays (implemented)
    * v1.2: visual rain FX + rain haze + wind-advected cloud detail (implemented)
    * v1.3: configurable moisture layers (1–4) (implemented)
    * v2: true 3D voxel atmosphere + volume-atlas clouds (in progress)

* solar system section:
    * material distribution
    * age of system
    * add star type/distance  binary/trinary
    * add moon section
    * add material composition section

* planet type
    * rocky/metal
    * gas giant
    * earthlike
    * iceworld
    * comet
    * asteroid belt
    * kupier belt
    * nebulae

* known regressions / blockers
    * TinyPlanet first-person controls broken after refactor (spawn height/orientation and pointer-lock/mouselook). Pending fix.
    
