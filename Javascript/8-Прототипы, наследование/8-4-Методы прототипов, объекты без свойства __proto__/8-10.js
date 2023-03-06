// Давайте создадим новый объект rabbit:
//
// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//   alert(this.name);
// };
//
// let rabbit = new Rabbit("Rabbit");
//
// Все эти вызовы делают одно и тоже или нет?
//
// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();
//----------------------------------------------------------//

"use strict"

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");


rabbit.sayHi(); // this = rabbit, соответсвенно вывод "Rabbit"
Rabbit.prototype.sayHi(); // this = Rabbit.prototype, вывод undefined так как у объекта нет свойства name
Object.getPrototypeOf(rabbit).sayHi();// this = Rabbit.prototype, аналогично вывод undefined
rabbit.__proto__.sayHi();// this = Rabbit.prototype, аналогично вывод undefined