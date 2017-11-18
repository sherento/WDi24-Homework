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


//General index
// let generalIndex = function (startLine, startStop, endLine, endStop) {
//   // for (var i = 0; i < startLine.length; i++) {
//     var startIndex = startLine.indexOf(startStop);
//     // console.log(startIndex);
//     var endIndex = endLine.indexOf(endStop);
//     // console.log(endIndex);
// };
// generalIndex(lineN, '28thN', line6, 'Grand Central');


// if startLine === endLine or if startLine!== endLine then -

const planTrip = function (startLine, startStop, endLine, endStop) {

if (startLine === endLine) {
  let singleLine = function (startLine, startStop, endStop) {
    let startPosition1 = startLine.indexOf(startStop); //finding index of first stop
    let endPosition1 = endLine.indexOf(endStop); //finding index of end stop
    let totalStops1 = endPosition1 - startPosition1; //finding total stops between end and first stop
    let journey1 = startLine.slice(startPosition1 + 1, endPosition1 + 1) //listing stops between first and end stop - not including first stop, including end stop
    console.log(journey1);
};

// let firstStop = startStop;
// let lastStop = endStop;
// let firstLine = startLine;
// let finishLine = endLine;
//
// let num = firstLine.indexOf(firstStop);

//FIRST LINE
// let startPosition1 = startLine.indexOf(startStop); //finding index of first stop
// let endPosition1 = endLine.indexOf(endStop); //finding index of end stop
// let totalStops1 = endPosition1 - startPosition1; //finding total stops between end and first stop
// let journey1 = startLine.slice(startPosition1 + 1, endPosition1 + 1) //listing stops between first and end stop - not including first stop, including end stop
// console.log(startPosition1);
// console.log(totalStops1);
// console.log(journey1);
// };
//CHANGE AT UNION SQUARE

//SECOND LINE
let main = "Union Square";
let posTotalStops = "";
let reverseJourney = [];
let reversalPosition2 = "";
let items = ""
let startPosition2 = endLine.indexOf(main);
let endPosition2 = endLine.indexOf(endStop);
// let totalStops2 = endPosition2 - startPosition2;
// // let abTotalStops2 = Maths.abs(totalStops2); ->> not working
// // if number of stops is negative, convert to positive number (if reverse)
// if (totalStops2 < 0) {
//   let posTotalStops = totalStops2 * (-1)
//   console.log(posTotalStops);
// };
//
// let journey2 = endLine.slice(startPosition2, endPosition2);
// let reverse = journey2.reverse();

if (startPosition2 > endPosition2) {
  //  let reverseJourney = Array.prototype.slice.call(line6);
    let stops = endLine.slice(0).reverse();
    for (var i = 0; i < items.length; i++) {
      let reverseJourney = items[i];
    };
    //  endLine.reverse();
  //  let reversalPosition2 = reverseJourney.indexOf(main);
}
// console.log(reverseJourney);
// console.log(endLine);
console.log(reverseJourney);
console.log(reversalPosition2);
// console.log(journey2);
// console.log(startPosition2);
// console.log(reverse);
};


// let copy = Array.prototype.slice.call(startLine);
// let reverseJourney = copy.reverse();
// let startPosition3 = reverseJourney.indexOf(startStop); //finding index of first stop
// let endPosition3 = reverseJourney.indexOf('Union Square'); //finding index of end stop
// let numStops3 = endPosition3 - startPosition3; //finding total stops between end and first stop
// let journey3 = reverseJourney.slice(startPosition3 + 1, endPosition3 + 1);


// console.log(`You must travel through the following stops on the ${startLine} line: ${journey1}. ${totalStops1} stops in total.`);
// console.log(lineN.indexOf('34th'));

planTrip(lineN, '34th', lineN, 'Union Square');
planTrip(lineN, '34th', line6, 'Grand Central');

//output
// console.log(`You must travel through the following stops on the ${nameofstop} line: ${stops}. Change at Union Square. Your journey continues through the following stops: ${stops}. ${total stops} stops in total.`);

//FIND OUT
//how to list the starting line just by itself - without listing array?
//how to space out journey, with spaces after commas?
