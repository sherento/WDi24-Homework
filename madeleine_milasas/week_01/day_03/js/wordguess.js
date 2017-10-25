// ~~~~~~~ WORD GUESS GAME ~~~~~~~~~~~

// You'll create a simple word guessing game where the user gets infinite tries to guess the word
// (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).


// create two global arrays:
// one to hold the letters of the word (e.g. 'F', 'O', 'X'),
const answerLetters = ['F', 'O', 'X'];
// and one to hold the current guessed letters (e.g. it would start with '_', '_', '_')
const guessedLetters = ['_','_','_'];

// initialise variable for endgame check
let correctGuessCounter = 0;

console.log( `WORD GUESSER GAME` );
console.log( `Guess a letter using the function guessLetter(yourGuessHere)` );


// write a function called guessLetter that will:
// take one argument, the guessed letter
const guessLetter = function (guessRaw) {

  // convert input to uppercase so user can enter either upper or lower
  const guess = guessRaw.toUpperCase();

  let guessCorrect = false;

  // iterate through the answer letters and see if the guessed letter is in there
  for (let i = 0; i < answerLetters.length; i++) {
    if (answerLetters[i] === guess) {
      // if the guessed letter matches, changed the guessed letters array to reflect that
      guessedLetters[i] = answerLetters[i];
      guessCorrect = true;
      correctGuessCounter++;
      break;
    }
  }

  // when it's done iterating, it should log the current guessed letters ('F__')
  // and congratulate the user if they found a new letter
  if (guessCorrect) {
    console.log( `Congrats, you found a letter!` );
  } else {
    console.log( `Sorry, try again.` );
  }
  // construct string with guessed word including blanks and print
  let wordProgress = '';
  for (let i = 0; i < guessedLetters.length; i++) {
    wordProgress += guessedLetters[i];
  }
  console.log( `Your word so far looks like: ${ wordProgress }` );

  // it should also figure out if there are any more letters that need to be guessed,
  // and if not, it should congratulate the user for winning the game
  if (answerLetters.length === correctGuessCounter) {
    console.log( `CONGRATS! YOU FOUND THE WORD!` );
  }
};







// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
