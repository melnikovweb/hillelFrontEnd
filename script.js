let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function catName (name, category){
	for (key in name){
		name[key].category = category;
	}
}

catName(kitchenProducts, "kitchen");
catName(devicesProducts, "devices");
catName(cosmeticsProducts, "cosmetics");

let allProducts = kitchenProducts.concat(devicesProducts, cosmeticsProducts);

class Product{
	constructor(category, type, price){
		this.category = category;
		this.type = type;
		this.price = price;
	}
	
	render(){
		let price= (Array.isArray(this.price))? this.price.join(`-`):this.price;
		document.write(`<tr>
		<td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
		<td>${this.type}</td>
		<td>${price} USD</td>
	</tr>`)
	}
}

document.write(`<table border="1">
        <thead>
               <tr>
               <th>Image</th>
               <th>Name</th>
               <th>Price</th>
      			</tr>
    	</thead>
   		 <tbody>`);

		allProducts.map(prodObj=>new Product(prodObj.category, prodObj.type, prodObj.price)) //Не уверен что тут правильно каждый раз создавать новый объект, но работает без ошибок
		.map(prodObj=>prodObj.render())

document.write(` </tbody></table>`);

















