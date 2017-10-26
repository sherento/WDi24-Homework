/*
Homework: The Word Guesser

You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

    Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
    Write a function called guessLetter that will:
    Take one argument, the guessed letter.
    Iterate through the word letters and see if the guessed letter is in there.
    If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
    When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
    It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
    Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

Bonus: Make it more like Wheel of Fortune:

    Start with a reward amount of $0
    Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
    When they guess the word, log their final reward amount.
*/

//version 1 (To run this code, you need to // the version 2 code )
//*************************************************************************************************
const orginArray = ['F','O','X'];               //create one global array to hold the word.
let guessArray= ['_', '_' , '_'];              //create one  global array to hold the guessed letter;
let reward =100;                                   //Make it more like Wheel of Fortune
let guessTemp =[0,0,0];                         // create one global array for checking answer

console.log(`Now, your reward is ${reward}, Use your imagination, and give the start`);

const checkAnswer = function (array){               //checkAnswer function use to check if the guessArray === orginArray? if Yes, you win. Else,try again;
  for (let i=0; i< array.length; i++){
    if ( 0 === array[i] )
    return false;
    }
    return true;
}


const guessLetter = function (char) {
  if ( reward <= 0)
  return "Sorry, your game is over!"                   // check the reward, if <=0 , the game is over;
  let x= 0;                                             //check if the user get some ring character or not; if yes->x= 1
  for (let i=0; i<orginArray.length; i++)
  {
    if (char === orginArray[i])              //if the user guessed the right character. put this character into guessArray.
    {
      guessArray[i] = orginArray[i];
      guessTemp[i] = 1;                          // to record the index of guessed character;
      console.log(`You got a right letter ${guessArray}`);
      reward += Math.ceil (50*Math.random ());
      x = 1;
      console.log(`Congradulations! Your reward is ${reward}`);
    }
  }
  if ( x === 0 ){
    console.log('Sorry, try again!');
    reward -= Math.ceil (10*Math.random ());
    console.log(`your reward is ${reward} now`);
  }

  let result = checkAnswer (guessTemp);       //check the guessArray equals to originArray or not
  if (result)
  {
    alert ('You win the game!');
  }
}

/*

    Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
    Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
    Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

*/
//version 2 (To run this code, you need to // the version 1 code )
//*************************************************************************************************
const orginArray = ['F','O','X'];               //create one global array to hold the word.
let guessArray= ['_', '_' , '_'];              //create one  global array to hold the guessed letter;
let guessTemp =[0,0,0];                         // create one global array for checking answer
let hangmaNum = 0;                              //create a number to track the state of hungman;
let allGuessLetter = ['_'];

const checkAnswer = function (array){               //checkAnswer function use to check if the guessArray === orginArray? if Yes, you win. Else,try again;
  for (let i=0; i< array.length; i++){
    if ( 0 === array[i] )
    return false;
    }
    return true;
}

const ifCisPut = function ( c ) {  //When c is not in the originArray list, check whether c is guessed not. if yes. nothing. otherwise hungmaNum ++
  let b = 1;
  for (var i = 0; i< allGuessLetter.length;i++){
    if ( c === allGuessLetter[i] )
     b = 0;
  }
   if ( b ){
    allGuessLetter.push (c);
    hangmaNum +=1;
  }


}

const guessLetter = function (char) {
  let c=char;
  if (hangmaNum >=6)
  alert ('Sorry, you lost the game');
  let x= 0;                                             //check if the user get right character or not; if yes->x= 1
  for (let i=0; i<orginArray.length; i++)
  {
    if (char === orginArray[i])                            //if the user guessed the right character. Get this character into guessArray.
    {
      guessArray[i] = orginArray[i];
      guessTemp[i] = 1;                          // to record the index of guessed character;
      console.log(`You got a right letter ${guessArray}`);
      x = 1;
      if ( hangmaNum > 0)
      hangmaNum -= 1;    //if user guessed the right number hungmaNum -1
      console.log (`Your hungman number is  ${hangmaNum}`);
    }
  }
  if ( x === 0 ){
    console.log ('Sorry, try again!');
    ifCisPut (c);
    console.log(`Your hungman number is  ${hangmaNum}`);
    }

  let result = checkAnswer (guessTemp);       //check the guessArray equals to originArray or not
  if (result)
  {
    alert ('You win the game!');
  }
}
