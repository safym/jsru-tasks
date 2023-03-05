// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
//
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
//
// getSecondsToday() == 36000 // (3600 * 10)
//
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
//----------------------------------------------------------//
"use strict";

console.log(getSecondsToday())

function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0);

  const diff = now - today;
  
  return (Math.round(diff / 1000));
}