// Класс Clock написан в функциональном стиле. 
// Перепишите его, используя современный синтаксис классов.
//---------------------------------------------------//

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
}

// Проверка
let clock = new Clock();
clock.start();

// Остановка таймера
// clock.stop();