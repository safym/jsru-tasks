// У нас есть объект, в котором хранятся зарплаты нашей команды:
//
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.
//----------------------------------------------------------//

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

console.log(getSumSalaries(salaries))

function getSumSalaries(objSalaries) {
  let sum = 0;

  for (let key in objSalaries) {
    sum += objSalaries[key]
  }

  return sum;
}

