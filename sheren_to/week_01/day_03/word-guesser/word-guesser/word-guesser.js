console.log("working?");

let word = ['f', 'o', 'x'];//letters of word
let lettersGuessed = ['a', 'b', 'f', 'o', 'c', 'x']; //guessed letters

const guessLetter = function(lettersGuessed) {
//for ( i = 0, i < lettersGussed.length; i++) {
  if (word.includes(lettersGuessed)) {
    console.log(`${lettersGuessed} selected is correct!`);
    return true;
  } else {
    console.log(`${lettersGuessed} is not correct, please try again!`);
    return false;
  }
};
//once guessed remove letter from array1 and array2
console.log(guessLetter);
