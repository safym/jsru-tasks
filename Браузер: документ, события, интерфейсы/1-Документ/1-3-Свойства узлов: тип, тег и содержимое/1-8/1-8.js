// Объектом какого класса является document?
//
// Какое место он занимает в DOM-иерархии?
//
// Наследует ли он от Node или от Element, или может от HTMLElement?
//--------------------------------------------------------------------------------------//

// класс узла
alert(document.constructor.name)

// место в иерархии (самое первое)
console.dir(document.parentNode) // отсутсвуюь родительские узлы
console.dir(document.childNodes) // среди дочерних - DOCTYPE и HTML

// наследование
alert(document instanceof Node) //true
alert(document instanceof Element) //false
alert(document instanceof HTMLElement) //false

