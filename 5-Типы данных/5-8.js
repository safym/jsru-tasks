// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";
//----------------------------------------------------------//

function ucFirst(str) {
  let result = str.charAt(0).toUpperCase() + str.slice(1);

  return result;
}

console.log(ucFirst("привет"));