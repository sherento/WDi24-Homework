// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

let cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function ( cart ) {
  const items = Object.keys(cart);
  let total = 0;
  // iterate through items
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    // sum item prices
    total += parseFloat(cart[item]);
  }
  return total;
}

console.log(cashRegister(cartForParty));
