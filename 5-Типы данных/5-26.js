// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
//----------------------------------------------------------//

function unique(arr) {
  let result = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O