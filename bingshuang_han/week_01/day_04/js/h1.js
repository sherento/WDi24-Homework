/*
Geometry Function Lab
Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

    isSquare - Returns whether the rectangle is a square or not
    area - Returns the area of the rectangle
    perimeter - Returns the perimeter of the rectangle
*/
const rectangle = {
  length: 4,
  width: 4,
  isSquare : function ( ){
    if (this.width === this.length )
    return true;
    else
    return false;
  },
  area : function (){
    return this.width *this.length;
  },
  perimeter : function () {
    return 2 * (this.width + this.length);
  }
};
console.log (`This rectangle 's area is ${rectangle.area( )} and it'perimeter is ${rectangle.perimeter()}`)

/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

    isEquilateral - Returns whether the triangle is equilateral or not
    isIsosceles - Returns whether the triangle is isosceles or not
    area - Returns the area of the Triangle
    isObtuse - Returns whether the triangle is obtuse or not
*/
const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral : function (){
    //definition of equilateral triangle: 3 equal sides.
    if (this.sideA === this.sideB && this.sideA === this.sideC)
    return true;
    else
    return false;
  },
  isIsosceles : function () {
    //definition of isosceles triangle, if it has two equal sides
    if (this.sideA === this.sideB  || this.sideA === this.sideC || this.sideB=== this.sideC)
    return true;
    else
    return false;
  },
  area : function (){
    //Math: Get the triangle's area by 3 sides
    let p = (this.sideA + this. sideB + this.sideC )/2;
    return Math.sqrt ( p* (p-this.sideA)*(p -  this.sideB)*(p-this.sideC));
  },
  isObtuse: function (){
  //if the triangle is a obtuse (angel )-> that angel cos value should be (0,-1).
    const a = this.sideA;
    const b = this.sideB;
    const c = this.sideC;
    const cosAngleA = (Math.pow(b,2)+Math.pow(c,2)-Math.pow(a,2))/(2 * b* c);
    const cosAngleB = (Math.pow(a,2)+Math.pow(c,2)-Math.pow(b,2))/(2 * a* c);
    const cosAngleC = (Math.pow(b,2)+Math.pow(a,2)-Math.pow(c,2))/(2 * b* a);
    const possibleOb = Math.min (cosAngleA,cosAngleB,cosAngleA);
    if (possibleOb < 0)
    return true;
    else
    return false;
  }
}

 if ( triangle.isObtuse())
 console.log('This is a Obtuse triangle');
 if( triangle.isEquilateral())
 console.log('This is a Equilateral triangle');
 if( triangle.isIsosceles())
 console.log('This is a Isoscele triangle');
 console.log(`This triangle \'s area is ${triangle.area().toFixed(2)} `);

/*
The Cash Register

Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

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
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

let sumOfItems = 0;  // Declare the global variable to hold the value of sum of the price;
const fruitKey = Object.keys(cartForParty);
{
  for (let i= 0; i<fruitKey.length; i++){
    sumOfItems +=Number(cartForParty[fruitKey[i]]);  // change the value into number and plus them together;

  }
}

console.log(fruitKey);
console.log(sumOfItems);



//***************************************************

/*
Credit Card Validation

You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

    Number must be 16 digits, all of them must be numbers
    You must have at least two different digits represented (all of the digits cannot be the same)
    The final digit must be even
    The sum of all the digits must be greater than 16
*/

const validateCreditCard = function (array){
//check the numbers must be 16 digits,otherwise return false;
    let noDashArray = ""; //  hold the input string of removed the dash sign.
    let sumofNum = 0;  //recorde sumofNum of the input credit card.
    let check = false;  // false if there is no at least two different digitsrepresented
    for (let i=0; i<array.length; i++){
      if (array[i] !='-' ){
        noDashArray+= array[i];
      }
    }
//check the noDashArray has 16 elements or not
      if ( noDashArray.length != 16){
      console.log (`valid: false, number: ${array}, error: ‘wrong_length’`);
      return false;
     }
//check these 16 elements are number or not;
      else if (  isNaN(noDashArray) ) {
       console.log(`valid: false, number: ${array}, error: ‘wrong character’`);
       return false;
     }

      //console.log (noDashArray); for test use

//Cardnumber must have at least two different digits represented (all of the digits cannot be the same)

  for (let i= 1 ; i< noDashArray.length;i++){
      if ( noDashArray[0] != noDashArray[i] ){    //if find 1st digit is different from the other digits
        check =true;
      }
  }
  if ( !check){
    console.log(`valid: false, number: ${array}, error: ‘wrong number : equal number’`);
    return false;
  }



//The final digit must be even
   let num = noDashArray[noDashArray.length - 1];
   if (num % 2 != 0)
   {
     console.log(`valid: false, number: ${array}, error: ‘wrong number,the last digit should be even’`);
     return false;
   }


//The sum of all the digits must be greater than 16
  for (let i= 0 ; i< noDashArray.length;i++){
    sumofNum +=noDashArray[i];
  }
  if (sumofNum <= 16)
  {
    console.log(`valid: false, number: ${array}, error: ‘wrong number’`);
    return false;
  }
  else
  {
    console.log(`valid: true, number: ${array}`);
    return true;
  }
//Luhn algorithm check
}


 validateCreditCard ('9999-9999-8888-0009');
 validateCreditCard ('9999-9999-8888-0010');  //return true;
 validateCreditCard ('a923-3211-9c01-1112');
 validateCreditCard ('1111-1111-1111-1111');
