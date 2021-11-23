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
        return this.toppings ? this.toppings : this.toppings=HAMBURGER.toppings.chees;
    }
    get Supplements(){
        return this.supplements ? this.supplements : this.supplements=HAMBURGER.supplements.seasoning;
    }


    get Calories(){
        return this.size.calories + this.toppings.calories + this.supplements.calories
    }
    get Price(){
        return this.size.price + this.toppings.price + this.supplements.price
    }
    get Total(){
        
    }

}

let perekuson = new Burger;

perekuson.Size=HAMBURGER.sizeBurg.big;
perekuson.Toppings=HAMBURGER.toppings.chees;
perekuson.Supplements=HAMBURGER.supplements.mayonnaise;

console.log(perekuson)
console.log(perekuson.Price)
console.log(perekuson.Calories)