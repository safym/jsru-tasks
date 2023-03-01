// У нас есть объект salaries с зарплатами:
//
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
//
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//
//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
//
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
//----------------------------------------------------------//


"use strict";

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


console.log(topSalary(salaries))


function topSalary(obj) {
  let employee = Object.entries(salaries);

  let maxSalary = 0;
  let maxName = null;

  for (let i = 1; i < employee.length; i++) {
    let [name, salary] = employee[i];

    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}