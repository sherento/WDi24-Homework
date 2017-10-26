// Credit Card

/*You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
*/

//global scope variables

let newNum = " ";

let fig = " ";

let sum = 0;


const valCreditCard = function (str) {   //function to validate credit cards

//ignore dashes so I can store the number as a new string to check length
  let newNum = str.replace(/-/g, '');

// check its 16 characters long
  if (newNum.length === 16) {
    fig = newNum;
    console.log("true");
  };

  //at least one different digit eg. not whole integer is equal
  let firstNum = fig[0];
  for (let i = 0; i < fig.length; i++) {
    if (fig[i] !== firstNum) {
      console.log("true");
    };
  }

  //check the sum of all digits is greater than 16 - I couldn't get this to work
  let checkSum = 0;
  for (let i = 0; i < fig.length; i++) {
  checkSum = checkSum + fig[i];
}
  if (checkSum > 16) {
    console.log("true");
  };


//convert string to number
sum = parseInt(fig);

//determine if integer is all numbers //
//not working because it doesn't check each number
//can't use isNaN(" ") === true because NaN is a number and it doesn't work if letter follows number
if (0 <= sum && 9 <= sum) {
  console.log("true");
};

//the final digit must be even use modulous to see if even
//assume even numbers end in an even digit
//not working
if (sum % 2 === 0) {
  console.log("true");
}
else {
  console.log("false");
};
}


// I should of started with a number and done the maths first, so it doesn't exit the function as soon as it checks if the length is 16. Maybe then my maths if statements would be working. But couldn't figure out how to remove dashes doing it this way.

//function needs to return true or false
//these should return true
valCreditCard('9999-9999-8888-0000');
valCreditCard('6666-6666-6666-1666');

//should all return false
valCreditCard('9a23-3211-9c01-1112');
valCreditCard('4444-4444-4444-4444');
valCreditCard('6666-6666-6666-6661');
valCreditCard('1111-1111-1111-1110');
