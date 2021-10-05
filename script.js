//11111111111111111
console.log(`Task 1 //////`);

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

minIndexB = Math.min(...ArrayB);
maxIndexB = Math.max(...ArrayB);

console.log(`Array B min: ${minIndexB}, max: ${maxIndexB}`);

//222222222222222222
console.log(`Task 2 //////`);

do{
    arrayLenght = +prompt("Array Lenght (from 10 to 20)", "15");
}while(!arrayLenght || isNaN(arrayLenght) || arrayLenght <= 9 || arrayLenght >= 21)

ArrayA = new Array(arrayLenght);
ArrayB = new Array();

for (i=0; i<arrayLenght; i++){
    ArrayA[i] = Math.round(Math.random()*100);
}
minIndexA = ArrayA.indexOf(Math.min(...ArrayA));
maxIndexA = ArrayA.indexOf(Math.max(...ArrayA));

console.log(`Array A min: ${minIndexA}, max: ${maxIndexA}`);
if (minIndexA>maxIndexA){
    tempMinI = minIndexA;
    minIndexA = maxIndexA;
    maxIndexA = tempMinI;
    console.log(`Array A min: ${minIndexA}, max: ${maxIndexA} //reverse`);
}
for (minIndexA; minIndexA<maxIndexA+1; minIndexA++){  
    ArrayB.push(ArrayA[minIndexA]);
}

console.log(`Array A contain: ${ArrayA}`);
console.log(`Array B contain: ${ArrayB}`);



//333333333333333333333333
console.log(`Task 3 //////`);

do{
    arrayLenght = +prompt("Array Lenght (from 10 to 20)", "15");
}while(!arrayLenght || isNaN(arrayLenght) || arrayLenght <= 9 || arrayLenght >= 21)

ArrayA = new Array(arrayLenght);

for (i=0; i<arrayLenght; i++){
    ArrayA[i] = Math.round(Math.random()*100);
}

minIndexA = ArrayA.indexOf(Math.min(...ArrayA));
maxIndexA = ArrayA.indexOf(Math.max(...ArrayA));

console.log(`Array A min: ${minIndexA}, max: ${maxIndexA}`);
console.log(`Array A contain: ${ArrayA}`);
tempMinI = ArrayA[minIndexA];
ArrayA[minIndexA] = ArrayA[maxIndexA];
ArrayA[maxIndexA] = tempMinI;

console.log(`New Array A contain: ${ArrayA}`);

