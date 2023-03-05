// Возможно ли создать функции A и B, чтобы new A() == new B()?
//
// function A() { ... }
// function B() { ... }
//
// let a = new A();
// let b = new B();
//
// alert( a == b ); // true
//
// Если да – приведите пример вашего кода.
//----------------------------------------------------------//

"use strict";


// ключевое слово new возвращает this возвращаемого функцией объекта, поэтому можно использовать один 
// определенный вне функции объект для return в функциях. В результате 'a' и 'b' ссылаются на один и то те объект object
const object = {};

function A() { return object }
function B() { return object }

let a = new A();
let b = new B();

console.log( a == object ); // true

