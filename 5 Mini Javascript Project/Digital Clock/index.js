let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
// BUTTONS
const playButton = document.querySelector('.play');
const resetButton = document.querySelector('.reset'); 
const pauseButton = document.querySelector('.pause');

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
pauseButton.addEventListener('click', pause);

let timeHour = 0;
let timeMinute = 0;
let timeSecond = 0;

let timerInterval = null;

function startTimer() {
    if(!timerInterval) {
        timerInterval = setInterval(() => {
        addSecond();
        updateDisplay();
        }, 1000);
    }
}

const addSecond = () => {
    timeSecond++;
    if(timeSecond >= 60) {
    addMinute();
    }
}

const addMinute = () => {
    timeSecond = 0;
    timeMinute++;
    if(timeMinute >= 60) {
        addHour();
    }
}

const addHour = () => {
    timeMinute = 0;
    timeHour++;
}

const updateDisplay = () => {
    hour.innerHTML = timeHour < 10 ? `0${timeHour}:` : `${timeHour}:`;
    minute.innerHTML =  timeMinute < 10 ? `0${timeMinute}:` : `${timeMinute}:`;
    second.innerHTML = timeSecond < 10 ? `0${timeSecond}` : timeSecond;
}

document.addEventListener("DOMContentLoaded", () => {
    updateDisplay();
});

function play() {
    if(!timerInterval) {
        startTimer();
    }
}

function reset() {
    timeHour = 0;
    timeMinute = 0;
    timeSecond = 0;
    updateDisplay();
}

function pause() {
    if(timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}