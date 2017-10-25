const getRandomInt = function ( min, max ) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // max is exclusive and min is inclusive
}

// array of 10 funny english words
const words = ['bumfuzzle', 'cattywampus', 'gardyloo', 'taradiddle', 'billingsgate', 'snickersnee', 'widdershins', 'collywobbles', 'gubbins', 'dipthong'];

// use getRandomInt() to choose a random word from array
const word = words[getRandomInt(0, words.length)];

// make array of underscores from random word chosen
let correctGuesses = [];
for (let i = 0; i < word.length; i++) {
  correctGuesses.push('_');
}

// track guessed letters in allGuesses array and number of guesses left
let allGuesses = [];
let guessesLeft = 6;

const guessLetter = function ( letter ) {
  if ( guessesLeft !== 0 ) {
    // if letter not yet guessed
    if ( allGuesses.indexOf(letter) === -1 ) {
      allGuesses.push(letter);
      let found = false;
      // iterate through word
      for (let i = 0; i < word.length; i++) {
        // if guessed letter matches
        if ( word[i] === letter ) {
          // update word to reflect match
          correctGuesses[i] = letter;
          found = true;
        }
      }

      // log guessed letters
      console.log(correctGuesses.join(""));
      // if new letter found
      if ( found ) {
        // congratulate user
        console.log(`Congratulations! You guessed "${ letter }" correctly`);
      } else {
        guessesLeft--;
        if ( guessesLeft !== 0 && guessesLeft !== 1 ) {
          console.log(`Sorry, no "${ letter }" here. You have ${ guessesLeft } guesses left`);
        } else if ( guessesLeft === 1 ) {
          console.log(`Sorry, no "${ letter }" here. You have ${ guessesLeft } guess left`);
        }
        // if player out of guesses
        else {
          console.log(`Game Over! You stink loser\n
                        _________\n
                            |    |\n
                            O    |\n
                           -|-   |\n
                           / \\   |\n
                                 |\n
                        _________|
            `)
        }
      }

      // if no letters needed to be guessed
      if ( correctGuesses.join('') === word ) {
        // congratulate user for winning
        console.log(`Congratulations! You've guessed the word "${ word }"`);
      }
    }
    // if letter already guessed, inform player
    else {
      console.log(`You've already guessed this letter...`);
    }
  } else {
    console.log(`You've already lost. Why are you still trying to play?`);
  }
}
