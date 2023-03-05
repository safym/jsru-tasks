// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//
// Сделайте два варианта решения.
//
//     Используя setInterval.
//     Используя рекурсивный setTimeout.
//----------------------------------------------------------//

function printNumbersInterval(from, to) {
  const interval = setInterval(() => {
    console.log(from++);
    from === to && clearInterval(interval)
    },1000)
}

function printNumbersTimeout(from, to) {
  let timerId = setTimeout(function tick() {
    from <= to ? console.log(from++) : clearInterval(timerId);
    timerId = setTimeout(tick, 1000);
    }, 1000);
}

printNumbersInterval(5, 10);
printNumbersTimeout(5, 10);