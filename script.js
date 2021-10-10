const suit = ['clubs', 'spades', 'diamonds', 'hearts'];
const denomination = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'T'];

document.write(`<div class="wrapper">`);

for (let i=0; i<denomination.length;i++){
 for (let j=0; j<suit.length; j++){

switch (denomination[i]){
case 'J':
tempDenom = 'jack';
break;
case 'Q':
tempDenom = 'queen';
break;
case 'K':
tempDenom = 'king';
break;
case 'T':
tempDenom = suit[j];
break;
default: 
tempDenom = denomination[i] ;
}

if (tempDenom.length>2){
    document.write(`		
    <div class="card card--person">
    <div class="card__info">${denomination[i]}<img src="img/${suit[j]}.svg" alt="${suit[j]}"></div>
    <img class="person" src="img/${tempDenom}.svg" alt="spades">
    <div class="card__info">${denomination[i]}<img src="img/${suit[j]}.svg" alt="${suit[j]}"></div>
    </div>
    `)
}else{
    document.write(`		
    <div class="card">
    <div class="card__info">${denomination[i]}<img src="img/${suit[j]}.svg" alt="${suit[j]}"></div>
    <div class="card__info">${denomination[i]}<img src="img/${suit[j]}.svg" alt="${suit[j]}"></div>
    </div>
    `)
}
}
}
document.write(` </div`);

