addQuestion  = prompt("Сколько будет 2+2?");
sunQuestion  = confirm("Солнце встает на востоке?");
divideQuestion  = prompt("Сколько будет 5 / 0?");
skyQuestion  = prompt("Какого цвета небо?");
universeQuestion  = prompt("Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.");
counter = 0;

switch (addQuestion){
    case "четыре":
    case "four":
    case "4":   
    counter += 10;
}
if (sunQuestion == true) {
    counter += 10;
} 
if (divideQuestion == "0" || divideQuestion =="ноль" || divideQuestion =="zero") {
    counter += 10;
} 
switch (skyQuestion){
    case "ясное":
    case "светлое":        
    case "серое":
    case "чистое":
    case "облачное":    
    counter += 10;
}
if (universeQuestion == "42") {
    counter += 10;
} 

document.write(`<p>Ваш результат: <b> ${counter}</b></p>`);