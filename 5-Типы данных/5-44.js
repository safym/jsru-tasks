// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//
//     Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//     В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//     В противном случае, если меньше часа, вывести "m мин. назад".
//     В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
//----------------------------------------------------------//
"use strict";

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
console.log(formatDate(new Date(new Date - 86400 * 1000))); // вчерашняя дата вроде 31.12.2016, 20:00

function formatDate(date) {
  let diffMs = Date.now() - date;

  switch (true) {
    case diffMs < 1000:
      return `прямо сейчас`;

    case diffMs < 1000 * 60:
      return `${ Math.floor(diffMs / 1000) } сек. назад`;

    case diffMs < 1000 * 60 * 60:
      return `${ Math.floor(diffMs / 60 / 1000) } мин. назад`;

    default:
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let hour = date.getHours();
      let min = date.getMinutes();

      return `${day}.${month}.${year} ${hour}:${min}`
  }
}