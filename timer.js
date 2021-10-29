class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.startButton.addEventListener('click', this.start); //adding an eveent listener for click and invoking the start function
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => { //defining start function with the class property syntax
        if (this.onStart) {
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 1000); //1000 ms = 1 s , function is this.tick
    };
    pause = () => {
        clearInterval(this.interval);
    };
    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            //the value of timeReamining is coming from the getter
            this.timeRemaining = this.timeRemaining - 1; //provides the value of time to the setter defined
            if (this.onTick) {
                this.onTick();
            }
        }


    };
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time) {
        this.durationInput.value = time;

    }
}