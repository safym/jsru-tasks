// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?
// Каким будет результат?
//----------------------------------------------------------//

"use strict";

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref );

// ответ: ошибка, this в данном контексте принимает значение this функции makeUser. 
//        чтобы это решить, можно создать метод ref() возвращаемого объекта, тогда внутри метода ключевое слово this 
//        будет ссылаться на this ref()