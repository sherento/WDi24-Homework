// MTA Lab
//
// Objectives:
//
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
//
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
//Make sure that you can travel in either direction (reverse the array)

const lineN = ['Times Square', '34th', '28thN', '23rdN', 'Union Square', '8thN'];
const lineL = ['8thL', '6th', 'Union Square', '3rd', '1st'];
const line6 = ['Grand Central', '33rd', '28th6', '23rd6', 'Union Square', 'Astor Place'];


//Single Line function

let singleLine = function (startLine, startStop, endStop) {
  let startPosition1 = startLine.indexOf(startStop); //finding index of first stop
  let endPosition1 = startLine.indexOf(endStop); //finding index of end stop
  let totalStops1 = endPosition1 - startPosition1; //finding total stops between end and first stop
  let journey1 = startLine.slice(startPosition1 + 1, endPosition1 + 1); //listing stops between first and end stop - not including first stop, including end stop
  console.log(`You must travel through the following stops: ${journey1}. ${totalStops1} stops in total.`);
  // console.log(journey1);
  };

//Multi Line function

let multiLine = function (startLine, startStop, endLine, endStop) {
  // finding journey on 1st line
  let startPosition1 = startLine.indexOf(startStop);
  let endPosition1 = startLine.indexOf('Union Square');
  let numStops1 = endPosition1 - startPosition1;
  let journey1 = startLine.slice(startPosition1 + 1, endPosition1 + 1);
  // console.log(endPosition1);
  // console.log(journey1);

  // finding journey on 2nd line
  let startPosition2 = endLine.indexOf('Union Square');
  let endPosition2 = endLine.indexOf(endStop);
  let numStops2 = endPosition2 - startPosition2;
  let journey2 = endLine.slice(startPosition2 + 1, endPosition2 + 1);
  let totalStops1 = numStops1 + numStops2;
  console.log(`You must travel through the following stops: ${journey1}. Change at Union Square. Your journey continues through the following stops: ${journey2}. ${totalStops1} stops in total.`);
  // console.log(journey2);
  // console.log(numStops2);
};

//Other Direction - single line
let otherWaySingle = function (startLine, startStop, endStop) {
  let copy = Array.prototype.slice.call(startLine);
  let reverseJourney = copy.reverse();
  let startPosition3 = reverseJourney.indexOf(startStop); //finding index of first stop
  let endPosition3 = reverseJourney.indexOf(endStop); //finding index of end stop
  let totalStops3 = endPosition3 - startPosition3; //finding total stops between end and first stop
  let journey3 = reverseJourney.slice(startPosition3 + 1, endPosition3 + 1);
  console.log(`You must travel through the following stops: ${journey3}. ${totalStops3} stops in total.`);
    // console.log(reverseJourney);
    // console.log(totalStops3);
    // console.log(journey3);
    };

// Multi Line: same direction start line, other direction end line
let backwardsEndLineMulti = function (startLine, startStop, endLine, endStop) {
  // same direction - 1st line
  let startPosition3 = startLine.indexOf(startStop);
  let endPosition3 = startLine.indexOf('Union Square');
  let numStops3 = endPosition3 - startPosition3;
  let journey3 = startLine.slice(startPosition3+ 1, endPosition3 + 1);

  // other direction - 2nd line
  let copy2 = Array.prototype.slice.call(endLine);
  let reverseJourney2 = copy2.reverse();
  let startPosition4 = reverseJourney2.indexOf('Union Square');
  let endPosition4 = reverseJourney2.indexOf(endStop);
  let numStops4 = endPosition4 - startPosition4;
  let journey4 = reverseJourney2.slice(startPosition4 + 1, endPosition4 + 1);
  let totalStops2 = numStops3 + numStops4;
  console.log(`You must travel through the following stops: ${journey3}. Change at Union Square. Your journey continues through the following stops: ${journey4}. ${totalStops2} stops in total.`);
  // console.log(reverseJourney2);
  // console.log(startPosition4);
  // console.log(journey4);
  // console.log(numStops3);
  // console.log(numStops4);
  // console.log(totalStops2);
};

