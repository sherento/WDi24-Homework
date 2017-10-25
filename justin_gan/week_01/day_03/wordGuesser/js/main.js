// array of 10 funny english words
const words = ['bumfuzzle', 'cattywampus', 'gardyloo', 'taradiddle', 'billingsgate', 'snickersnee', 'widdershins', 'collywobbles', 'gubbins', 'dipthong'];

const getRandomInt = function ( min, max ) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // max is exclusive and min is inclusive
}
const word = words[getRandomInt(0, words.length)];
let letters = [];
let guesses = [];
let found;

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
  guesses.push('_');
}

const guessLetter = function ( letter ) {
  found = false;
  // iterate through letters
  for (let i = 0; i < letters.length; i++) {
    // if guessed letter matches
    if ( letters[i] === letter ) {
      // update word to reflect match
      guesses[i] = letter;
      found = true;
    }
  }

  // log guessed letters
  console.log(guesses.join(""));
  // if new letter found
  if ( found ) {
    // congratulate user
    console.log(`Congratulations! You guessed "${ letter }" correctly`);
  }

  // if no letters needed to be guessed
  if ( guesses.join('') === letters.join('') ) {
    // congratulate user for winning
    console.log(`Congratulations! You've guessed the word ${ word }`);
  }
}
