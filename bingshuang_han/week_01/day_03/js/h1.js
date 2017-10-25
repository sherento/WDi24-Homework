/*
Array and Functions Bonus Material
*/
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (num1, num2){
  if (num1 >= num2){
  return num1;
  }
  else {
    return num2;
  }
}
console.log( `The max number of 3 and 5 is ${maxOfTwoNumbers(3,5 )} `);
console.log( `The max number of 13 and 5 is ${maxOfTwoNumbers(13,5 )} `);
console.log( `The max number of 3 and 0 is ${maxOfTwoNumbers(3,0 )} `);

//  Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (n1,n2,n3){
  if ( n1 > n2 ){
    if (n1 > n3)
    return n1;
    else
    return n3;
  }
else {
  if (n2 < n3)
  return n3;
  else
  return n2;
}
}
console.log( `The max number of 2,4 and 7 is ${maxOfThree( 2,4,7)} ` );
console.log( `The max number of 12,4 and 7 is ${maxOfThree( 12,4,7)} ` );
console.log( `The max number of 2,14 and 7 is ${maxOfThree( 2,14,7)} ` );

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


const checkVowel = function (c) {
  if (c === 'a' || c === 'A')
  return true;
  else if (c === 'e' || c === 'E')
  return true;
  else if (c === 'i' || c === 'I')
  return true;
  else if (c === 'o' || c === 'O')
  return true;
  else if (c === 'u' || c === 'U')
  return true;
  else
  return false;
}
console.log(checkVowel('c'));
console.log(checkVowel('t'));
console.log(checkVowel('e'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const sumArray = function (array) {
  let result=0;
  for (let i=0 ; i<array.length; i++){
    result +=array[i];
  }
  return result;
}

const multiplyArray = function (array) {
  let result=1;
  for (let i=0 ; i<array.length; i++){
    result *=array[i];
  }
  return result;
}

console.log( `The sum of this array is ${sumArray([2,5,7,8])}` );
console.log( `The sum of this array is ${sumArray([12,45,75,8])}` );
console.log( `The sum of this array is ${sumArray([2,5,7,0])}` );
console.log( `The multiply of this array is ${multiplyArray([2,5,9,8])}` );
console.log( `The multiply of this array is ${multiplyArray([23,6,7,88])}` );

//Bonus

    // Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
    const reverseString = function (string) {
      let newString = '';
      for (let i= string.length-1; i>=0; i--)
      {
        newString +=string[i];
      }
      return newString;
    }
    console.log( `The reverseString of this is  ${reverseString('Big Bang!')}  `);
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function (array){
  let numOfArray = [];  //Declare a number array to hold the length of each word in the given array;
  for (let i= 0 ; i< array.length;i++)
  {
        numOfArray[i] = array[i].length;
  }
  let max = Math.max(...numOfArray)  ;      //use Math.max method to find the max number in a num array.
    return max;

}
console.log (`The length of this string is  ${findLongestWord(['big','am','apple','pneumonoultramicroscopicsilicovolcanoconiosis'])}`);

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
const filterLongWords = function (array,num){
  let numOfArray = [];   //Declare a array hold number--the length of each word in the given array
  let newArray = []; //Declare a newArray to hole the word satisfied the requrement
  for (let i=0; i<array.length ;i++){
    numOfArray[i]=array[i].length;
  }                                   //numOfArray holds the number--the length of each word in the given array
  for (let j=0; j<array.length; j++){
    if ( numOfArray[j] > num )
    newArray.push(array[j]);
    }
  return newArray;
}

console.log(`The words that are longer than 7 is ${filterLongWords(['apple','orange','banana','avacado'],7)}`);
