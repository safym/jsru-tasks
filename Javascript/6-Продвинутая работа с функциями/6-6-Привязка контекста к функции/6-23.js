// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
//
// function sayHi() {
//   alert( this.name );
// }
// sayHi.test = 5;
//
// let bound = sayHi.bind({
//   name: "Вася"
// });
//
// alert( bound.test ); // что выведет? почему?
//----------------------------------------------------------//

"use strict"

// bind привязал к функции sayHi как контекст объект {name: "Вася"}
// в нем нет свойства test, поэтому будет выведен Undefined
function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

console.log( bound.test );
