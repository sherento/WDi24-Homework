

const squareNumber = function (number){
  const square = (number * number);
  console.log (`The result of squaring the number is ${number} is ${ square}`);
}
squareNumber (5);

const halfNumber = function (number2) {
  const divideHalf = (number2 /2);
  console.log(`Half of ${number2} is ${ divideHalf}`);
}
halfNumber (10);

const percentOf = function (num1, num2) {
  const percentCalc = (num1/num2 * 100);
  console.log(`${num1} is ${percentCalc}% of ${num2}`);
}
percentOf (60, 10);

const areaOfCircle = function (radius) {
  const circumference = (2 * Math.PI * radius);
  console.log(`The area for a circle with a radius of 2 is ${circumference}`);
}
areaOfCircle (10);


const partTwo = function (numberone) {
  const divide2 = (numberone /2);
  const squareone = (divide2 * divide2);
  const circumf = (2 * Math.PI * squareone);
  const percentCal = (circumf/squareone * 100);
  console.log (`${percentCal}`);
}
partTwo (10);

const drEvil = function (dollars) {
 if (dollars >= 100000) {
  console.log(`${dollars} dollars (pinky)`);
} else {
  console.log (`${dollars} dollars`);
}};

 drEvil (100000);

const mixUp = function (wordA, wordB) {
  const twoA = wordA.slice(0,2);
  // debugger;
  const secondA = wordA.slice(2, wordA.length-1);
  console.log(`${twoA + secondA}`);
};
mixUp ('test','one');



// const verbing = function (verb) {
//   if (verb.length >= 3) {
//     console.log(`${verb} ing`);
//   }
// };
// verbing (test);
