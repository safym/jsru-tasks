// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
//----------------------------------------------------------//
"use strict";

const user = {
  name: "Василий Иванович",
  age: 35
};

const userCopy = JSON.parse(JSON.stringify(user));