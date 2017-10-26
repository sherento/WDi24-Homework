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

/*
You'll create a simple word guessing game
 where the user gets infinite tries to guess the word
(like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
and one to hold the current guessed letters
(e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.

When it's done iterating, it should log the current guessed letters ('F__')
and congratulate the user if they found a new letter.

It should also figure out if there are any more letters that need to be guessed,
and if not, it should congratulate the user for winning the game.

Pretend you don't know the word,
and call guessLetter multiple times with various letters to check that your program works.
*/

const correctWord = ["F", "O", "X"]; // letters making up the correct word

let guesses = []; // empty array which will contain correctly guessed letters


const guessLetter = function (letter) {
  for (let i = 0; i < correctWord.length; i++) {
    if (correctWord.includes(letter)) {
      guesses.push(letter);
      console.log( `Congrats man, you found a new letter.` );
      break;
    } else {
      console.log( `Naw man...naw. Try a different letter.` );
    }
  }

  for (let i = 0; i < guesses.length; i++) {
    if (guesses[i] === correctWord[i]) {
      console.log( `Congrats man, here's your trophy.` );
      break;
    } else {
      console.log( `Keep on guessin baby boy. It's a big alphabet out there.`);
    }
  };

  console.log( `${guesses}` );
};

guessLetter("F");
guessLetter("O");
guessLetter("X");
guessLetter("D");
