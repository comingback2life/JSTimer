const durationInput = document.querySelector('#duration');
const pauseButton = document.querySelector('#pause');
const startButton = document.querySelector('#start');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI; //perimeter of the circle
circle.setAttribute('stroke-dasharray', perimeter);
let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeReamining) {
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeReamining / duration - perimeter);
    },
    onComplete() {
        console.log('Timer is completed');
    }
});
