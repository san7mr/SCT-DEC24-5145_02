import { formatTime } from '../utils/timeFormatter.js';

export class Stopwatch {
    constructor(display, lapList) {
        this.display = display;
        this.lapList = lapList;
        this.reset();
    }

    reset() {
        this.isRunning = false;
        this.startTime = 0;
        this.elapsedTime = 0;
        this.intervalId = null;
        this.laps = [];
        this.lastLapTime = 0;
        this.updateDisplay();
        this.lapList.innerHTML = '';
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.startTime = Date.now() - this.elapsedTime;
            this.intervalId = setInterval(() => this.updateTime(), 10);
        }
    }

    pause() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.intervalId);
            this.elapsedTime = Date.now() - this.startTime;
        }
    }

    updateTime() {
        if (this.isRunning) {
            this.elapsedTime = Date.now() - this.startTime;
            this.updateDisplay();
        }
    }

    updateDisplay() {
        this.display.textContent = formatTime(this.elapsedTime);
    }

    lap() {
        const currentTime = this.elapsedTime;
        const lapTime = currentTime - this.lastLapTime;
        this.lastLapTime = currentTime;
        this.laps.push({ total: currentTime, lap: lapTime });
        this.addLapToDisplay(this.laps.length, lapTime, currentTime);
    }

    addLapToDisplay(lapNumber, lapTime, totalTime) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>Lap ${lapNumber}</span>
            <span>${formatTime(lapTime)} / ${formatTime(totalTime)}</span>
        `;
        this.lapList.insertBefore(li, this.lapList.firstChild);
    }
}