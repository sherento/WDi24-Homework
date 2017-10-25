/*
The Word Guesser
*/

// array of 10 funny english words
const words = ['bumfuzzle', 'cattywampus', 'gardyloo', 'taradiddle', 'billingsgate', 'snickersnee', 'widdershins', 'collywobbles', 'gubbins', 'dipthong'];

// from MDN random documentation
const getRandomInt = function ( min, max ) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // max is exclusive and min is inclusive
}

// use getRandomInt() to choose a random word from array
const word = words[getRandomInt(0, words.length)];

// make array of underscores equal in length to random word chosen
let revealedLetters = [];
for (let i = 0; i < word.length; i++) {
  revealedLetters.push('_');
}

// track guessed letters in allGuesses array and number of guesses left
let allGuesses = [];
let guessesLeft = 6;

const start = function () {
  // loop the game state while it isn't game over
  while (!gameOver()) {
    Hangman();
  }
}

const gameOver = function () {
  // check if player has won or lost
  if ( lose() ) {
    console.log(`Game Over! You stink loser\n
                             _________\n
                                 |    |\n
                                 O    |\n
                                -|-   |\n
                                / \\   |\n
                                      |\n
                             _________|
                `)
    return true;
  } else if ( win() ) {
    console.log(`Congratulations! You've guessed the word "${ word }".\nA winner is you!`);
    return true;
  } else {
    return false;
  }
}

const lose = function () {
  // the player has lost if they have no guesses left
  if ( guessesLeft <= 0 ) {
    return true;
  }
}

const win = function () {
  // the player has won if all their correct guesses match the word
  if ( revealedLetters.join('') === word ) {
    return true;
  }
}

const Hangman = function () {
  // ask player for a letter input, differentiate between first guess
  let guessedLetter;
  if ( guessesLeft === 6 ) {
      guessedLetter = prompt('Welcome to Hangman. Go on, guess a letter:');
  } else {
      guessedLetter = prompt('Take another guess:');
  }

  // let player exit game
  if ( guessedLetter === "stop" || guessedLetter === "quit" ) {
    guessesLeft = 0;
  }

  // check if letter was already guessed
  if ( isDuplicate(guessedLetter) ) {
    console.log(`You've already guessed "${ guessedLetter }"...`);
  } else {
    allGuesses.push(guessedLetter);
    checkMatch(guessedLetter);
  }
}

const isDuplicate = function ( guessedLetter ) {
  // letter is a duplicate if it's indexOf return isn't -1
  if ( allGuesses.indexOf(guessedLetter) !== -1 ) {
    return true;
  } else {
    return false;
  }
}

const checkMatch = function ( guessedLetter ) {
  let match = false;
  //  iterate over the chosen word
  for (let i = 0; i < word.length; i++) {
    // if guessed letter matches, update revealedLetters to reflect match
    if ( word[i] === guessedLetter ) {
      revealedLetters[i] = guessedLetter;
      match = true;
    }
  }

  // if match found, congratulate player
  if ( match ) {
    console.log(`Congratulations! You guessed "${ guessedLetter }" correctly`);
  } else {
    guessesLeft--;
    comfort(guessedLetter);
  }

  // log guessed letters
  console.log(revealedLetters.join(''));
}

const comfort = function ( guessedLetter ) {
  if ( guessesLeft !== 0 && guessesLeft !== 1 ) {
    console.log(`Sorry, no "${ guessedLetter }" here. You have ${ guessesLeft } guesses left`);
  } else if ( guessesLeft === 1 ) {
    console.log(`Sorry, no "${ guessedLetter }" here. You have ${ guessesLeft } guess left`);
  }
}



// *********
// unfactored code

// const guessLetter = function ( letter ) {
//   if ( guessesLeft !== 0 ) {
//     // if letter not yet guessed
//     if ( allGuesses.indexOf(letter) === -1 ) {
//       allGuesses.push(letter);
//       let found = false;
//       // iterate through word
//       for (let i = 0; i < word.length; i++) {
//         // if guessed letter matches
//         if ( word[i] === letter ) {
//           // update correctGuesses to reflect match
//           correctGuesses[i] = letter;
//           found = true;
//         }
//       }
//
//       // log guessed letters
//       console.log(correctGuesses.join(""));
//       // if new letter found
//       if ( found ) {
//         // congratulate player
//         console.log(`Congratulations! You guessed "${ letter }" correctly`);
//       } else {
//         guessesLeft--;
//         if ( guessesLeft !== 0 && guessesLeft !== 1 ) {
//           console.log(`Sorry, no "${ letter }" here. You have ${ guessesLeft } guesses left`);
//         } else if ( guessesLeft === 1 ) {
//           console.log(`Sorry, no "${ letter }" here. You have ${ guessesLeft } guess left`);
//         }
//         // if player out of guesses
//         else {
//           console.log(`Game Over! You stink loser\n
//                         _________\n
//                             |    |\n
//                             O    |\n
//                            -|-   |\n
//                            / \\   |\n
//                                  |\n
//                         _________|
//             `)
//         }
//       }
//
//       // if no letters needed to be guessed
//       if ( correctGuesses.join('') === word ) {
//         // congratulate player for winning
//         console.log(`Congratulations! You've guessed the word "${ word }"`);
//       }
//     }
//     // if letter already guessed, inform player
//     else {
//       console.log(`You've already guessed this letter...`);
//     }
//   } else {
//     console.log(`You've already lost. Why are you still trying to play?`);
//   }
// }
