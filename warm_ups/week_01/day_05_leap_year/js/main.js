// Do this in HTML and JS!
//
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
//
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...
//
// We want a custom function called isLeapYear
// Bonus!
//
// Ask the user what number they want to test

// to run the first section comment out the bonus
// __________________________________________________

// declare the function and allow it to take an agrument of
const leapYear = function( year ){
  if ( year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)){
    console.log(`true`);
    return true;
  } else {
    console.log(`false`);
    return false;
  }
}

leapYear(1997);
leapYear(1996);
leapYear(1900);
leapYear(2000);

// BONUS

// to run the bonus comment out the first section
// __________________________________________________

// Instead of taking a parameter called year, we've replaced it with prompt();
const leapYear = function(){
  // Prompt creates a popup window that asks the user for input.
  // Prompt only returns strings, so we use parseInt to coerce it in to an integer.
  const year = parseInt(prompt('Please select a year'));

  if ( year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)){
    console.log(`true`);
    return true;
  } else {
    console.log(`false`);
    return false;
  }
}

leapYear();

// leapYear(1997);
// leapYear(1996);
// leapYear(1900);
// leapYear(2000);

// leapYear( 1996 );
  // => true

// leapYear( 1997 );
  // => false

// leapYear( 1900 );
  // => false

// leapYear( 2000 );
  // => true