// Multi Line: other direction start line, same drection end line
let backwardsStartLineMulti = function (startLine, startStop, endLine, endStop) {
  // other direction - 1st line
  let copy = Array.prototype.slice.call(startLine);
  let reverseJourney = copy.reverse();
  let startPosition3 = reverseJourney.indexOf(startStop); //finding index of first stop
  let endPosition3 = reverseJourney.indexOf('Union Square'); //finding index of end stop
  let numStops3 = endPosition3 - startPosition3; //finding total stops between end and first stop
  let journey3 = reverseJourney.slice(startPosition3 + 1, endPosition3 + 1);

  // same direction - 2nd line
  let startPosition4 = endLine.indexOf('Union Square');
  let endPosition4 = endLine.indexOf(endStop);
  let numStops4 = endPosition4 - startPosition4;
  let journey4 = endLine.slice(startPosition4 + 1, endPosition4 + 1);
  let totalStops2 = numStops3 + numStops4;
  // console.log(journey3);
  console.log(`You must travel through the following stops: ${journey3}. Change at Union Square. Your journey continues through the following stops: ${journey4}. ${totalStops2} stops in total.`);
  // console.log(journey4);
  // console.log(totalStops2);
};

// Multi Line: other direction both lines
let backwardsBothLinesMulti = function (startLine, startStop, endLine, endStop) {
  // other direction - 1st line
  let copy = Array.prototype.slice.call(startLine);
  let reverseJourney = copy.reverse();
  let startPosition3 = reverseJourney.indexOf(startStop); //finding index of first stop
  let endPosition3 = reverseJourney.indexOf('Union Square'); //finding index of end stop
  let numStops3 = endPosition3 - startPosition3; //finding total stops between end and first stop
  let journey3 = reverseJourney.slice(startPosition3 + 1, endPosition3 + 1);

  // other direction - 2nd line
  let copy2 = Array.prototype.slice.call(endLine);
  let reverseJourney2 = copy2.reverse();
  let startPosition4 = reverseJourney2.indexOf('Union Square');
  let endPosition4 = reverseJourney2.indexOf(endStop);
  let numStops4 = endPosition4 - startPosition4;
  let journey4 = reverseJourney2.slice(startPosition4 + 1, endPosition4 + 1);
  let totalStops2 = numStops3 + numStops4;
  // console.log(journey3);
  // console.log(journey4);
  // console.log(totalStops2);
  console.log(`You must travel through the following stops: ${journey3}. Change at Union Square. Your journey continues through the following stops: ${journey4}. ${totalStops2} stops in total.`);
};

//Plan Trip function
const planTrip = function (startLine, startStop, endLine, endStop) {
  // generalIndex(startLine, startStop, endLine, endStop);
  var startIndex = startLine.indexOf(startStop);
  var endIndex = endLine.indexOf(endStop);
  var midIndex = startLine.indexOf('Union Square');
  var midIndex2 = endLine.indexOf('Union Square');
  // console.log(midIndex2);
  // console.log(midIndex);

  if ((startLine !== endLine) && (midIndex < startIndex) && (midIndex2 > endIndex)) {
      backwardsBothLinesMulti(startLine, startStop, endLine, endStop);
    }
  else if ((startLine !== endLine) && (midIndex2 > endIndex)) {
      backwardsEndLineMulti(startLine, startStop, endLine, endStop);
    }
  else if ((startLine !== endLine) && (midIndex < startIndex)) {
      backwardsStartLineMulti(startLine, startStop, endLine, endStop);
    }
  else if (startIndex > endIndex) {
      otherWaySingle(startLine, startStop, endStop);
    }
  else if (startLine !== endLine)  {
      multiLine(startLine, startStop, endLine, endStop);
    }
  else {
      singleLine(startLine, startStop, endStop);
    }
};


// planTrip(lineL, '8thL', line6, '28th6'); //backward end line
// planTrip(line6, '28th6', lineN, '34th'); // both backward
planTrip(lineL, '8thL', lineL, '3rd'); //single line
