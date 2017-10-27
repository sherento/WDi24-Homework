/*Define a function maxOfTwoNumbers that takes two numbers as arguments
and returns the largest of them. Use the if-then-else construct available
in Javascript. You'll have to remember your pre-work, or do some googling to
figure this out.*/

const maxOfTwoNumbers = function (a, b) {
  if (a > b) {
    return a;
  }
  else {
    return b;
  }
}

console.log(maxOfTwoNumbers(100,4));
console.log(maxOfTwoNumbers(50,80));

/*Define a function maxOfThree that takes three numbers as arguments
and returns the largest of them.*/

const maxOfThree = function (a, b, c) {
  if ((a > b) && (a > c)) {
    return a;
  }
  else if ((b > a) && (b > c)) {
    return b;
  }
  else  {
    return c;
  }
}

console.log(maxOfThree(100,120,70));
console.log(maxOfThree(100,90,70));
console.log(maxOfThree(100,120,150));

/*Write a function that takes a character (i.e. a string of length 1)
and returns true if it is a vowel, false otherwise.*/

const string = function (x) {
  if ((x === 'a') || (x === 'e') || (x === 'i') || (x === 'o') || (x === 'u')) {
    return true;
  }
  else {
    return false;
  }
}

console.log(string('o'));
console.log(string('t'));
console.log(string('f'));
console.log(string('u'));

/*
Define a function sumArray and a function multiplyArray that sums a
nd multiplies (respectively) all the numbers in an array of numbers.
For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4])
 should return 24.
*/

const array = [1,2,3,4];
let newNum = 0;

const sumArray = function (sumOf) {
  for (let i = 0; i < sumOf.length; i++ ) {
    newNum += sumOf[i];
  }
  return newNum;
}


console.log(sumArray(array));

const arrayTwo = [1,2,3,4];
let newNumTwo = 1;

const multiplyArray = function (multiOf) {
  for (let i = 0; i < multiOf.length; i++) {
    newNumTwo = (newNumTwo * multiOf[i]);
  }
  return newNumTwo;
}

console.log(multiplyArray(arrayTwo));

/*Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset
gaj".*/


let newString = " ";

const secretCode = function (str) {
    for (let i = str.length -1; i >= 0; i--) {
      newString = newString + str[i];
    }
    return newString;
}

console.log(secretCode("jag testar"));

/*Write a function findLongestWord that takes an array of words and
returns the length of the longest one.*/

//NOT WORKING
//could use myList.sort and then myList.shift(); ??




//tried to sort array and display only the longest word using .shift
//It successfully sorts but doesn't execute the shift correctly



 //Tried to use a for loop:

const myList = ["pipper", "jamison", "frank", "samantha"];

const longestWord = " ";

const findLongestWord = function (str) {
  for (let i = 0; i <= str.length; i++) { //loop through each word
      if (str[i].length >= longestWord.length) { //if current word is longer than longestWord variable
        longestWord = str[i];  // store current word in longestWord variable : it is now the longest word
      }
      else {
        longestWord = longestWord; //else keep longestWord variable the same
        return longestWord; //show longestWord on screen
  }
}
}

console.log(findLongestWord(myList));




/*Write a function filterLongWords that takes an array of words and an number i
and returns the array of words that are longer than i.*/

//NOT WORKING
/*
const myWords = ["pipper", "icecream", "book", "timer"];
let myLongWords = " ";

const filterLongWords = function (word) {
  for(let i = 0; i <= word.length; i++) {
    if (word.length > num) {
      return word;
    }
  }
}
*/
