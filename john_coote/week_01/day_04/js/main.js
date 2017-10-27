console.log(`homework: week 1, day 4`);

// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

console.log('all results based on objects provided');


const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function (length1, width1) {
  if (length1 === width1) {
    return true;
  } else {
    return false;
  }
}

const perimeter = function (length1, width1) {
  return (2 * length1 + 2 * width1);
}
console.log('** square');
console.log(isSquare(rectangle.length, rectangle.width));

console.log('** perimiter');
console.log(perimeter(rectangle.length, rectangle.width));


////////////////


// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};


isEquilateral = function (l1, l2, l3) {
  if ((l1 === l2) && (l1 === l3)) { return true }
  return false;
}

console.log('** equilateral');
console.log(isEquilateral (triangle.sideA, triangle.sideB, triangle.sideC));

const isIsosceles = function (l1, l2, l3) {
  if ((l1 === l2) || (l2 === l3) || (l3 === l1)) {return true}
  return false;
}

console.log('** isoceles');
console.log(isIsosceles(triangle.sideA, triangle.sideB, triangle.sideC));

const area = function (l1, l2, l3) {
  s = (l1 + l2 + l3) * 0.5;
  return ((s * (s - l1) * (s - l2) * (s - l3)) ** 0.5)
}
console.log('** area');
console.log(area(triangle.sideA, triangle.sideB, triangle.sideC));

const isObtuse = function (l1, l2, l3) {
  // sort the lenfgths such that
  let a = l1 // shortest
  let b = l2
  let c = l3 // longest

  if (c ** 2 > ( b ** 2) + (a ** 2)) {return true};
  return false;
}

console.log(`** obtuse`);
console.log(isObtuse(triangle.sideA, triangle.sideB, triangle.sideC));

/////////////////

// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// const keyArray = Object.keys(cartForParty);
// console.log(keyArray);

const cashRegister = function (cartObject) {
  let str = ""
  let price = 0
  let total = 0
  const keys = Object.keys(cartObject);      // make an array of all items
  for (var i = 0; i < keys.length; i++) {    // loop through this array
    let keyName = keys[i];                   // retreive the name of the key in the loop.
    str = cartObject[keyName];               // get the value of the key
    price = Number(str);                     // turn it into a numnber
    total = total + price;                   // add it to the total

    // ref alternative looping function is:
    // for (let animal in zoo ) {
    //    console.log (animal)
    // }
    //  for in and for of
  }
  return total;
}
console.log('** shopping cart');
console.log(cashRegister(cartForParty));




//////////////

// Credit Card Validation
//
// You're starting your own credit card business.
// You've come up with a new way to validate credit cards with a
// simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
//

const validateCreditCard = function (cardString) {
  console.log(cardString);
  let errorMessage = ""  //
  let checkString = ""
  let checkStringNum = 0
  let allDupFlag = true;
  let checkFor16 = 0;

  //first remove the dashes.

  //need to convert the string to be replaced "-" into a **regular expression**
  let dash = new RegExp('-', 'g')
  cardString = cardString.replace(dash,"");
  //console.log(cardString);

  // const hangArr1 = "fly".split("");
  let numArr = cardString.split("");
  //console.log(numArr.length);

  if (numArr.length !== 16) {
    console.log("Incorrect Number of Digits");
    return false;
  }

  for (var i = 0; i < numArr.length; i++) {
    if ("0123456789".search(numArr[i]) === -1) {
      console.log("Non numerical character");
      return false;
    }
  }

  for (var i = 0; i < numArr.length; i++) {
    checkString = checkString + numArr[i];
    checkStringNum = checkStringNum + checkString.search(numArr[i]);
    // console.log(checkString, checkString.search(numArr[i]), checkStringNum);
  }
  if (checkStringNum === 0) {
    console.log("All the same number");
    return false;
  }

  // if (allDupFlag) {
  //   console.log(`All numbers the same.`);
  //   return false;
  // }

  if ( (Number(numArr[15]) % 2) !== 0 ) {
    console.log("Last digit must be divisible by 2");
    return false;
  }

  for (var i = 0; i < numArr.length; i++) {
    checkFor16 = checkFor16 + Number(numArr[i]);
  }

  if (checkFor16 <= 16) {
    console.log("Adds to less than 16");
    return false;
  }

  console.log("This is a valid credit card number");
  return true;
}
console.log('** Credit Card Validator');
console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('6666-6666-6666-1666'));

console.log(validateCreditCard('a923-3211-9c01-1112'));
console.log(validateCreditCard('4444-4444-4444-4444'));
console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('6666-6666-6666-6661'));

