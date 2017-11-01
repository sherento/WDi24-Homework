// CASH REGISTER

/*Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart*/

//global scope variables

//create shopping cart as object with items name: price

totalPrice = 0;

const shoppingCart = {
  apples: 4.5,
  bananas: 5,
  nutella: 3,
  shampoo: 20,
  meat: 35
};

//create function with for in loop to access values inside keys
const sum = function (obj) {
    for (let key in shoppingCart) {
      console.log(shoppingCart[key]);
      totalPrice += shoppingCart[key];
  }
  console.log(totalPrice);
}

//Can't figure out how to sum the keys Ive accessed together


console.log(sum(shoppingCart));


//return Object.values(shoppingCart); //this also returns values in the console but can't figure out how to add them together
