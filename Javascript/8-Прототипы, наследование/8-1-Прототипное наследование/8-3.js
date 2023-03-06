// Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
//
// let animal = {
//   eat() {
//     this.full = true;
//   }
// };
//
// let rabbit = {
//   __proto__: animal
// };
//
// rabbit.eat();
//----------------------------------------------------------//

"use strict"

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};


// после вызова full будет у rabbit, так как eat() выполняется в контексте rabbit (перед точкой)
rabbit.eat();