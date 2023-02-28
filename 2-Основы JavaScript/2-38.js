// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
//
// Пример вызовов:
//
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
//----------------------------------------------------------//

function getMinimun(a, b) {
  return (a < b) ? a : b
}

console.log(getMinimun(2, 5) == 2)
console.log(getMinimun(3, -1) == -1)
console.log(getMinimun(1, 1) == 1)