//////////////

//Maybe comeback to this with a more elegant solution???

//////////////

//The Bank



const bankArray = [
  {name: "John",
    balance: 0,
    deposit: function(Amount) {
      this.balance = this.balance + Amount;
    },
    withdraw: function(Amount) {
      this.balance = this.balance - Amount;
    }
  },
  {name: "Paul",
    balance: 0,
    deposit: function(Amount) {
      this.balance = this.balance + Amount;
    },
    withdraw: function(Amount) {
      this.balance = this.balance - Amount;
    }
  }

]

const deposit = function () {
  let name = prompt("Enter a name");
  let amount = prompt("Enter a deposit value");
  amount = Number(amount);
  console.log(name, amount);

  for (var i = 0; i < bankArray.length; i++) {
    if (bankArray[i].name === name) {
      bankArray[i].deposit(amount);
      showBalance();
      //return;
    }
  }
    showBalance();
    //document.getElementById('output1').innerHTML = "<h1>" + output1 + "</h1>";
    document.getElementById('output1').innerHTML = "<h1>" + showBalance() + "</h1>";
    //document.getElementById('output1').innerHTML = "output1uhshiuoweuiohwefuhi";
    return;
}

const withdraw = function () {
  let name = prompt("Enter a name");
  let amount = prompt("Enter a withdraw value");
  amount = Number(amount);
  console.log(name, amount);

  for (var i = 0; i < bankArray.length; i++) {
    if (bankArray[i].name === name) {
      if (bankArray[i].balance < amount) {
        alert("Insufficient Funds!");
        showBalance();
        return;
      }
      bankArray[i].withdraw(amount);
    }
  }
    showBalance();
    document.getElementById('output1').innerHTML = "<h1>" + showBalance() + "</h1>";
    return;
}

const transfer = function () {
  let name1 = prompt("Enter a name to transfer FROM");
  let name2 = prompt("Enter a name to transfer TO");
  let amount = prompt("Enter a transfer value");
  amount = Number(amount);
  console.log(name1, name2, amount);

  for (var i = 0; i < bankArray.length; i++) {
    if (bankArray[i].name === name1) {
      if (bankArray[i].balance < amount) {
        alert("Insufficient Funds!");
        showBalance();
        //return;
      }
      bankArray[i].balance = bankArray[i].balance - amount;
    }

    for (var i = 0; i < bankArray.length; i++) {
      if (bankArray[i].name === name2) {
        bankArray[i].balance = bankArray[i].balance + amount;
      }
    }

  }
    showBalance();
    document.getElementById('output1').innerHTML = "<h1>" + showBalance() + "</h1>";
    return;
}



const newAccount = function () {
  let name = prompt("Enter new account name");
  const numberZero = 0;
  const newAccount = {};
    newAccount.name = name;
    newAccount.balance = 0;
    newAccount.deposit = function(Amount) {this.balance = this.balance + Amount}
    newAccount.withdraw = function(Amount) {this.balance = this.balance - Amount}

  bankArray.push(newAccount)

  showBalance();
  document.getElementById('output1').innerHTML = "<h1>" + showBalance() + "</h1>";
  return;
}



const showBalance = function () {
  let output1 = ""
  bankFunds = 0;
  for (var i = 0; i < bankArray.length; i++) {
    bankFunds = bankFunds + bankArray[i].balance;
    console.log(`index:${i}, ${bankArray[i].name}, ${bankArray[i].balance}`);
    output1 = `${output1} index:${i}, ${bankArray[i].name}, ${bankArray[i].balance} <br>`
    console.log(`Total funds in bank: ${bankFunds}`);
  }
  output1 = output1 + `Total funds in bank: ${bankFunds}`;
  console.log(output1);
  // cant manipultae DOM yet as the HTML is not populated yet.
  //document.getElementById('output1').innerHTML = "<h1>" + output1 + "</h1>";
  return output1;

  // update the main browser window. DOM.
  //output1 = "something"
  //document.getElementById('output1').innerHTML = "<h1>" + output1 + "</h1>";
  //console.log(output1);
}
// const startBank = function () {
//   document.getElementById('output1').innerHTML = "<h1>" + showBalance() + "</h1>";
// }


// CANT MAKE THIS WORK
//
// var el = document.getElementById("btnDeposit");
// if (el.addEventListener)
//     el.addEventListener("click", deposit(), false);
// else if (el.attachEvent)
//     el.attachEvent('onclick', deposit());

showBalance();
