const getRandomInt = function ( min, max ) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // max is exclusive and min is inclusive
}

// array of 10 funny english words
const words = ['bumfuzzle', 'cattywampus', 'gardyloo', 'taradiddle', 'billingsgate', 'snickersnee', 'widdershins', 'collywobbles', 'gubbins', 'dipthong'];

// use getRandomInt() to choose a random word from array
const word = words[getRandomInt(0, words.length)];

// make array of letters & array of underscores from random word chosen
let letters = [];
let correctGuesses = [];

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
  correctGuesses.push('_');
}

let allGuesses = [];
let numGuesses = 0;


const guessLetter = function ( letter ) {
  let found = false;
  // iterate through letters
  for (let i = 0; i < letters.length; i++) {
    // if guessed letter matches
    if ( letters[i] === letter ) {
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
  }

  // if no letters needed to be guessed
  if ( correctGuesses.join('') === letters.join('') ) {
    // congratulate user for winning
    console.log(`Congratulations! You've guessed the word ${ word }`);
  }
}
