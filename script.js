document.write(`
1.Создать массив А размерностью n. Заполнить случайными числами в любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436]
    1.1.проверить все числа на простоту, и найденные простые числа сохранить в новый массив B.
    1.2.в полученному массиве B найти максимальное и минимальное число.
2.Создать новый массив А размерностью n. Элементы массива между min -- max записать в новый массив B.
3.Создать новый массив A размерностью n. В нем найти и поменять местами min и max.");`);



do{
    arrayLenght = +prompt("Array Lenght (from 10 to 20)", "15");
}while(!arrayLenght || isNaN(arrayLenght) || arrayLenght <= 9 || arrayLenght >= 21)


ArrayA = new Array(arrayLenght);
ArrayB = new Array();

newloop:for (i=0; i<arrayLenght; i++){
    ArrayA[i] = Math.round(Math.random()*100);

    for(j=2; j<ArrayA[i]; j++){
    if (ArrayA[i]%j ==0 ){
        continue newloop;
    }
}
ArrayB.push(ArrayA[i]);
}
console.log(`Array A contain: ${ArrayA}`);
console.log(`Array B contain: ${ArrayB}`);

debugger


minIndexB = ArrayB.indexOf(Math.min(...ArrayB));
maxIndexB = ArrayB.indexOf(Math.max(...ArrayB));














// do{
//     arrayLenght = +prompt("Array Lenght (from 2 to 10)", "4");
// }while(!arrayLenght || isNaN(arrayLenght) || arrayLenght <= 1 || arrayLenght >= 11)

// newArray = new Array(arrayLenght);
// halfArray = Math.ceil(arrayLenght/2);

// for (i=0; i<halfArray; i++){
//     newArray[i] = Math.round(Math.random()*20-10);
// }
// for (; i<arrayLenght; i++){
//     do{
//     newArray[i] = prompt(`Enter half array. Element ${i}`, "one");
//     }while(!newArray[i] || newArray[i] == "")
// }
// console.log(`Array contain: ${newArray}`);

// for (i=0, sum=0; i<arrayLenght; i++){
//     if(!isNaN(+newArray[i])){
//         sum += +newArray[i];
//     }
// }
// console.log(`Sum: ${sum}`);






// debugger
// do{
//     arrayLenght = +prompt("Array Lenght (from 2 to 10)", "4");
// }while(!arrayLenght || isNaN(arrayLenght) || arrayLenght <= 1 || arrayLenght >= 11)
// do{
//     arrayH = +prompt("Array H (from 2 to 10)", "4");
// }while(!arrayH || isNaN(arrayH) || arrayH <= 1 || arrayH >= 11)

// newArray = new Array(arrayLenght);
// bigArray = new Array(arrayH);
// for(i=0; i<arrayH; i++){
//     bigArray[i] = newArray;
// }

// if(arrayLenght%2 == 0){
// for(i=0; i < arrayLenght ;i+=2){
// newArray[i] ="*";}
// for(j=1; j < arrayLenght ;j+=2){
// newArray[j] ="#"   
// }
// }else{ 
// for(i=1; i < arrayLenght ;i+=2){
// newArray[i] ="*";}
// for(j=0; j < arrayLenght ;j+=2){
// newArray[j] ="#"   
// }   
// }

// console.log(newArray);
// console.log(bigArray);

