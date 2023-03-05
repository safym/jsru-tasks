// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//
// Например:
//
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
//
// Сделайте три варианта решения:
//
//     С использованием цикла.
//     Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
//     С использованием формулы арифметической прогрессии.
//
// Пример работы вашей функции:
//
// function sumTo(n) { /*... ваш код ... */ }
//
// alert( sumTo(100) ); // 5050
//
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
//
// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
//----------------------------------------------------------//

// функция обертка для замера времени выполнения
async function checkTime(func, param) {
  let start = new Date();
  
  console.log(await func(param))
  
  let end = new Date()
  console.log(`${func.name} время выполнения: , ${end - start} мс`)
}

function sumToLoop(n) {
  let sum = 0;

  for (i = 1; i <= n; i++) {
    sum = sum + i
  }

  return sum
}

function sumToRecursion(n) {
  if (n === 0) return n;
  return n + sumToRecursion(n - 1);
}

function sumToProgression(n) {
  return ((1 + n) / 2) * n;
}

// самый быстрый варинат - арифметическая формула, так как это довольно
// простое вычисление, а для цикла и рекурсий требуется много итераций.
// второй по скорости выполнения, в зависимости от  параметров, может являться рекурсивная функция
// третьей - функция с циклом.
console.log(checkTime(sumToLoop, 100))
console.log(checkTime(sumToRecursion, 100))
console.log(checkTime(sumToProgression, 100))

// Также есть недочет рекурсивной функции, так как есть лимит стека вызовов в рекусии 
// Так, например, не получится посчитать сумму выше 11000 и выше рекурсивным методом
console.log(checkTime(sumToLoop, 11000))
console.log(checkTime(sumToRecursion, 11000)) //RangeError RangeError: Maximum call stack size exceeded
console.log(checkTime(sumToProgression, 11000))