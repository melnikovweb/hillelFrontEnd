debugger
do{
    first = +prompt("Enter a", "4");
}while(!first || isNaN(first))
do{
    second = +prompt(`Enter b (must be more than ${first})`, "22");
}while(!second || isNaN(second) || first>=second)
do{
    iterator = +prompt(`Enter iterator(must be less than ${second-first})`, "4");
}while(!iterator || isNaN(iterator) || second-first<iterator)

for(i=first, sum=0; second>=i ; i+=iterator){
factorial=1;

for(j=1; i>=j; j++){
factorial*=j;
}

console.log(`Фактоиал числа ${i} равен: ${factorial}`);
sum+=factorial;
}
console.log(`Сумма фактоиалов ${sum}`);

