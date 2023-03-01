// Ввод числового значения
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». 
// В этом случае функция должна вернуть null.
//----------------------------------------------------------//

"use strict";

function readNumber() {
  let number;

  do {
    number = prompt("Введите числовое значение", 0);
  } while ( !isFinite(number) );

  if (number === null || number === '') return null;

  return +number;
}

alert(`Результат: ${readNumber()}`);