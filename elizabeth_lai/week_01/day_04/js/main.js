// Geometry Function Lab
//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function (rec) {
  if (rec.length === rec.width) {
    console.log('The rectangle is a square');
  } else {
    console.log('The rectangle is not a square');
  }
};

isSquare(rectangle);

const area = function (ar) {
  let areaOf = ar.length * ar.width
  console.log(`The area of the rectangle is ${areaOf} square centimetres.`);
};

area(rectangle);

const perimeter = function (peri) {
  let periOf = (2 * peri.length) + (2 * peri.width)
  console.log(`The perimeter of the rectange is ${periOf} centimetres.`);
}

perimeter(rectangle);

// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangle = {
  sideA: 4,
  sideB: 4,
  sideC: 8
};

const isEquilateral = function (equi) {
  if (equi.sideA === equi.sideB && equi.sideB === equi.sideC && equi.sideA === equi.sideC) {
    console.log('The triangle is an equilateral.');
  } else {
    console.log('The triangle is not an equilateral.');
}
};

isEquilateral(triangle);

const isIsosceles = function (isos) {
  if (isos.sideA === isos.sideB || isos.sideB === isos.sideC || isos.sideA === isos.sideC) {
    console.log('The triangle is an isosceles triangle.');
  } else {
    console.log('The triangle is not an isosceles triangle.');
  }
};

isIsosceles(triangle);

const areaOfTri = function (art) {
  //find the height of the triangle first: c(2) = a(2) + b(2) then a/2
  let halfBase = art.sideA / 2
  let heightA = (art.sideC * art.sideC) - (halfBase * halfBase)
  let heightB = Math.sqrt(heightA)
  //find the area of the triangle: 1/2bh
  let area = art.sideA * heightB * 0.5
  console.log(`The area of the triangle is ${area} square centimetres`);
};
areaOfTri(triangle);

const isObtuse = function (obt) {
  //first find which side is the longest and assign that to C
//   let lgth = 0;
//   let longest;
//   for (let i = 0; i < triangle.length; i++) {
//     if (triangle[i] > lgth) {
//         let lgth = triangle[i];
//         longest = triangle[i];
//     }
//     console.log(longest);
// }
//use reduce
  //a(2)+b(2) < c(2)
  let measurement = obt.sideA^2 + obt.sideB^2
  let measurement2 = obt.sideC^2
  if (measurement < measurement2) {
    console.log('This is an obtuse triangle.');
  } else {
    console.log('This is not an obtuse triangle.');
  }
};

isObtuse(triangle);

// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55

const cartObject = [
{Name: 'apple', Price: 0.7}, {Name: 'tissues', Price: 1.2}, {Name: 'chocolate', Price: 1.5}, {Name: 'banana', Price: 0.6}, {Name: 'socks', Price: 5.4}
];

const cashRegister = function (shopping) {
  let totalPrice = 0
  // let val = cartObject["Price[i]"];
  for (var i = 0; i < cartObject.length; i++) {
    totalPrice = totalPrice + cartObject[i]['Price'];
  }
  console.log(totalPrice);
}
  cashRegister(cartObject);

// Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
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
// Example
//
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

//global variables
let length = ""
const validateCreditCard = function (number) {
  // let length = number.replace(/ /g,""); - not working
  // to remove dashes - const cardSplit = card.split('-').join('')
  // determine whether there are 16 digits
  let length = number.toString().length;
  if (length === 16) {
    console.log('true');
  };
  // determine whether it is a number
  if (isNaN(number) === false) {
    console.log('true');
  };
  // determine whether last digit is even
  // number[number.length - 1] - finding the last digit
  if ((number % 2 === 0)) { //assumes that if number is even, last digit has to be even
    console.log('true')
  };
  // testing whether the sum of the digits is greater than 16
  let indivDigit = number.toString().split("");
  let sum = 0
  for (var i = 0; i < indivDigit.length; i++) {
    sum = sum + indivDigit[i]
  }
  if (sum > 16) {
    console.log('true');
  };
  //determine if there are at least two different digits
  let firstChar = indivDigit[0]
  for (var i = 0; i < indivDigit.length; i++) {
    if (indivDigit[i] == firstChar) {
      console.log('true');
    };
  };
};

validateCreditCard(7888888162888888);

// validateCreditCard(9999999988880000);

// JavaScript Bank
//
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

let bank = [
  { owner: "Greg Smith",
    balance: 1000
  },
  { owner: "Ted Bates",
    balance: 10000
  },
  { owner: "Bill Norm",
    balance: 5000
  },
  { owner: "Lauren Young",
    balance: 20000
  }
]
// to find the total sum of the balances in bank accounts
const balance = function (amount) {
  let totalSum = 0
  for (var i = 0; i < bank.length; i++) {
    totalSum = totalSum + bank[i]['balance'];
  }
  console.log(totalSum);
}
  balance(bank);

// to add a new account to the bank

const newAccount = function (name, amount) {
  for (var i = 0; i < newAccount.length - 1 ; i++) {
  bank.push({owner: name, balance: amount});
}
// console.log(`${name} ${amount}`);
console.log(bank);
}
newAccount("Emma", 500)
newAccount("Wilson", 50000)
newAccount("Dennis", 70000)

// let newAmount = bank[balance]
// deposit money into account and show account balance
const deposit = function (owner, balance) {
  for (var i = 0; i < bank.length; i++) {
     if (bank[i].owner === owner) {
         bank[i].balance = bank[i].balance + balance;
     }
   }
}
console.log(deposit("Greg Smith", 2000));

// withdraw money from account and show account balance
const withdraw = function (owner, amount) {
  for (var i = 0; i < bank.length; i++) {
     if (bank[i].owner === owner) {
        // console.log(bank[i].owner === owner);
        bank[i].balance = bank[i].balance - amount;
        console.log(bank);
     }
   }
}
console.log(withdraw("Bill Norm", 3000));

// shows new balance
