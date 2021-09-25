sum=0;
do{
    operator = prompt("Что хотите сделать? (+ - / *)", "+");
}while(operator !="+" && operator !="-" && operator !="/" && operator !="*")

do{
    operand = +prompt("Cколько операндов должно быть?(от 2 до 6)", "3");
}while(operand<=1 || operand>=7 || isNaN(operand))

for (i=1; operand>= i; i++){

do{
InnerOperand = +prompt(`Введите ${i} операнд`);
}while(!InnerOperand || isNaN(operand))

switch(operator){
case "+":
    sum+=InnerOperand;
    break;
case "*":
    if(i==1){
    sum=InnerOperand;  
    }else{   
    sum*=InnerOperand;  
    }
    break; 
case "-":
    if(i==1){
    sum=InnerOperand;  
    }else{
    sum-=InnerOperand; 
    }
    break; 
case "/":
    if(i==1){
    sum=InnerOperand;  
    }else{
    sum/=InnerOperand; 
    }
    break;     
}
console.log(`операнд ${i} = ${InnerOperand}`);
console.log(sum);
}
alert(`Результат операции ("${operator}") выполненный над ${operand} операндами, равен: ${sum}`)
