// У нас есть дерево, структурированное как вложенные списки ul/li.
//
// Напишите код, который выведет каждый элемент списка <li>:
//     Какой в нём текст (без поддерева) ?
//     Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
//--------------------------------------------------------------------------------//

const list = document.querySelector('ul');

showChildrenCount(list)

function showChildrenCount(list) {
  for (let item of list.querySelectorAll('li')) {
    let itemData = deleteReturns(item.firstChild.data);
    let liChildCount = item.querySelectorAll('li').length

    alert(`${itemData}: ${liChildCount}`)
  }
}

function deleteReturns(string) {
  return string.replace(/\r|\n/g, '').trim()
}