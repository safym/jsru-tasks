// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
//
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
//
// Все последовательности элементов должны иметь одинаковую вероятность. 
// Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., 
// с равной вероятностью каждого случая.
//----------------------------------------------------------//

let arr = [1, 2, 3];

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
