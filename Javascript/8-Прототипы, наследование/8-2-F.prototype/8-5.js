// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
// Сначала у нас есть такой код:
//
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
//
// let rabbit = new Rabbit();
//
// alert( rabbit.eats ); // true
//----------------------------------------------------------//

"use strict"

// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
function Rabbit1() {}
Rabbit1.prototype = {
  eats: true
};

let rabbit1 = new Rabbit1();
Rabbit1.prototype = {};
console.log( rabbit1.eats ); // true (объект уже создан по предыдущему прототипу)

// …А если код такой (заменили одну строчку)?
function Rabbit2() {}
Rabbit2.prototype = {
  eats: true
};

let rabbit2 = new Rabbit2();
Rabbit2.prototype.eats = false;
console.log( rabbit2.eats ); // false (так как объект-переменная - это ссылка на объект, изменения в объекте отражаются везде где указан объект)

// Или такой (заменили одну строчку)?
function Rabbit3() {}
Rabbit3.prototype = {
  eats: true
};

let rabbit3 = new Rabbit3();
delete rabbit3.eats;
console.log( rabbit3.eats ); // true (delete rabbit3.eats ничего не удалит и прототип останется неизменным)

// Или, наконец, такой:
function Rabbit4() {}
Rabbit4.prototype = {
  eats: true
};

let rabbit4 = new Rabbit4();
delete Rabbit4.prototype.eats;
console.log( rabbit4.eats ); // undefined (delete Rabbit4.prototype.eats удалить свойство из прототипа)