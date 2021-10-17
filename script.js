"use strict";
debugger
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
 
let days = monday.concat(tuesday);

console.log(monday);
console.log(tuesday);
console.log(days);

days.forEach(
  function(item, index){
    if (item[1]/60 >=2){
    item[1] = item[1]/60;
    item.push(item[1]*amount);
  }
    else{
      let removed = days.splice(index, 1);
    }
    console.log(item[1])
  }
);




// Запустить foreach или reduce и просумировать значение цен amount 
// Вывести все это в html



// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:

// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Оставить только те задачи, на выполнение которых нужно менее 2-х часов или 2 часа ровно.
// Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.
// Посчитать сумму, которую можно получить за выполнение всех отфильтрованных задач и вывести ее в tfoot таблицы.
// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:

// Используем только методы concat/forEach/map/filter/reduce/join (по надобности, все не нужно).

