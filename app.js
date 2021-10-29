const durationInput = document.querySelector('#duration');
const pauseButton = document.querySelector('#pause');
const startButton = document.querySelector('#start');

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log('Timer Started');
    },
    onTick() {
        console.log('Time has ticked down');
    },
    onComplete() {
        console.log('Timer is completed');
    }
});
