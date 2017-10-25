// ~~~~~~~ WORD GUESS GAME ~~~~~~~~~~~

// You'll create a simple word guessing game where the user gets infinite tries to guess the word
// (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).


// Keep track of all the guessed letters (right and wrong)
const usedLetters = [];


// Keep track of the state of the hangman as a number (starting at 0)
let hangman = 0;


// create two global arrays:
// one to hold the letters of the word (e.g. 'F', 'O', 'X'),
const answerLetters = ['T', 'I', 'M', 'E'];
// and one to hold the current guessed letters (e.g. it would start with '_', '_', '_')
const guessedLetters = ['_','_','_', '_'];

// initialise variable for endgame check
let correctGuessCounter = 0;


const asciiArt = ` ___________.._______\n| .__________))______|\n| | / /      ||\n| |/ /       ||\n| | /        ||.-''.\n| |/         |/  _  \\n| |          ||  \`/,|\n| |          (\\\`_.'\n| |         .-\`--'.\n| |        /Y . . Y\\n| |       // |   | \\\n| |      //  | . |  \\\n| |     ')   |   |   (\`\n| |          ||'||\n| |          || ||\n| |          || ||\n| |          || ||\n| |         / | | \\n""""""""""|_\`-' \`-' |"""|\n|"|"""""""\ \       '"|"|\n| |        \ \        | |\n: :         \ \       : :\n. .          \`'       . .`





// ---- function start ----
// write a function called guessLetter that will:
// take one argument, the guessed letter
const guessLetter = function (guessRaw) {
  // initialise guess flag
  let guessCorrect = false;
  // initialise used flag;
  let usedLetter = false;

  // convert input to uppercase so user can enter either upper or lower
  const guess = guessRaw.toUpperCase();

  // and only let the user guess a letter once. If they guess a letter twice, do nothing.
  for (let i = 0; i < usedLetters.length; i++) {
    if (guess === usedLetters[i]) {
      usedLetter = true;
    }
  }

  if (usedLetter === false) {
    usedLetters.push(guess);

    // iterate through the answer letters and see if the guessed letter is in there
    for (let i = 0; i < answerLetters.length; i++) {
      if (answerLetters[i] === guess) {
        // if the guessed letter matches, changed the guessed letters array to reflect that
        guessedLetters[i] = answerLetters[i];
        guessCorrect = true;
        correctGuessCounter++;
      }
    }

    // when it's done iterating, it should log the current guessed letters ('F__')
    // and congratulate the user if they found a new letter
    if (guessCorrect) {
      console.log( `Congrats, you found a letter!` );
    } else {
      console.log( `Sorry, try again.` );
      // add to hangman number every time they make a wrong guess.
      hangman++;
      console.log( `Hangman limbs: ${ hangman } :(` );
      // Once the number reaches 6 (a reasonable number of body parts for a hangman)
      if (6 === hangman) {
        console.log( `NO! You have lost.` );
        console.log( asciiArt );
      }
        // inform the user that they lost and show a hangman on the log.
    }
    // construct string with guessed word including blanks and print
    let wordProgress = '';
    for (let i = 0; i < guessedLetters.length; i++) {
      wordProgress += guessedLetters[i];
    }
    console.log( `The word so far looks like: ${ wordProgress }` );

    // it should also figure out if there are any more letters that need to be guessed,
    // and if not, it should congratulate the user for winning the game
    if (answerLetters.length === correctGuessCounter) {
      console.log( `CONGRATS! YOU FOUND THE WORD!` );
    }
  }
};

// Pretend you don't know the word
// and call guessLetter multiple times with various letters to check that your program works.
console.log( `WORD GUESSER GAME` );
console.log( `Testing the game...` );
console.log( `If I guess 'a':` );
guessLetter('a');
console.log( `If I guess 'i':` );
guessLetter('i');
console.log( `Guess a letter using the function guessLetter(yourGuessHere)` );
