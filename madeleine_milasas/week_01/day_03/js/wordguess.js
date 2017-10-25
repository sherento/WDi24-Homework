// ~~~~~~~ WORD GUESS GAME ~~~~~~~~~~~

// You'll create a simple word guessing game where the user gets infinite tries to guess the word
// (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).


// Create two global arrays:
// one to hold the letters of the word (e.g. 'F', 'O', 'X'),
const answerLetters = ['F', 'O', 'X'];
// and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
const guessedLetters = ['_','_','_'];

// initialise variable for endgame check
let correctGuessCounter = 0;

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
const guessLetter = function (guessRaw) {

  // convert input to uppercase so user can enter either upper or lower
  const guess = guessRaw.toUpperCase();

  let guessCorrect = false;

  // Iterate through the word letters and see if the guessed letter is in there.
  for (let i = 0; i < answerLetters.length; i++) {
    if (answerLetters[i] === guess) {
      // If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
      guessedLetters[i] = answerLetters[i];
      guessCorrect = true;
      correctGuessCounter++;
      break;
    }
  }

  // When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
  if (guessCorrect) {
    console.log( `Congrats, you found a letter!` );
  } else {
    console.log(`Sorry, try again.`);
  }
  // display word status inc blanks
  let wordProgress = '';
  for (let i = 0; i < guessedLetters.length; i++) {
    wordProgress += guessedLetters[i];
  }
  console.log( wordProgress );

  // It should also figure out if there are any more letters that need to be guessed,
  // and if not, it should congratulate the user for winning the game.
  if (answerLetters.length === correctGuessCounter) {
    console.log(`CONGRATS! YOU FOUND THE WORD!`);
  }
};







// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
