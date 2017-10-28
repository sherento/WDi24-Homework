// ~~~~~~~ WORD GUESS GAME ~~~~~~~~~~~


// WHEEL. OF.

// .d888               888
// d88P"                888
// 888                  888
// 888888 .d88b. 888d888888888888  88888888b.  .d88b.
// 888   d88""88b888P"  888   888  888888 "88bd8P  Y8b
// 888   888  888888    888   888  888888  88888888888
// 888   Y88..88P888    Y88b. Y88b 888888  888Y8b.
// 888    "Y88P" 888     "Y888 "Y88888888  888 "Y8888


// You'll create a simple word guessing game where the user gets infinite tries to guess the word



// create two global arrays:
// one to hold the letters of the word (e.g. 'F', 'O', 'X'),
const answerLetters = ['K', 'E', 'E', 'P', 'S', 'A', 'K', 'E'];
// and one to hold the current guessed letters (e.g. it would start with '_', '_', '_')
const guessedLetters = ['_', '_', '_', '_', '_', '_', '_', '_'];

// initialise variable for endgame check
let correctGuessCounter = 0;

// start with a reward amount of $0
let reward = 0;

// write a function called guessLetter that will:
// take one argument, the guessed letter
const guessLetter = function (guessRaw) {

  // convert input to uppercase so user can enter either upper or lower
  const guess = guessRaw.toUpperCase();

  let guessCorrect = false;
  let letterOccurs = 0; // variable to flag multiple instances

  // generate random reward amount
  const randRewardAmount = Math.ceil( Math.random() * 1000 ); // random # between 0 and 1 * 1000 and rounded up
  console.log( `Letter value: ${ randRewardAmount } dollars.` );

  // iterate through the answer letters and see if the guessed letter is in there
  for (let i = 0; i < answerLetters.length; i++) {
    if (answerLetters[i] === guess) {
      // if the guessed letter matches, changed the guessed letters array to reflect that
      guessedLetters[i] = answerLetters[i];
      guessCorrect = true;
      correctGuessCounter++;
      letterOccurs++;
    }
  }

  // when it's done iterating, it should log the current guessed letters ('F__')
  // and congratulate the user if they found a new letter
  if (guessCorrect) {
    // add to user reward (multiplying for multiples)
    reward = reward + (randRewardAmount * letterOccurs);
    // congratulate user
    console.log( `Congrats, you found a letter!` );
    console.log( `This letter brings your reward up to ${ reward } dollars!` );
    if (reward < 0) {
      console.log( `(But it still looks like you owe us money.)` );
    }
  } else {
    // subtract from user reward
    reward -= randRewardAmount;
    console.log( `Sorry, try again.` );
    console.log( `By the way, your reward just went down to ${ reward } dollars.` );
    if (reward < 0) {
      console.log( `Looks like you owe us money.` );
    }
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
    // when they guess the word, log their final reward amount.
    console.log( `Your final reward amount is ${ reward } dollars!` );
    if (reward < 0) {
      console.log( `(So you still owe us money)` );
    }
  }
};

// pretend you don't know the word
// and call guessLetter multiple times with various letters to check that your program works.
console.log( `WORD GUESSER GAME` );
console.log( `Testing the game...` );
console.log( `If I guess 'T':` );
guessLetter('T');
console.log( `If I guess 'a':` );
guessLetter('a');
console.log( `If I guess 'i':` );
guessLetter('i');
console.log( `If I guess 'e':` );
guessLetter('e');
console.log( `Guess a letter using the function guessLetter(yourGuessHere)` );
