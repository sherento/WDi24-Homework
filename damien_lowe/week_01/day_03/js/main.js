// Array and Functions Bonus Material
//

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (num1, num2) {
  let output;
  //Comparison of the two numbers
  if (num1 > num2 ) {
    output = num1;
  } else {
    output = num2;
  }

  console.log(`The greater number of ${num1} and ${num2} is ${output}`);
};

maxOfTwoNumbers(4,2);

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThreeNumbers = function (num1, num2, num3) {
  let output;
  //Comparison of the two numbers
  if (num1 > num2 && num1 > num3 ) {
    output = num1;
  } else if (num2 > num3) {
    output = num2;
  } else {
    output = num3;
  }

  console.log(`The greater number of ${num1}, ${num2} and ${num3} is ${output}`);
};

maxOfThreeNumbers(1,2,3);
maxOfThreeNumbers(32,5,27);
maxOfThreeNumbers(6,2,1);
maxOfThreeNumbers(100,46,23);

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const isVowel = function (char) {
  //Convert input to lower case, so we don't need to account for AEIOU
  char.toLowerCase();

  //Check if input is a single character
  if (char.length === 1) {
    if ("a" === char || "e" === char || "i" === char || "o" == char || "u" === char) {
      return true;
    } else {
      return false;
    }
  };
};

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function (arr) {
  //Store the output, starting with nothing
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };

  return sum;
};

const multiplyArray = function (arr) {
  //Store the output, staritng with 1
  let multiply = 1;

  for (let i = 0; i < arr.length; i++) {
    multiply *= arr[i];
  };

  return multiply;
};

// Bonus
//
// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".


const reverseString = function (str) {
  //Store the reversed string into an empty string
  let output = "";

  //Decrement loop from the last index (str.length - 1) up to the 0th index, storing each letter
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  };

  console.log(`${output}`);
};

reverseString("Hello");
reverseString("HELLO");
reverseString("My name is Damien Lowe");
reverseString("This function is really cool!");

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord = function (arr) {
  //To compare the value of each word
  let longest = 0;
  let value = 0;

  //Loop through the words in the array
  for (let i = 0; i < arr.length; i++) {
    //Get the length of the word
    value = arr[i].length;
    //Compare the length with the current highest
    if (value > longest) {
      longest = value;
    };
  };

  console.log(`${longest}`);
};

findLongestWord(["one", "two", "three", "four", "five"]);
findLongestWord(["hello", "my", "name", "is", "Damien", "Lowe"]);
findLongestWord(["This", "is" , "a", "cool", "function!"]);

// Write a function filterLongWords that takes an array of words and an number i and returns the
// array of words that are longer than i.

const filterLongWords = function (arr, num) {
  //Output empty array
  let outputArray = [];
  //Store length of the current word in array
  let wordLength = 0;
  //Loop through the input array, checking length of each word
  for (let i = 0; i < arr.length; i++) {
    wordLength = arr[i].length;
    //Check if length is greater than num
    if (wordLength > num) {
      outputArray.push(arr[i]);
    };
  };

  console.log(outputArray);
};

filterLongWords(["one", "two", "three", "twenty"], 3);
filterLongWords(["a", "bc", "def"], 1 );
filterLongWords(["a", "b", "", "awfaf", "aw"], 0 );

// Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries
// to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
// and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user
// if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not,
// it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// // The two global arrays
// gameWord = ["F", "O", "X"];
// overallAttempts = ["_", "_", "_"];
//
// //Game function
// const guessLetter = function (char) {
//   //To store current changes to be made to the overallAttempts
//   currentAttempt = overallAttempts;
//   //Have you found all the letters?
//   let complete = false;
//   //Convert attempt to uppercase, incase user inputs lowercase letter
//   char.toUpperCase();
//
//   // Iterate through word letters
//   for (let i = 0; i < gameWord.length; i++) {
//     //See if guessed letter matches, store it into the currentAttempt
//     if (char === gameWord[i]) {
//       currentAttempt[i] = char;
//       console.log("You have found a correct letter! Keep at it!");
//     };
//     //Then add the change to the overallAttempts
//     overallAttempts[i] = currentAttempt[i];
//   };
//
//   //Check if the gameWord and overallAttempts array are the same
//   for (let i = 0; i < gameWord.length; i++) {
//     if (gameWord[i] !== overallAttempts[i]) {
//       complete = false;
//     } else {
//       complete = true;
//     }
//   };
//
//   //If they have found all the letters, tell then they have won
//   if (complete) {
//     console.log("Congratulations, you have won the game!");
//     console.log (" _________     \n");
//     console.log ("|         |    \n");
//     console.log ("|         0    \n");
//     console.log ("|        /|\\  \n");
//     console.log ("|        / \\  \n");
//     console.log ("|              \n");
//     console.log ("|              \n");
//
//   };
// };


// Bonus: Make it like Hangman:

// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once.
// If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number
// every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they
// lost and show a hangman on the log.

//Global variables
let gameWord = ["F", "O", "X"];
let overallAttempts = ["_", "_", "_"];
let guessedLetters = [];
let lives = 6;

//Game function
const guessLetter = function (char) {
  //To store current changes to be made to the overallAttempts
  currentAttempt = overallAttempts;
  //Have you found all the letters?
  let complete = false;
  let wrongLetter = true;
  //Convert attempt to uppercase, incase user inputs lowercase letter
  char = char.toUpperCase();

  //Check if you have seen the letter before
  for (let i = 0; i < guessedLetters.length; i++) {
    if (char === guessedLetters[i]) {
      return "You have tried this letter before!"
    };
  };

  //Check that you have enough lives remaining to continue
  if (0 === lives) {
    return "You have no more lives remaining!"
  };

  //Iterate through word letters
  for (let i = 0; i < gameWord.length; i++) {
    //See if guessed letter matches, store it into the currentAttempt
    if (char === gameWord[i]) {
      currentAttempt[i] = char;
      console.log("You have found a correct letter! Keep at it!");
      //Then add the change to the overallAttempts
      overallAttempts[i] = currentAttempt[i];
      //Add char to guessedLetters[]
      guessedLetters.push(char);
      wrongLetter = false;
      break;
    }
  };

  //Change number of attemps if wrongLetter
  if (wrongLetter) {
     guessedLetters.push(char);
     console.log("Oh No! Your guess was incorrect");
     console.log (" _________     \n");
     console.log ("|         |    \n");
     console.log ("|         0    \n");
     console.log ("|        /|\\  \n");
     console.log ("|        / \\  \n");
     console.log ("|              \n");
     console.log ("|              \n");
     lives--;
  };

  //Log how many remaining attemps after a mistake
  console.log(`You have ${lives} attempts remaining!`);

  //Check if the gameWord and overallAttempts array are the same
  for (let i = 0; i < gameWord.length; i++) {
    if (gameWord[i] !== overallAttempts[i]) {
      complete = false;
    } else {
      complete = true;
    }
  };

  //If they have found all the letters, tell then they have won
  if (complete) {
    console.log("Congratulations, you have won the game!");
  }
};


//let rewardAmount = 0;
//Return a random value <= 10000
//Math.floor((Math.random() * 10000) + 1);
//Add if right, subract if wrong
//Log money won
