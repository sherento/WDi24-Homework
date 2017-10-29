
const word = ['f','o','x'];
const blankLetters = ['_','_','_'];
const guessLetter = function (word) {
    if
      (word.indexof (blankLetters) === -1) {
      console.log('you guessed it');
  } else if
      (word.indexof (blankLetters) >-1) {
      console.log('guess again');
  }

  };

guessLetter ('f');
