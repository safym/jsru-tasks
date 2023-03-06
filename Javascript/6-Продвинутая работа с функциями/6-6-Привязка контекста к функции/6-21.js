// Что выведет функция?
//
// function f() {
//   alert( this ); // ?
// }
//
// let user = {
//   g: f.bind(null)
// };
//
// user.g();
//----------------------------------------------------------//

"use strict"

//ответ: this = null. В методе g() мы привязали к f контекст null.
function f() {
  console.log( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();
