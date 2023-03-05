// Вывод односвязного списка в обратном порядке
//
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
//
// Сделайте два решения: с использованием цикла и через рекурсию.
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

printReversListRecursion(list)
printReversListLoop(list)

function printReversListRecursion(list) {
  if (list.next) printReversListRecursion(list.next);
  console.log(list.value)
}

function printReversListLoop(list) {
  let array = [];

  let nextValue = list;
  while (nextValue !== null) {
    array.push(nextValue.value)
    nextValue = nextValue.next
  }

  let reverseArray = array.reverse()

  for (let item of reverseArray) {
    console.log(item)
  }
}