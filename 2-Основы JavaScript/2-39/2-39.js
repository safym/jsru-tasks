// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// 
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// 
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// 
// Запустить демо
// 
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
//----------------------------------------------------------//

let x = prompt("Введите x", '');
let n = prompt("Введите n", '');

alert(pow(x, n))

function pow(x, n) {
  if (n < 1) {
    return `${n} не натуральное число`;
  } else {

    let result = x;

    for (let i = 1; i < n; i++) {
      result *= x;
    }
    
    return result;
  }
}