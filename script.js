


debugger
do{
    first = +prompt("Enter a", "5");
}while(!first || isNaN(first))

do{
    second = +prompt("Enter b", "23");
}while(!second || isNaN(second) || first>second)

do{
    iterator = +prompt("Enter iterator", "2");
}while(!iterator || isNaN(iterator) || second<iterator)

for(i=first; second>i ; i+=iterator){
console.log(i);

}


