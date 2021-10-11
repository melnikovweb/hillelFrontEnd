function main (a='2', b='3', c) { 
debugger
  sumrezult = sum(a, b);
  crezult = c(sumrezult);
  console.log(`sum =${crezult}`)
}

function sum (a, b) { 
    debugger
    return a + b; 
}


function funcC (y, x=100) { 
    debugger
    return y + x; 
}


debugger
main(undefined, 10, funcC);

sum();


// Перепишите функцию main следующим образом:


// Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum, и в качестве входящего значение принимает результат работы функции sum.
// Функция main должна возвращать результат функции аргумента c, если он есть, либо результат функции sum.