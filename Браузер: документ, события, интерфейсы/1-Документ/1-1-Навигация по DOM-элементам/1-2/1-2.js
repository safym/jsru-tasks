// Если elem – произвольный узел DOM-элемента…
//     Правда, что elem.lastChild.nextSibling всегда равен null?
//     Правда, что elem.children[0].previousSibling всегда равен null ?
//----------------------------------------------------------//

const elem1 = document.body.children[2];

// elem.lastChild.nextSibling всегда будет равно null - Правда
console.log(elem1.lastChild.nextSibling)
// elem.lastChild.nextSibling всегда будет равно null - Неправда, 
// потому что children выбирает все узлы элементы, а перед первым узлом-элементом может быть просто узел 
// с комментарием иили текстом
console.log(elem1.children[0].previousSibling)

// если у elem нет потомков то в обоих случаях будет ошибка
const elem2 = document.body.children[0];

console.log(elem2.lastChild.nextSibling)
console.log(elem2.children[0].previousSibling)