// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
//
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
//
// Напишите функцию printList(list), которая выводит элементы списка по одному.
//
// Сделайте два варианта решения: используя цикл и через рекурсию.
//
// Как лучше: с рекурсией или без?
//----------------------------------------------------------//

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// ответ: функции в обеих формах работают достаточно быстро, но рекурсивная функция 
// скорее всего не сможет работать со списком большой вложенности (если такие, конечно, бывают)
// в целом, функции работают примерно одиаково и написаны достаточно понятно в обоих случаях

printListRecursion(list)
printListLoop(list)

function printListRecursion(list) {
  console.log(list.value)

  if (list.next === null) return;
  return printListRecursion(list.next)
}

function printListLoop(list) {
    console.log(list.value)

    let nextValue = list.next;
    while (nextValue !== null) {
      console.log(nextValue.value)
      nextValue = nextValue.next
    }
}