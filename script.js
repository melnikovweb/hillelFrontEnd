"use strict";
let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];
let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];
Array.prototype.heroesRender = function(brand) {
 let brandName = brand === "marvel" ? "marvel" : "dc";
 document.write(`<table border=1>
 <thead>
   <tr>
     <th>Name</th>
     <th>Icon</th>
   </tr>
 </thead>
 <tbody>`)
 
  this.forEach(function(item) {
    document.write(`<tr>
     <td>${item.name}</td>
     <td><img src="images/${brandName}/${item.name.toLowerCase().replaceAll(' ', '')}.svg">
     </td>
   </tr>`) 

});
document.write(`	
</tbody>
</table>`)
}

let brand = prompt("marvel or dc?").toLowerCase();
while(brand !="marvel" && brand !="dc"){
  brand = prompt(`Not (${brand}) - marvel or dc?`).toLowerCase();
}

if (brand === "marvel"){
  marvelHeroes.heroesRender(brand);
}else{
  dcHeroes.heroesRender(brand);
}