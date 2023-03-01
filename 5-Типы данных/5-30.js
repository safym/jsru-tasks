// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, 
// применить метод .push.
//
// Но это не выходит:
//
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
//----------------------------------------------------------//


"use strict";

// ответ: map.keys() возвращает объект map iterator, чтобы работать с ним как с массивом 
// нужно использовать: Array.from(map.keys());
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");