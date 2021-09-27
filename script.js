do{
    arrayLenght = +prompt("Array Lenght (from 2 to 10)", "4");
}while(!arrayLenght || isNaN(arrayLenght) || arrayLenght <= 1 || arrayLenght >= 11)

newArray = new Array(arrayLenght);
halfArray = Math.ceil(arrayLenght/2);

for (i=0; i<halfArray; i++){
    newArray[i] = Math.round(Math.random()*20-10);
}
for (; i<arrayLenght; i++){
    do{
    newArray[i] = prompt(`Enter half array. Element ${i}`, "one");
    }while(!newArray[i] || newArray[i] == "")
}
console.log(`Array contain: ${newArray}`);

for (i=0, sum=0; i<arrayLenght; i++){
    if(!isNaN(+newArray[i])){
        sum += +newArray[i];
    }
}
console.log(`Sum: ${sum}`);



