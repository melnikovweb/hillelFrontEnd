"use strict";
let amount = 100;
let monday = [
  ['Write a tutorial',360],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',60]
];
 
let days = monday.concat(tuesday); //решил не делать функцию копирования масива так как небыло задачи сохранить исходные масивы
let newTasks = new Array;
let sum = new Number;

days.forEach(
  function(item){
    if (item[1]/60 <=2){
    newTasks.push([item[0], item[1]/60, item[1]/60*amount]);
    sum+= item[1]/60*amount;
  }
  });
document.write(`<table border=1><tfoot>Sum of task amounts: ${sum}</tfoot`);
    for(let i=0; i<=newTasks.length-1; i++){
      document.write(`<tr><td>Task name:${newTasks[i][0]}</td>
        <td>Taks duration: ${newTasks[i][1]} hours</td>
        <td>Task amount: ${newTasks[i][2]}$ </td></tr> `);
    }
document.write(`</table>`);
