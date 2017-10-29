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
    newCardArray.replace(/-/g, '');
    console.log(newCardArray);
  }


};

validate(cardObject);
