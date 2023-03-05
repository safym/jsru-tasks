// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
//
// Например, если сейчас 23:00, то:
//
// getSecondsToTomorrow() == 3600
//
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
//----------------------------------------------------------//
"use strict";

console.log(getSecondsToTomorrow())

function getSecondsToTomorrow() {
  const now = new Date();
  const tomorrow =new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  const diff = tomorrow - now; 
  return Math.round(diff / 1000); 
}