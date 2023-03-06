// Создайте декоратор spy(func), который должен возвращать обёртку, 
// которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.
//
// P.S.: Этот декоратор иногда полезен для юнит-тестирования. 
// Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.
//----------------------------------------------------------//

"use strict"

function spy(func) {
  spyWrapper.calls = []

  function spyWrapper(...args) {
    spyWrapper.calls.push(args)
    return func.apply(this, args)
  }

  return spyWrapper;
}

function work(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
