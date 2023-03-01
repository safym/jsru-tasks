// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
//
//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//     sum() возвращает сумму этих свойств.
//     mul() возвращает произведение этих свойств.
//----------------------------------------------------------//

"use strict";

//мы сделали почти класс не используя синтаксис класса, функция возвращает объект с методами и свойствами.
function Calculator() {
  return {
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    }
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );