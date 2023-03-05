// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
//
// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?
//
// function makeCounter() {
//   let count = 0;
//
//   return function() {
//     return count++;
//   };
// }
//
// let counter = makeCounter();
// let counter2 = makeCounter();
//
// alert( counter() ); // 0
// alert( counter() ); // 1
//
// alert( counter2() ); // ?
// alert( counter2() ); // ?
//----------------------------------------------------------//

// ответ: для counter2 выведется 0 и 1, как и для counter1, потому что
// у данных счетчиков независимые внешние лексические окружения