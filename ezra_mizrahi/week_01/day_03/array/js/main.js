/*
Define a function maxOfTwoNumbers that takes two numbers as arguments
and returns the largest of them.
Use the if-then-else construct available in Javascript.
You'll have to remember your pre-work, or do some googling to figure this out.
*/

const maxOfTwoNumbers = function (num1, num2) {
  let greater;
  if (num1 > num2) {
    greater = num1;
  } else {
    greater = num2;
  }
  return greater;
};


/*
Define a function maxOfThree that takes three numbers as arguments
and returns the largest of them.
*/

const maxOfThree = function (num1, num2, num3) {
  let greatest;
  if (num1 > num2 && num1 > num3) {
    greatest = num1;
  } else if (num2 > num1 && num2 > num3) {
    greatest = num2;
  } else {
    greatest = num3;
  }
  return greatest;
};




/*
Write a function that takes a character (i.e. a string of length 1)
and returns true if it is a vowel, false otherwise.
*/

const vowels = ["a", "e", "i", "o", "u"];

const vowelizer = function (string) {
  if (vowels.indexOf(string) > -1) {
    return true;
  } else {
    return false;
  }
};


/*
Define a function sumArray and a function multiplyArray
that sums and multiplies (respectively) all the numbers in an array of numbers.
For example, sumArray([1,2,3,4]) should return 10,
and multiplyArray([1,2,3,4]) should return 24.
*/

const numArray = [1, 2, 3, 4];

const sumArray = function (array) {
  let sum = 0;
  for ( let i = 0; i < numArray.length; i++ ) {
    sum += numArray[i];
    console.log(sum);
  }
};

sumArray(numArray);


const multiplyArray = function (array) {
  let multiples = 1;
  for (let i = 0; i < numArray.length; i++) {
    multiples = multiples * numArray[i];
    console.log(multiples);
  }
};

multiplyArray(numArray);
