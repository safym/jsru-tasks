// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. 
// Почему? Как это исправить?
//
// let hamster = {
//   stomach: [],
//
//   eat(food) {
//     this.stomach.push(food);
//   }
// };
//
// let speedy = {
//   __proto__: hamster
// };
//
// let lazy = {
//   __proto__: hamster
// };
//
// // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple
//
// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert( lazy.stomach ); // apple
//----------------------------------------------------------//

"use strict"

let hamster = {
  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};


speedy.eat("apple");

// при вызове eat еда пушилась в найденный stomach (и он был у объекта hamster)
// например, елси добавить каждому хомяку свой живот, то метод eat будет работать корректно
console.log(speedy.stomach); 
console.log(lazy.stomach); 