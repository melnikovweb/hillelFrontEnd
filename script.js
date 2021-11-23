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

    get Size(){
        return this.size ? this.size : this.size=small;
    }
    set Size(){
        this.size = value;
    }
    get Calories(){
        
    }
    set Calories(){
        //????//
    }
    set Toppings(){

    }
    get Toppings(){

    }
    set Supplements(){

    }
    get Supplements(){
        
    }
    get Price(){
        
    }
    get Total(){
        
    }

}

let perekuson = new Burger;

perekuson.Size=HAMBURGER.sizeBurg.big;
perekuson.Toppings=HAMBURGER.toppings.chees;
perekuson.Supplements=HAMBURGER.supplements.mayonnaise;