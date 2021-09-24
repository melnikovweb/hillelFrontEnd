do{
    operator = prompt("Что хотите сделать? (+ - / *)", "+");
}while(operator !="+" && operator !="-" && operator !="/" && operator !="*")

do{
    operand = prompt("Cколько операндов должно быть?");
}while(operand<=1 || operand>=7)
operand = +operand;
sum=0;


for (i=1; operand>= i; i++){

operandin = +prompt(`Введите ${i} операнд`);


switch(operator){
case "+":
    sum+=operandin;
    break;
case "*":
    sum*=operandin;  
    break; 
case "-":
    if(i==1){
    sum=operandin;  
    }else{
    sum-=operandin; 
    }
    break; 
case "/":
    if(i==1){
    sum=operandin;  
    }else{
    sum/=operandin; 
    }
    break;     
}
console.log(`операнд ${i} = ${operandin}`);
console.log(sum);
}
alert(`Результат операции ("${operator}") выполненный над ${operand} операндами, равен: ${sum}`)
