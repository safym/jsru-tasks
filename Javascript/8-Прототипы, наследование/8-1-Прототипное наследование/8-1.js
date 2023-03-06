// В приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?
//
// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };
//
// alert( rabbit.jumps ); // ? (1)
// delete rabbit.jumps;
// alert( rabbit.jumps ); // ? (2)
// delete animal.jumps;
// alert( rabbit.jumps ); // ? (3)
// Должно быть 3 ответа.
//----------------------------------------------------------//

"use strict"

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // true (rabbit.jumps == true) (1)
delete rabbit.jumps;
alert( rabbit.jumps ); // null после удаления rabbit.jumps ищем в прототипе (animal.jumps == null) (2)
delete animal.jumps;
alert( rabbit.jumps ); // undefined после удаления в прототипе (3)