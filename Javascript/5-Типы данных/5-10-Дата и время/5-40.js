// Напишите функцию getWeekDay(date), 
// показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
//----------------------------------------------------------//

"use strict";

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );        // "ВТ"

function getWeekDay(date) {
  let weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return weekDays[date.getDay()];
}