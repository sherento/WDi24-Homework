// *************** GEOMETRY FUNCTION LAB ***********

// Given the following rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


// Rectangle object
const rectangle = {
  length: 15,
  width: 1
};

// Functions
const isSquare = function (rect) {
  if (rect.length === rect.width) {
    return true;
  } else {
    return false;
  }
};
const area = function (rect) {
  return rect.length * rect.width;
};
const perimeter = function (rect) {
  return 2 * ( rect.length + rect.width );
};


// Testing
console.log( `\nRECTANGLES` );
console.log( `Is the rectangle a square: ${ isSquare(rectangle) }` );
console.log( `Area of the rectangle: ${ area(rectangle) }` );
console.log( `Perimeter: ${ perimeter(rectangle) }` );



// ************ TRIANGLE ***************************

// Given the following triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

// Triangle object
const triangle = {
  sideA: 15,
  sideB: 15,
  sideC: 29
};

// Functions
const isEquilateral = function (t) {
  if (t.sideA === t.sideB && t.sideB === t.sideC) {
    return true;
  } else {
    return false;
  }
};
const isIsosceles = function (t) {
  if (t.sideA === t.sideB || t.sideB === t.sideC || t.sideA === t.sideC) {
    return true;
  } else {
    return false;
  }
};
const areaTriangle = function (t) {
  const halfPerim =  (t.sideA + t.sideB + t.sideC) / 2;
  const areaCalc = Math.sqrt( halfPerim * (halfPerim - t.sideA) * (halfPerim - t.sideB)  * (halfPerim - t.sideC) ); // Heron's formula
  const areaRounded = Math.round( areaCalc );
  return areaRounded;
};
const isObtuse = function (t) {  // if a2+b2<c2, then lengths a, b, and c make up the sides of an obtuse triangle (c is longest side)
  // separate longest side from other two by making array sorted
  const sides = Object.values(t); // get values of sides out of object into an array
  const sidesSorted = sides.sort();
  const longestSide = sidesSorted[ sidesSorted.length - 1 ];
  const sqrLongestSide = longestSide * longestSide;
  const sqrOtherSides = ( sidesSorted[0] * sidesSorted[0] ) + ( sidesSorted[1] * sidesSorted[1] );
  if (sqrOtherSides < sqrLongestSide) {
    return true;
  } else {
    return false;
  }
};




// Testing
console.log( `\nTRIANGLES` );
console.log( `Is the triangle equilateral: ${ isEquilateral(triangle) }` );
console.log( `Is the triangle isosceles: ${ isIsosceles(triangle) }` );
console.log( `Area of triangle (rounded to nearest whole number): ${ areaTriangle(triangle) }` );
console.log( `Is the triangle obtuse: ${ isObtuse(triangle) }` );


// ************** CASH REGISTER ***********

// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart.

// Function
const cashRegister = function (cart) {
  let total = 0;
   // get all prices in their own array
  const allPrices = Object.values(cart);
  // add all prices together
  for (let i = 0; i < allPrices.length; i++) {
    total += allPrices[i];
  }
  return total.toFixed(2); // with 2 decimals places like a cash register
};


// Example object
const cartForParty = {
  banana: 1.25,
  handkerchief: 0.99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};
// should total 60.55

// New object
const cartForSchool = {
  textbook: 50,
  pencil: 0.5,
  bag: 20,
  drinkBottle: 15
};

// Testing
console.log( `\nCASH REGISTER` );
console.log( `Your total will be $${cashRegister(cartForParty)}` );
console.log( `Your total will be $${cashRegister(cartForSchool)}` );




// ******************* CREDIT CARD **********************
// A simple function called validateCreditCard that returns true or false.

// COMPONENT FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Remove dashes and make an array of numbers
const removeDashes = function (card) {
  // declare array we'll want the function to return
  let numbers = [];
  // split str and remove dashes
  const cardSplit = card.split('-');
  // recombine str without dashes
  let cardRejoin = '';
  for (let i = 0; i < cardSplit.length; i++) {
    cardRejoin += cardSplit[i];
  }
  // splits str into array and convert to numbers
  numbers = cardRejoin.split('').map(Number);
  console.log( `Removing dashes...  Numbers: ${ numbers }` );
  return numbers;
};


// Check if 16 digit
const is16Digit = function (str) {
  console.log( `Checking if this is 16 digits: ${ str.length }` );
  if (16 === str.length) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};


