firstName = prompt("Enter first name pls").trim();
lastName = prompt("Enter last name pls").trim();
customerEmail = prompt("Enter email pls").replaceAll(' ','').toLowerCase();
birth = prompt("Enter year of birth pls").replaceAll(' ','');
date = new Date();
age = date.getFullYear() - birth;

if (customerEmail[0] == `@`) {
    customerEmail = `not valid email <b>${customerEmail}</b> (symbol @ find in first place)`;

} else if (customerEmail[customerEmail.length-1] == `@`) {
    customerEmail = `not valid email <b>${customerEmail}</b> (symbol @ find in last place)`;

} else if (customerEmail.includes("@")) { 

} else {
    customerEmail = `not valid email <b>${customerEmail}</b> (symbol @ not exist)` ;
}




document.write(firstName, lastName, customerEmail, age)