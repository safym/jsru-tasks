// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:
//
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }
//
// Будет ли эта функция работать как-то иначе, если убрать else?
//
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }
//
// Есть ли хоть одно отличие в поведении этого варианта?
//----------------------------------------------------------//

// Ответ: Обе функции сработают одинаково, во втором случае, когда возвращается true, 
// выполнение функции сразу останавливается и код дальше не выполняется.
// Такой код выглядит более читабельным, потому что все проверки, которые прерывают выполнение функции,
// можно вынести наверх.

"use strict";

function checkAge1(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}

