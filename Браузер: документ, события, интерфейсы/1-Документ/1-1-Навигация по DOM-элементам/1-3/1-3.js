// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
//-------------------------------------------------------------------------------------------//

const table1 = document.querySelector('#table1')
setBackgroundTableLoop(table1)

const table2 = document.querySelector('#table2')
setBackgroundTable(table2)

function setBackgroundTableLoop(table) {
  const tableBody = table.firstElementChild;

  for(let i = 0; i < tableBody.children.length; i++) {
    let row = tableBody.children[i];

    for(let j = 0; j < row.children.length; j++) {
      if (i === j) {
        let cell = row.children[j]
        cell.style.backgroundColor = 'red';
      }
    }
  }
}


function setBackgroundTable(table) {
  const tableBody = table.firstElementChild;

  for(let i = 0; i < tableBody.rows.length; i++) {
    tableBody.rows[i].cells[i].style.backgroundColor = 'red';
  }
}