// Напишите условие if для проверки, 
// что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
//----------------------------------------------------------//

"use strict";

let age = prompt('Введите возраст', '')

if (!(14 <= age && age <= 90)) {
  alert ('Возраст не в диапазоне между 14 и 90 включительно')
}  else  alert ('Возраст входит в диапазон 14 и 90 включительно')

if (age < 14 || 90 < age) {
  alert ('Возраст не в диапазоне между 14 и 90 включительно')
}  else  alert ('Возраст входит в диапазон 14 и 90 включительно')