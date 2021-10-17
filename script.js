"use strict";
function main (a=2, b=3, c) { 
  let sumrezult = sum (a, b);

  if (typeof c ===`function`){
    let mainrezult = c(sumrezult);
    return mainrezult;  
  }
  else{
    return sumrezult;
  }

}
function sum (a, b) { 
    return a + b; 
}
function funcC (y) { 
  return y*2; 
}
console.log(main(undefined, 10));  //без аргумента "c" //12
console.log(main(undefined, 10, funcC)); //с аргументом "c" в виде функции // 12*2=24