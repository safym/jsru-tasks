// Как найти?…
//     Таблицу с id="age-table".
//     Все элементы label внутри этой таблицы (их три).
//     Первый td в этой таблице (со словом «Age»).
//     Форму form с именем name="search".
//     Первый input в этой форме.
//     Последний input в этой форме.
//----------------------------------------------------------//

const table = document.getElementById('age-table') 
const tableLabels = table.querySelectorAll('label')
const firstTableTD = table.querySelector('td')
const form = document.getElementsByName('search')[0]

const formInputs = form.querySelectorAll('input')
const formFirstInput = formInputs[0]
const formLastInput = formInputs[formInputs.length - 1]


console.log({table, tableLabels, firstTableTD, form, formFirstInput, formLastInput})

