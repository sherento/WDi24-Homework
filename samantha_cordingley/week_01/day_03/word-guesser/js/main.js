/*Create two global arrays: one to hold the letters of the word
(e.g. 'F', 'O', 'X'), and one to hold the current guessed letters
(e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to
reflect that.

//Puesdo Code

// create const with correct answer in this case FOX

//create const to store correctly guessed letters

//when player guesses, run function to see if guess matches, "F", "O" or "X"

//if guess DOES match a letter, store that letter in the correct index in guessed letters const

//else DOESN'T match a letter, don't change the guessed letters const

//after each guess return the current guessed letters cont

//AND congratulate the user if they found a new letter

//check to see if there are any letters to be filled

// if there is let the user guess again

//else congratulate the user for winning the game

*/
//global arrays
const word = ["F", "0", "X"];

const answer = ["_", "_", "_"];

let remainingLetters = 3; //how many letters to be guessed


while (remainingLetters > 0) {
  console.log(answer.join(" "));//show player their progress
  let guess = prompt("Please guess a letter");//get a guess from the player
  if(guess === null) {
    break;
  }
  else if (guess.length !== 1) {
    console.log("Please enter a single letter");
  }
  else  {
    for (let i = 0; i < word.length; i++) { // check for match with the guess
      if (word[i] === guess) {
        answer[i] = guess;
        console.log("You guessed a correct letter");
        remainingLetters--;
      }
      else if (remainingLetters === 0) {
        console.log (`Congratulations you won the word was ${word}.`); //congratulate on winning, not sure where to put this if statement
        console.log(answer.join( " "));
      }
      else {
        console.log(`Guess again, you have ${remainingLetters.length} letters to go!`); //if there are remainingLetters to be guessed show 'guess again message'
      }
    }
  }
// end of game loop
}


//call guessLetter multiple times with various letters to check that your program works.
