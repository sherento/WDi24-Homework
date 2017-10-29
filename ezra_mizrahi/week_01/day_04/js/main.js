/*
Given the following a rectangle object like the one below,
 write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle

const rectangle = {
  length: 4,
  width: 4
};
*/

const rectangle = {
  length: 4,
  width: 4
};

// below fn determines if rectangle is square or not

const isSquare = function (r) {
  if (r.length === r.width) {
    console.log( 'This rectangle is a square.' );
  } else {
    console.log( "This ain't no square man. You're the square." );
  }
};

isSquare(rectangle);

// below fn determines area of rectangle

const area = function (r) {
  let areaCalc = r.length * r.width;
  console.log( areaCalc );
};

area(rectangle);

// below fn determines perimeter of rectangle

const perimeter = function (r) {
  let rPerim = 2 * (r.length + r.width);
  console.log( rPerim );
};

perimeter(rectangle);

/*
Given the following a triangle object like the one below,
write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
};

// below fn determines if triangle is equilateral

const isEquilateral = function ( tr ) {
  if ( tr.sideA === tr.sideB && tr.sideB === tr.sideC ) {
    console.log( `It's equilateral, baby.` );
  } else {
    console.log( `It ain't equilateral, baby.` );
  }
};

isEquilateral(triangle);

// below fn determines if triangle is isosceles,
// but is not correct if you change triangle object val

const isIsosceles = function ( tr ) {
  if ( tr.sideA === tr.sideB || tr.sideA !== tr.sideC || tr.sideA !== tr.sideC ) {
    console.log( `It's isosceles.` );
  } else {
    console.log( `It ain't iscosceles.` );
  }
};

isIsosceles(triangle);

// below fn determines area of triangle with herons formula

const areaTriangle = function ( tr ) {
  let p = ( tr.sideA + tr.sideB + tr.sideC ); // half perimeter for Heron's formula
  let heron =  p * ( ( p - tr.sideA ) * ( p - tr.sideB ) * ( p - tr.sideC ) ); // herons formula
  let trArea = Math.sqrt(heron); // herons formula
  console.log( trArea );
};

areaTriangle(triangle);

// below fn determines if triangle is obtuse via a ridiculously long math expression

const isObtuse = function ( tr ) {
  let cosC = ( (Math.pow( tr.sideA, 2 ) + Math.pow( tr.sideB, 2 ) - Math.pow( tr.sideC, 2 )) /
  ( 2 * ( tr.sideA * tr.sideB ) ) ); // this math expression brought to you by wolfram alpha
  if ( cosC < 0 ) {
    console.log( `Obtuse.` );
  } else {
    console.log( `Not obtuse.` );
  }
};

isObtuse(triangle);

/*
Write a function called cashRegister that takes a shopping cart object.
The object contains item names and prices (itemName: itemPrice).
The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55
*/

const capitalismCart = {
  banana: "1.25",
  handkerchief: ".99",
  shirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  protein: "22.36"
};

// access just the object values via Object.values(obj)
// need to convert strings to numbers
// need to sum numbers and return total
// do I need to make an array?

// the above purchase should sum to 60.55 dollareedoos



const cashRegister = function ( cart ) {
  const arrayOfNum = Object.values(cart); // convert object values into array
  const strToNum = arrayOfNum.map(Number); // convert array strings to numbers
  let sum = strToNum.reduceRight(function(a,b){return a+b;}); // sum numbers
  console.log( sum.toFixed(2) + " Dollareedoos" ); // return total on screen rounded to 2 decimal places
};

cashRegister(capitalismCart);

/*
You're starting your own credit card business.
You've come up with a new way to validate credit cards
with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented
(all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example

validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string
before checking if the input credit card number is valid.
*/

// let newCardArray = cardArray[i].replace(/-/g, '');

const cardObject = {
  card1: '9999-9999-8888-0000',
  card2: '6666-6666-6666-1666'
};



const validate = function (cards) {
  /*
  Object.values will transform the object values into an array
  */
  let cardArray = Object.values(cards);
  for (let i = 0; i < cardArray.length; i++) {
    let newCardArray = cardArray[i];
    /*
    the below replace function should replace all instances
    of the char "-" in the array, but it's not?
    */
    newCardArray.replace(/-/g, 'NaN');
    console.log(newCardArray);
  }


};

validate(cardObject);


/*
// ******************* CREDIT CARD **********************
// A simple function called validateCreditCard that returns true or false.
// COMPONENT FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Remove dashes and make an array of numbers
const removeDashes = function (card) {
  // declare array we'll want the function to return
  let numbers = [];
  // split str and remove dashes
  const cardSplit = card.split('-'); // .split('-').join('') --- recombine in one step
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
  // ( this .reduce sums all numbers in array: accumulatively works through function and returns one number)
  console.log( `Sum: ${ sum }` );
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
  const validatedCard = {   // our validated card object to return at end
    valid: false,
    number: card            // number key with value same as entered card string
  };                        // (no error key added yet since card might not error)
  console.log( `Card entered: ${ card }` );
  const numbers = removeDashes( card );
  if ( !is16Digit( numbers ) ) {
    validatedCard.valid = false;
    validatedCard.error = 'wrong_length';      // add error key + value to object
    return validatedCard;                      // stop the function and return object with error descrip
  }
  if ( !isAllNumbers( numbers ) ) {
    validatedCard.valid = false;
    validatedCard.error = 'contains_invalid_char';
    return validatedCard;
  }
  if ( !isDifferentDigits( numbers ) ) {
    validatedCard.valid = false;
    validatedCard.error = 'all_digits_identical';
    return validatedCard;
  }
  if ( !isFinalDigitEven( numbers ) ) {
    validatedCard.valid = false;
    validatedCard.error = 'final_digit_odd';
    return validatedCard;
  }
  if ( !isSumGreater16( numbers ) ) {
    validatedCard.valid = false;
    validatedCard.error = 'sum_less_than_16';
    return validatedCard;
  }
  validatedCard.valid = true; // If function hasn't exited before here, card must be valid - assign true and return object.
  return validatedCard;
};
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

*/
