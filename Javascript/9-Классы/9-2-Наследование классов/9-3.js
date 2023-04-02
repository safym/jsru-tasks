// Создайте новый класс ExtendedClock, который будет наследоваться от Clock 
// и добавьте параметр precision – количество миллисекунд между «тиками». 
// Установите значение в 1000 (1 секунда) по умолчанию.
//-----------------------------------------------//

class Clock {
    render() {
        let date = new Date();

        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;

        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let result = `${hours}:${minutes}:${seconds}`;

        console.log(result);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
};

class ExtendedClock extends Clock {
    constructor(precision) {
        super();
        this.precision = precision || 1000; 
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
};

let extClock = new ExtendedClock(500);
extClock.start();