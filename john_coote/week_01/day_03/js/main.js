console.log(`homework for week 1, day 3`);

// Array and Functions Bonus Material
//
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the
// largest of them. Use the if-then-else construct available in Javascript.
// You'll have to remember your pre-work, or do some googling to figure this out.
//
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10,
// and multiplyArray([1,2,3,4]) should return 24.

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) { return num1 }
  return num2;
}

const maxOfThree = function (num1, num2, num3) {
  if ( maxOfTwoNumbers (num1, num2) < num3 ) { return num3 }
  return maxOfTwoNumbers (num1, num2);
}

const isItAVowel = function (str1) {
  const vowelList = "aeiouAEIOU"
  let a = vowelList.search(str1);
  console.log(a);
  if (a > -1) { return true }
  return false;
}

const sumArray = function (arr1) {
  let result = 0;
  for (var i = 0; i <arr1.length; i++) {
    result = result + arr1[i];
  }
  return result;
}

const multiplyArray = function (arr1) {
  let result = 1;
  for (var i = 0; i <arr1.length; i++) {
    result = result * arr1[i];
  }
  return result;
}

///////////////////////////////////////////

//
// Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and
// returns the array of words that are longer than i.

const reverseString = function (str1) {
  let result = "";
  for (var i = 0; i < str1.length; i++) {
    // get the ith char from str1
    // add it to the start of result
    result = str1.charAt(i) + result;
  }
  return result;
}

const findLongestWord = function (arr1) {
  // findLongestWord ("list,of,words,seperated,by,a-delimiter".split(','))
  let longest = 0
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i].length > longest) {longest = arr1[i].length}
  }
  return longest;
}


const filterLongWords = function (arr1, num1) {
  // filterLongWords ("list,of,words,seperated,by,a-delimiter".split(','),2)
  result = []
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i].length > num1) {result.push(arr1[i])}
  }
  return result;
}

///////////////////////////////////////////////////

// You'll create a simple word guessing game where the user gets infinite tries to guess the word
// (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
// and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not,
// it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// first make an array based on the below hard coded string
const hangArr1 = "fly".split("");

// now make a 2nd array for the guessed letters to be placed in when correct.
// it starts of populated with "_" characters in each place where the
// first array has a character.
let hangArr2 = [];
hangArr2.length = hangArr1.length;
for (var i = 0; i < hangArr2.length; i++) {
  hangArr2[i] = "_"
}

// to display the current guess lets convert the array2 into a string
// for easier display. We can output this to console or html
let hint = "";
for (var j = 0; j < hangArr2.length; j++) {
  hint = hint + " " + hangArr2[j];
}
console.log(hint); // this spits out a hint to the console, telling the player how many letters.

let numberGuesses = 0;
let prizeMoney = 0;       // total prize money earned
let bonusPerRound = 0;    // prize money per round
let strGuesses = "";      // a string where I store each letter that has been guessed.
                          // I then check within this tring to see if a letter is a duplicate guess.

function arraysEqual(a, b) {
  // at some stage we ill need to check if the arrays are equal. this whole function is copied
  // from the good folks of stackoverflow
  // https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript

  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}


const guessLetter = function (char1) {
// here's the start of the main function.
// all necesary variables have been described above and the
// function to check if arrays are equal as well.


// I'm only going to consider lower case letters.
// if the user enters an uper case letter I will convert it.
  if (char1 == char1.toUpperCase()) {
    char1 = char1.toLowerCase();
    console.log(`Converting to lower case...\"${char1}\"`);
  } else
  {
    // The character is uppercase. well probably. it could be a special character
    // or a number, but we will ignore those for now.
  }


  // now test to see if we have had that letter before
  // another alternative would be -- if(stringGuesses.indexOf(char1) != -1) --
  // also you could loop through an array, but there's enough arrays and loops going on already
  // so I've side stepped that
  let a = strGuesses.search(char1)
  if (a > -1) {
    console.log(`Try again. You have tried \"${char1}\" before`);
    return;
  } else {
    strGuesses = strGuesses + char1; // add the guessed letter to the string of guessed letters
    numberGuesses++;                 // increment the number of guesses
  }


    // start by testing the suoplied char1 against each of the letters in the array

    // Not really sure if one guess should find all matches of the letter or only one.
    // the code currently caters for all matches. But to make it match only one you'd need something like
    // newArray[i] = "!" -- need to knock the match out of the array which you're checking
    // break -- and then break out of the loop

    for (var i = 0; i < hangArr1.length; i++) {
      if (hangArr1[i] === char1) {
        hangArr2[i] = char1;
        console.log(`good job. the letter \"${char1}\" is in the word - ${hangArr2}`);

        hint = ""  // clear the hint string // rebuild the hint string.
        for (var j = 0; j < hangArr2.length; j++) {
          hint = hint + " " + hangArr2[j];
        }
        // update the main browser window. DOM.
        document.getElementById('output1').innerHTML = 
          "<h1>" + hint + "</h1>"; 

        // genewrate a random number nd add this the total amount of prize money dso far.
        let bonusPerRound = Math.floor(Math.random() * 5) + 1;
        console.log(`Bonus this round is $${bonusPerRound}`);
        prizeMoney = prizeMoney + bonusPerRound;
        console.log(`You now have $${prizeMoney} of prize money.`);
      } else {
        //

      }
    }

    // Was that a successfull round? If not, apply a penalty
    // couldnt find the logical place for this,
    // so have decided this feature can wait for next release...



    // have we got a full match yet?
    // test using the function pinched from stackoverflow
    if (arraysEqual(hangArr1, hangArr2)) {
      console.log("Bazinga! You're a winner");
      console.log(`You had ${numberGuesses} guesses`); 
      document.getElementById('output1').innerHTML = 
        "<h1>Awesome. You are the hangman winner</h1><br>(insert cat gif here)" +
        "<br><h1>You finish with $" + prizeMoney + " in prize money"; 
      // if time permitted more DOM manipulation could go here.
      // but let's not get carried away.
    } else if (numberGuesses > 5) {
      console.log(`oooh, bad luck, you had ${numberGuesses} guesses and are to be hanged...`);
      document.getElementById('output1').innerHTML = 
        "<h1>H A N G E D</h1><br>(insert gruesome jpg here)" +
        "<br><h1>Bad luck, you're dead"; 
      return;

    }
      else {
      console.log(`Keep going. You guessed \"${char1}\". You have had ${numberGuesses} guesses so far`);
    }


}

// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and
// reward the user if they found a letter (multiplying the reward if
// multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

//
// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user
// guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and
// subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman),
// inform the user that they lost and show a hangman on the log.
