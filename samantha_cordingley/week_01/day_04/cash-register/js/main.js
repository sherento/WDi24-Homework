// CASH REGISTER

/*Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart*/

//global scope variables

const cartForParty = [
  {name: "banana", price: 1.25},
  {name: "handkerchief", price: .99},
  {name: "Tshirt", price: 25.01},
  {name: "apple", price: 0.60},
  {name: "nalgene", price: 10.34},
  {name: "proteinShake", price: 22.36}
];


const cashRegister = function (item) {
  let total = 0;
  for (i = 0; i < cartForParty.length; i++) {
  total = total + cartForParty[i]['price'];
  }
  console.log(total);
}

cashRegister(cartForParty);
