// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and
// prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

//
// // Output
// cashRegister(cartForParty)); // 60.55

const cashRegister = function(shoppingCart){
  let keys = Object.keys(shoppingCart);       // create array of the objects keys
  let total = 0

  for (var i = 0; i < keys.length; i++) {
    let price = shoppingCart[keys[i]];        // loop through each key and place value in variable
    price = parseFloat(price);                // turn price into floating point number
    total += price;
  };

  return total;
};
