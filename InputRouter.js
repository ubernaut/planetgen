const DEFAULT_STATE = () => ({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false,
    run: false,
    rollLeft: false,
    rollRight: false
});

const ONE_SHOT_ACTIONS = new Set(['flyToggle', 'jump', 'exit', 'surface']);

export class InputRouter {
    constructor(target = document) {
        this.target = target;
        this.state = DEFAULT_STATE();
        this.once = new Set();
        this.lookDelta = { x: 0, y: 0 };
        this.mode = 'desktop';
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.target.addEventListener('keydown', this.onKeyDown);
        this.target.addEventListener('keyup', this.onKeyUp);
    }

    setMode(mode) {
        this.mode = mode;
    }

    onKeyDown(event) {
        const { code, repeat } = event;
        switch (code) {
            case 'KeyW':
            case 'ArrowUp':
                this.state.forward = true;
                break;
            case 'KeyS':
            case 'ArrowDown':
                this.state.backward = true;
                break;
            case 'KeyA':
            case 'ArrowLeft':
                this.state.left = true;
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.state.right = true;
                break;
            case 'Space':
                this.state.up = true;
                if (!repeat) this.once.add('jump');
                break;
            case 'ControlLeft':
            case 'ControlRight':
                this.state.down = true;
                break;
            case 'ShiftLeft':
            case 'ShiftRight':
                this.state.run = true;
                break;
            case 'KeyQ':
                this.state.rollLeft = true;
                break;
            case 'KeyE':
                this.state.rollRight = true;
                break;
            case 'KeyF':
                if (!repeat) this.once.add('flyToggle');
                break;
            case 'Escape':
                if (!repeat) this.once.add('exit');
                break;
        }
    }

    onKeyUp(event) {
        switch (event.code) {
            case 'KeyW':
            case 'ArrowUp':
                this.state.forward = false;
                break;
            case 'KeyS':
            case 'ArrowDown':
                this.state.backward = false;
                break;
            case 'KeyA':
            case 'ArrowLeft':
                this.state.left = false;
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.state.right = false;
                break;
            case 'Space':
                this.state.up = false;
                break;
            case 'ControlLeft':
            case 'ControlRight':
                this.state.down = false;
                break;
            case 'ShiftLeft':
            case 'ShiftRight':
                this.state.run = false;
                break;
            case 'KeyQ':
                this.state.rollLeft = false;
                break;
            case 'KeyE':
                this.state.rollRight = false;
                break;
        }
    }

    consume(name) {
        if (!ONE_SHOT_ACTIONS.has(name)) return false;
        const hit = this.once.has(name);
        if (hit) this.once.delete(name);
        return hit;
    }

    setAction(action, pressed) {
        if (action in this.state) {
            this.state[action] = !!pressed;
        } else if (ONE_SHOT_ACTIONS.has(action) && pressed) {
            this.once.add(action);
        }
    }

    trigger(action) {
        if (ONE_SHOT_ACTIONS.has(action)) {
            this.once.add(action);
        }
    }

    addLookDelta(dx, dy) {
        this.lookDelta.x += dx;
        this.lookDelta.y += dy;
    }

    consumeLookDelta() {
        const { x, y } = this.lookDelta;
        this.lookDelta.x = 0;
        this.lookDelta.y = 0;
        return { x, y };
    }

    getState() {
        return this.state;
    }

    clear() {
        this.state = DEFAULT_STATE();
        this.once.clear();
        this.lookDelta = { x: 0, y: 0 };
    }

    dispose() {
        this.target.removeEventListener('keydown', this.onKeyDown);
        this.target.removeEventListener('keyup', this.onKeyUp);
    }
}
