// // You'll create a simple word guessing game where the user gets infinite tries to guess the word
// // (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to
// hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate
// the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not,
// it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// =======================

// const word = ['b', 'a', 'n', 'a', 'n', 'a'];
// const guesses = ['_', '_', '_', '_', '_', '_'];
// let correctGuess = false;        // triggers a message after a correct guess
// let letters = 3;       // number of different letters in word
//
// const guessLetter = function(guess){
//   for (var i = 0; i < guesses.length; i++) {
//     if(guess === word[i]){
//       guesses[i] = guess;
//       correctGuess = true;        // triggers correct guess message
//     };
//   };
//
//   console.log(guesses.join(' '));
//   if(correctGuess){
//     console.log(`Congratulations, you've found "${guess}"`);
//     correctGuess = false;       // resets the correct guess trigger
//     letters -= 1;
//     if(letters > 0){
//       console.log(`You have ${letters} more letters to find`);
//     }else {
//       console.log('Congratulations, you have won the game!');
//     };
//   };
// };


// ======== Bonus ========

// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter
// (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

// =======================


// const word = ['b', 'a', 'n', 'a', 'n', 'a'];
// const guesses = ['_', '_', '_', '_', '_', '_'];
// let correctGuess = false        // triggers a message after a correct guess
// let letters = 3       // number of different letters in word
// let reward = 0
//
// function getRandomInt(min, max) {                               // found on stackoverflow
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// const guessLetter = function(guess){
//   let occurences = 0        // number of occurences of a letter
//   let bonus = getRandomInt(1, 100)         // the reward for an individual letter - randomly generated number between 1 and 100
  // for (var i = 0; i < guesses.length; i++) {
  //   if(guess === word[i]){
  //     guesses[i] = guess;
  //     correctGuess = true;        // triggers correct guess message
  //     occurences += 1;
//     };
//   };
//
//   console.log(guesses.join(' '));
//   if(correctGuess){
//     console.log(`Congratulations, you've found "${guess}". You have won $${bonus} for every occurence.`);
//     reward += bonus * occurences;
//     console.log(`Your current rewards are $${reward}`);
//     correctGuess = false;       // resets the correct guess trigger
//     letters -= 1
//     if(letters > 0){
//       console.log(`You have ${letters} more letters to find`);
//     }else {
//       console.log('Congratulations, you have won the game!');
//       console.log(`You have won $${reward}!`);
//     };
//   }else{
//     reward -= bonus;
//     console.log(`Sorry, an incorrect guesses subtracts $${bonus} from your rewards`);
//     console.log(`Your reward total now stands at $${reward}.`)
//   };
// };

// =======================


// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user
// guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract
// or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman),
// inform the user that they lost and show a hangman on the log.


// =======================


const word = ['b', 'a', 'n', 'a', 'n', 'a'];
const guesses = ['_', '_', '_', '_', '_', '_'];
const guessedLetters = []
let correctGuess = false;        // triggers a message after a correct guess
let letters = 3;       // number of different letters in word
let hangmanState = 0;

const guessLetter = function(guess){
  if(!guessedLetters.includes(guess)){        // checks if letter has previously been guessed
    for (var i = 0; i < guesses.length; i++) {
      if(guess === word[i]){
        guesses[i] = guess;
        correctGuess = true;        // triggers correct guess message
      };
    };        //for loop end
    guessedLetters.push(guess);
  }else{          // letter has already been guessed
    console.log(`You have already guessed that`);
  };

  console.log(guesses.join(' '));
  if(correctGuess){
    console.log(`Congratulations, you've found "${guess}"`);
    correctGuess = false;       // resets the correct guess trigger
    letters -= 1;
    hangmanState -= 1
    if(letters > 0){
      console.log(`You have ${letters} more letters to find`);
    }else{
      console.log('Congratulations, you have won the game!');
    };
  }else{
    hangmanState += 1;
  };

  if(hangmanState === 6) {
    console.log('You have lost. The dude is dead')
    console.log('      _______')
    console.log('     |/      |')
    console.log('     |      (_)')
    console.log('     |      \\|/')
    console.log('     |       |')
    console.log('     |      / \\')
    console.log('     |')
    console.log('jgs_|___')
  };
};
