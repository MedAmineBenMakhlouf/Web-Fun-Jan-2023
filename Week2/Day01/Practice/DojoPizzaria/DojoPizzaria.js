var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);

function pizzaOven(crustType, sauceType, cheeses, toppings) 
{
    var pizza = 
    {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
    return pizza;
}
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("thin crust", "barbecue", ["cheddar"], ["chicken", "pineapple"]);
console.log(pizza3);

var pizza4 = pizzaOven("gluten-free", "pesto", ["goat cheese"], ["spinach", "tomatoes", "garlic"]);
console.log(pizza4);

function randomPizza() {
    var crustTypes = ["deep dish", "hand tossed", "thin crust", "gluten-free"];
    var sauceTypes = ["traditional", "marinara", "barbecue", "pesto"];
    var cheeseOptions = [["mozzarella"], ["mozzarella", "feta"], ["cheddar"], ["goat cheese"]];
    var toppingOptions = [["pepperoni", "sausage"], ["mushrooms", "olives", "onions"], ["chicken", "pineapple"], ["spinach", "tomatoes", "garlic"]];
    var randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    var randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    var randomCheeses = cheeseOptions[Math.floor(Math.random() * cheeseOptions.length)];
    var randomToppings = toppingOptions[Math.floor(Math.random() * toppingOptions.length)];

    var randomPizza = pizzaOven(randomCrust, randomSauce, randomCheeses, randomToppings);
    return randomPizza;
}
var randomPizza1 = randomPizza();
console.log("this is a random Pizza",randomPizza1);

var randomPizza2 = randomPizza();
console.log("this is a Random Pizza",randomPizza2);
