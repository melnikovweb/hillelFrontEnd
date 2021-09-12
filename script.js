firstName = prompt("Enter first name pls").trim(); 
lastName = prompt("Enter last name pls").trim();
customerEmail = prompt("Enter email pls").replaceAll(' ','').toLowerCase();
birth = prompt("Enter year of birth pls").replaceAll(' ','');
date = new Date().getFullYear();

//Проверка даты рождения
if (+date>birth){
    age = date - birth;
} else{
    age = "Вы еще не родились"
}

//Проверка email
if (!customerEmail.includes(`@`)) {
    customerEmail = `not valid email <b>${customerEmail}</b> (symbol @ not exist)` ;
} else if (customerEmail[0] == `@`) {
    customerEmail = `not valid email <b>${customerEmail}</b> (symbol @ find in first place)`;
} else if (customerEmail[customerEmail.length-1] == `@`) { 
    customerEmail = `not valid email <b>${customerEmail}</b> (symbol @ find in last place)`;
} 

document.write(`<ul class="user">
		<li>Name: <b>${firstName} ${lastName}</b></li>
		<li>Email: <b>${customerEmail}</b></li>
		<li>Age: <b>${age}</b></li>
	</ul>`);