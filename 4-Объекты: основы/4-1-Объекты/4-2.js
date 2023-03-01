// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//----------------------------------------------------------//

"use strict";

function isEmpty(obj) {
  const length = Object.keys(obj).length
  return (length === 0) 
}

let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false