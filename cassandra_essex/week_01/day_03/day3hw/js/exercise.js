// Part 1 Rectangle

const isSquare = function (length, width) {
    if (length === width) {
    console.log('This is a square');
  } else {
    console.log('This is a rectangle');
    }
};

isSquare (3,3);

// Area of a square
const area = function (len1, wid1) {
      if (len1 !== wid1) {
      var totalArea = (len1 * wid1);
      console.log(`Is a rectangle and the area is ${ totalArea}.`);
  }
};
area (3,4);

// perimter of a rectangle

const perimter = function (len2, wid2) {
      if (len2 !== wid2) {
      var totalPer = ((len2 * 2) + (wid2 * 2));
      console.log(`Is a rectangle and the perimter ${ totalPer}.`);
    }
};
perimter (7,4);

// Part 2, triangle

// Equilateral
const isEquilateral = function (sideA, sideB, sideC) {
      if (sideA === sideB && sideB === sideC) {
      var Equilateral = ((3/4) * (sideA * sideA));
        console.log(`This is an Equilateral triangle with an area of ${ Equilateral}.`);
    } else {
      console.log('This is a not an Equilateral triangle.');
    }
};
isEquilateral (3,3,3);

// Islsosceles
// based on the fact an islsocles triangle has 2 equal sides
const islsosceles = function (sideA, sideB, sideC) {
      if (sideA === sideB || sideB === sideC) {
        console.log(`This is an Islsosceles triangle.`);
    } else {
      console.log('This is a not an Islsosceles triangle.');
    }
};
islsosceles (3,2,5);

// Area of a triangle
// based on half the base times the height
const areaTriangle = function (base, side1) {
      var areaT = ((1/2) * (base * side1));
        console.log(`The area is ${ areaT}.`)
};
areaTriangle (5,3);


// The Cash Register

const cartForParty = {
  banana: 1.25,
  handkerchief: .99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};

// I have used a Object value and then summed it.

let sum = 0;
for (let total of Object.values(cartForParty)) {
  sum += total;
}
console.log(sum);


// Credit Card validation



const validateCreditCard = function (cardNumbers)  {
  var numbers = /^[0-9]+$/;
        if (cardNumbers.value.match(numbers))  {
        console.log('..valid');
        } else if {
        console.log('Please input numeric characters only');
        } else if {
        (cardNumbers.length-1 % 2 !==0) {
        console.log('card not valid');
         else if (cardNumbers ) {

         }}
     }

validateCreditCard ('1');