// Check if all digits are numbers
const isAllNumbers = function (numberArray) {
  console.log( `Checking if all digits are numbers: ${ numberArray }` );
  if (!numberArray.some(isNaN)) {    // if my array does NOT contain something that is NOT a number (dbl negative, i.e. is everything a number)
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};


// Check that all digits are not the same
const isDifferentDigits = function (numberArray) {
  console.log( `Checking if digits are different: ${ numberArray }` );
  // sort array
  // discovered i needed to make a copy of array with .slice() or original array would sort too
  const sortedNumbers = numberArray.slice().sort();
  // if first and last elements are same, all digits are the same
  if (sortedNumbers[0] === sortedNumbers[ sortedNumbers.length -1 ]) {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
};


// The final digit must be even
const isFinalDigitEven = function (numberArray) {
  console.log( `Checking if last digit is even: ${ numberArray } ` );
  const lastDigit = numberArray[numberArray.length - 1];
  if ( lastDigit % 2 === 0 ) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};


// The sum of all the digits must be greater than 16 - is valid because otherwise card could be 0000-0000-0000-1000 for e.g.
const isSumGreater16 = function (numberArray) {
  console.log( `Checking if sum is greater than 16: ${ numberArray }` );
  const sum = numberArray.reduce((total, amount) => total + amount);
  console.log( `Sum: ${ sum }` );
  // ( this sums all numbers in array ^: accumulatively works through function and returns one number)
  if (sum > 16) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};


// MAIN VALIDATION FUNCTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const validateCreditCard = function (card) {
  const validatedCard = {   // our validated card object
    valid: false,
    number: card            // number key with value same as entered card string
  };                        // (no error key added yet since card might not error)

  // Print original entry to log
  console.log( `Card entered: ${ card }` );
  // Remove dashes
  const numbers = removeDashes( card );
  // Check if number is 16 digits
  if ( !is16Digit( numbers ) ) {   // if it is not 16 digits
    validatedCard.valid = false;
    validatedCard.error = 'wrong_length';      // add error descrip to object
    return validatedCard;                       // stop the function and return object with error descrip
  }
  // All of them must be numbers
  if ( !isAllNumbers( numbers ) ) {
    validatedCard.valid = false;
    validatedCard.error = 'contains_invalid_char';     // add error descrip to object
    return validatedCard;                       // stop the function and return object with error descrip
  }
  // All digits cannot be the same
  if ( !isDifferentDigits( numbers ) ) {
    validatedCard.valid = false;
    validatedCard.error = 'all_digits_identical';      // add error descrip to object
    return validatedCard;                       // stop the function and return object with error descrip
  }
  // Last digit must be even
  if ( !isFinalDigitEven( numbers ) ) {
    validatedCard.valid = false;
    validatedCard.error = 'final_digit_odd';      // add error descrip to object
    return validatedCard;                       // stop the function and return object with error descrip
  }
  // Sum of digits greater than 16
  if ( !isSumGreater16( numbers ) ) {
    validatedCard.valid = false;
    validatedCard.error = 'sum_less_than_16';      // add error descrip to object
    return validatedCard;                       // stop the function and return object with error descrip
  }
  validatedCard.valid = true; // If function hasn't exited before here, card must be valid - assign true and return object.
  return validatedCard;
};





// The following credit card numbers are valid:
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number

// Test cards
const testCards = [
  '1234-1234-1234-1234',
  '2354-3462-34534-9998',
  '235x-3462-3454-9998',
  '4444-4444-4444-4444',
  '4224-4664-4444-4443',
  '0000-0000-0000-1000',
  '0310-4100-0121-1000',
  '9999-9999-8888-0000'
];



console.log( `\nCREDIT CARD VALIDATION\n-----------------` );

for (let i = 0; i < testCards.length; i++) {
  const card = validateCreditCard( testCards[i] );
  console.log( `Card number: ${ card.number }  Valid: ${ card.valid }` );
  if (card.error) {
    console.log( `Error: ${card.error}` );
  }
  console.log( `-----------------` );
}

// console.log( `Card number: ${ testCard1 }. Valid: ${ validateCreditCard( testCard1 ).valid }.` );
// console.log('');
// console.log( `Card number: ${ testCard2 }. Valid: ${ validateCreditCard( testCard2 ) }.` );
// console.log('');
// console.log( `Card number: ${ testCard3 }. Valid: ${ validateCreditCard( testCard3 ) }.` );
// console.log('');
// console.log( `Card number: ${ testCard4 }. Valid: ${ validateCreditCard( testCard4 ) }.` );
// console.log('');
// console.log( `Card number: ${ testCard5 }. Valid: ${ validateCreditCard( testCard5 ) }.` );
// console.log('');
// console.log( `Card number: ${ testCard6 }. Valid: ${ validateCreditCard( testCard6 ) }.` );
// console.log('');
// console.log( `Card number: ${ testCard7 }. Valid: ${ validateCreditCard( testCard7 ) }.` );
// console.log('');
// console.log( `Card number: ${ testCard8 }. Valid: ${ validateCreditCard( testCard8 ) }.` );
// console.log('');




//**
