export class StopwatchController {
    constructor(stopwatch, buttons) {
        this.stopwatch = stopwatch;
        this.buttons = buttons;
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.buttons.start.addEventListener('click', () => this.handleStart());
        this.buttons.pause.addEventListener('click', () => this.handlePause());
        this.buttons.reset.addEventListener('click', () => this.handleReset());
        this.buttons.lap.addEventListener('click', () => this.handleLap());
    }

    handleStart() {
        this.stopwatch.start();
        this.updateButtonStates(true);
    }

    handlePause() {
        this.stopwatch.pause();
        this.updateButtonStates(false);
    }

    handleReset() {
        this.stopwatch.reset();
        this.updateButtonStates(false);
    }

    handleLap() {
        this.stopwatch.lap();
    }

    updateButtonStates(isRunning) {
        this.buttons.start.disabled = isRunning;
        this.buttons.pause.disabled = !isRunning;
        this.buttons.lap.disabled = !isRunning;
    }
}