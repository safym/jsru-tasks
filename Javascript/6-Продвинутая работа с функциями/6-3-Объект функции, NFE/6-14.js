// Напишите функцию sum, которая бы работала следующим образом:
//
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
//
// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.
//----------------------------------------------------------//

function sum(a) {
  let currentSum = a;

  function add(b) {
    currentSum += b;
    return add;
  }

  add.toString = function () {
    return currentSum;
  };

  return add
}

console.log( String(sum(1)(2)) ) // == 3; // 1 + 2
console.log( String(sum(1)(2)(3)) ) // == 6; // 1 + 2 + 3
console.log( String(sum(5)(-1)(2)) ) // == 6
console.log( String(sum(6)(-1)(-2)(-3)) ) // == 0
console.log( String(sum(0)(1)(2)(3)(4)(5)) ) // == 15