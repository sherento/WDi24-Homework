// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work,
// or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const maxOfTwoNumbers = function(num1, num2){
  if(num1 > num2){
    return num1;
  }else{
    return num2;
  };
};

const maxOfThree = function(num1, num2, num3){
  let maxNum = num1;
  if(num2 > maxNum){
    maxNum = num2;
  };
  if(num3 > maxNum){
    maxNum = num3;
  };

  return maxNum;
};

const vowelCheck = function(char){
  let vowels = 'aeiou';
  return vowels.includes(char);
};

const sumArray = function(array){
  let arrayTotal = 0;
  for (var i = 0; i < array.length; i++) {
    arrayTotal += array[i];
  };

  return arrayTotal;
}

//console.log(sumArray([1, 2, 3, 4]))

const multiplyArray = function(array){
  let arrayTotal = 1;
  for (var i = 0; i < array.length; i++) {
    arrayTotal = arrayTotal * array[i];
  };

  return arrayTotal;
};

// console.log(multiplyArray([1, 2, 3, 4]))

//===========  Bonus ===========

// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i
// and returns the array of words that are longer than i.

const reverseString = function(phrase){
  let reversed = ''
  for (var i = phrase.length - 1; i >= 0; i--) {
    reversed += phrase[i];
  };

  return reversed;
};

//console.log(reverseString('ham sandwich'))

const findLongestWord = function(words){
  let maxWordLength = 0;
  for (var i = 0; i < words.length; i++) {
    if(words[i].length > maxWordLength){
      maxWordLength = words[i].length;
    };
  };

  return maxWordLength;
};

// console.log(findLongestWord(['ham', 'winter', 'bananas']))

const filterLongWords = function(array, num){
  let filteredList = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i].length > num){
      filteredList.push(array[i]);
    };
  };

  return filteredList;
};

// console.log(filterLongWords(['ham', 'spam', 'sandwich'], 3))
