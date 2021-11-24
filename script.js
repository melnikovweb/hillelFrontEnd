const HAMBURGER = {
    sizeBurg: {
        small: {
            price: 5,
            calories: 20
        },
        big: {
            price: 10,
            calories: 40
        }
    },

    toppings: {
        chees: {
            price: 1,
            calories: 20
        },
        salad: {
            price: 2,
            calories: 5
        },
        potato: {
            price: 1.5,
            calories: 10
        }
    },

    supplements: {
        seasoning: {
            price: 1.5,
            calories: 0
        },
        mayonnaise: {
            price: 2,
            calories: 5 
        }
    }
}

class Burger {

    set Size(value){
        this.size = value;
    }
    set Toppings(value){
        this.toppings = value;
    }
    set Supplements(value){
    	this.supplements = value; 
    }


    get Size(){
        return this.size ? this.size : this.size=HAMBURGER.sizeBurg.small;
    }
    get Toppings(){
        return this.toppings ? this.toppings : this.toppings=0;
    }
    get Supplements(){
        return this.supplements ? this.supplements : this.supplements=0;
    }


    get Calories(){
    	let sumSupplements = 0;
    	if (this.supplements)
    	if (Array.isArray(this.supplements)){
    		for (let i in this.supplements) {
 				sumSupplements+=this.supplements[i].calories;
			}	
		}else{
			sumSupplements = this.supplements.calories
		}
		let sumToppings = this.toppings ? this.toppings : 0
        return this.calories = this.size.calories + sumToppings + sumSupplements;
   	 }

    get Price(){
    	let sumSupplements = 0;
    	if (this.supplements)
    	if (Array.isArray(this.supplements)){
    		for (let i in this.supplements) {
 				sumSupplements+=this.supplements[i].price;
			}	
		}else{
			sumSupplements = this.supplements.price
		}
		
		let sumToppings = this.toppings ? this.toppings : 0

        return this.price = this.size.price + sumToppings + sumSupplements;
        
    }

    get Total(){
      return `Price: ${this.Price}, Calories: ${this.Calories}`
    }

}

let perekuson1 = new Burger;
perekuson1.Size=HAMBURGER.sizeBurg.big;
perekuson1.Toppings=HAMBURGER.toppings.chees;
perekuson1.Supplements=[HAMBURGER.supplements.mayonnaise, HAMBURGER.supplements.seasoning];

console.log(`Burger 1 //////////////////////////////////`)
console.log(perekuson1)
console.log(perekuson1.Total)

let perekuson2 = new Burger;
perekuson2.Size=HAMBURGER.sizeBurg.big;

console.log(`Burger 2 //////////////////////////////////`)
console.log(perekuson2)
console.log(perekuson2.Total)
