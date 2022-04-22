function pizzaOven(crustType, sauceType, cheese, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheese = cheese;
  pizza.toppings = toppings;
  return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", [
  "pepperoni",
  "sausage",
]);
console.log(p1);
var p2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log(p2);
var p3 = pizzaOven(
  "regular",
  "tomato",
  ["cheddar", "parmigiano"],
  ["peperoni", "crevettes", "caviar"]
);
console.log(p3);

var p4 = pizzaOven(
  "fine",
  "blanche",
  ["demi sel", "gruyere"],
  ["ananas", "anchois", "capres"]
);
console.log(p4);
