import { Stopwatch } from './src/models/Stopwatch.js';
import { StopwatchController } from './src/controllers/StopwatchController.js';

// DOM Elements
const display = document.querySelector('.display');
const lapTimes = document.getElementById('lapTimes');

// Button Elements
const buttons = {
    start: document.getElementById('startBtn'),
    pause: document.getElementById('pauseBtn'),
    reset: document.getElementById('resetBtn'),
    lap: document.getElementById('lapBtn')
};

// Initialize Stopwatch and Controller
const stopwatch = new Stopwatch(display, lapTimes);
new StopwatchController(stopwatch, buttons);