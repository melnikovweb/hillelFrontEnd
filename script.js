price = 0;
burger = prompt("Hamburger or Cheeseburger");

if (!burger){
     document.write(`you have not chosen a burger - please reload the page and try again`);
}else{
if (burger.trim().toLocaleLowerCase() == "hamburger") {
    price += 10;
}else if (burger.trim().toLocaleLowerCase() == "cheeseburger") {
    price += 15;
    cheese = confirm("Would you like double cheese?");
    if(cheese){
        price += 5;
        cheese = " with double cheese"
    }
} else{
    document.write(`you entered the name of the burger incorrectly, please try again`);
}
potato = confirm("Would you like potato?");

if (potato) { 
    fries = prompt("Choose fries size: small/middle/big");
    if(fries){
    if (fries.trim().toLocaleLowerCase() == "small") price += 10;
    if (fries.trim().toLocaleLowerCase() == "middle") price += 15;
    if (fries.trim().toLocaleLowerCase() == "big") price += 20;
    }else{
        fries = "small";
        price += 10;
    }
} 

sauce = confirm("Would you like sauce?");
if (sauce) { 
    typeofSauce = prompt("Choose sauce: ketchup/mayonnaise");
    if (!typeofSauce) {
    typeofSauce = "ketchup";
}
    price += 10;
} 

document.write(`<h2>Your order:</h2><ul>`);

if(burger) {
document.write(`<li>Bulka 🍔: ${burger}`);
if (burger.trim().toLocaleLowerCase() == "cheeseburger" && cheese){
    document.write(`${cheese}</li>`);
}else{
    document.write(`</li>`);
}}
if(potato) {
document.write(`<li>Potato 🍟: ${fries} </li>`);
}
if(sauce) {
document.write(`<li>Sauce 🧂:  ${typeofSauce}</li>`);
}
document.write(`</ul>
    <p>Price: ${price} </p>
`);

}