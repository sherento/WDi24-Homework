// ******* MAX OF TWO NUMBERS *************************************************
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
const maxOfTwoNumbers = function (a, b) {
  if ( a > b ) {
    return a;
  } else {
    return b;
  }
};

// testing
console.log( `MAX OF TWO EXERCISE` );
console.log( `The greater of 8 and 1000 is ${ maxOfTwoNumbers( 8, 1000 ) }.` );
console.log( `The greater of 45 and 2 is ${ maxOfTwoNumbers( 45, 2 ) }.` );
console.log( `The greater of -109 and 57 is ${ maxOfTwoNumbers( -109, 57 ) }.` );
console.log( `The greater of 88 and 0 is ${ maxOfTwoNumbers( 88, 0 ) }.` );



// ****** MAX OF THREE NUMBERS ****************************************************
// Define a function maxOfThree
// that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (a, b, c) {
  return Math.max( a, b, c );
};

// testing
console.log( `MAX OF THREE EXERCISE` );
console.log( `Max of 2, 3 and 5: ${ maxOfThree( 2, 3, 5 ) }` );
console.log( `Max of 665, 78234 and -124: ${ maxOfThree( 665, 78234, -124 ) }` );
console.log( `Max of 12, 784 and 0: ${ maxOfThree( 12, 784, 0 ) }` );
console.log( `Max of 12, "5" and 0: ${ maxOfThree( 12, "5", 0 ) }` ); // interesting
console.log( `Max of 12, "55" and 0: ${ maxOfThree( 12, "55", 0 ) }` ); // interesting as above, Math.max must convert strings



// ******* VOWEL CHECK ***********************************************************
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowelCheck = function ( str ) {
  const vowels = [ 'a','e','i','o','u','A','E','I','O','U' ];
  for (let i = 0; i < vowels.length; i++) {
    if (str === vowels[i]) {
      return true;
    }
  }
  return false; // any consonants, multi-character strings or non-strings should return false
};

// testing
console.log( `VOWEL CHECK EXERCISE` );
console.log( `Is 'a' a vowel? -->   ${ vowelCheck('a') }` );
console.log( `Is 'k' a vowel? -->   ${ vowelCheck('k') }` );
console.log( `Is 'U' a vowel? -->   ${ vowelCheck('U') }` );
console.log( `Is 'dog' a vowel? -->   ${ vowelCheck('dog') }` );
console.log( `Is 33 a vowel? -->   ${ vowelCheck(33) }` );



// ******** SUM AND MULTIPLY ***********************************************************
// Define a function sumArray and a function multiplyArray
// that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const sumArray = function (numberArray) {
  let total = 0;
  for (let i = 0; i < numberArray.length; i++) {
    total += numberArray[i];
  }
  return total;
};

const multiplyArray = function (numberArray) {
  let total = 1;
  for (let i = 0; i < numberArray.length; i++) {
    total *= numberArray[i];
  }
  return total;
};

//testing
console.log( `SUM AND MULTIPLY EXERCISE` );
const nums = [1, 2, 3, 4];
console.log( `The sum of 1, 2, 3 and 4 is ${ sumArray( nums ) }.` );
console.log( `The multiplication of 1, 2, 3 and 4 is ${ multiplyArray( nums )}.` );
const nums2 = [51, 52, 53, 54];
console.log( `The sum of 51, 52, 53 and 54 is ${ sumArray( nums2 ) }.` );
console.log( `The multiplication of 51, 52, 53 and 54 is ${ multiplyArray( nums2 )}.` );


// BONUS
// ********* REVERSE STRING ************************************************************
// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = function (str) {
  let reverseStr = '';
  for (let i = 1; i <= str.length; i++) {
    reverseStr += str[ str.length - i ]
  }
  return reverseStr;
};

// testing
console.log( `REVERSE STRINGS EXERCISE` );
console.log( `The reverse of 'cat' is '${ reverseString( 'cat' ) }'.` );
console.log( `The reverse of 'bolognese' is '${ reverseString( 'bolognese' ) }'.` );
console.log( `The reverse of 'dog was I' is '${ reverseString( 'dog was I' ) }'.` );




// *********** FIND LONGEST WORD ******************************************************
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function (words) {
  let longest = 0; // variable to hold longest word length, will get reassigned any time a word length is longer than previous one
  for (let i = 0; i < words.length; i++ ) {
    let word = words[i];
    if ( word.length > longest ) {
      longest = word.length;
    }
  }
  return longest;
};

// testing
console.log( `FIND LONGEST WORD LENGTH EXERCISE` );
console.log( `The length of the longest word of 'foo', 'bar' and 'stick' is ${ findLongestWord( ['foo', 'bar', 'stick'] ) }.` );
console.log( `The length of the longest word of 'cat', 'dog' and 'pineapple' is ${ findLongestWord( ['cat', 'dog', 'pineapple'] ) }.` );
console.log( `The length of the longest word of 'adorable', 'terrifying' and 'pompom' is ${ findLongestWord( ['adorable', 'terrifying', 'pompom'] ) }.` );
console.log( `The length of the longest word of 'bar', 55 and 'pompom' is ${ findLongestWord( ['bar', 55, 'pompom'] ) }.` );
console.log( `The length of the longest word of 'bar', 33333333333 and 'pompom' is ${ findLongestWord( ['bar', 33333333333, 'pompom'] ) }.` );




// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
