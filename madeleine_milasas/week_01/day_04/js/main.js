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








//**
