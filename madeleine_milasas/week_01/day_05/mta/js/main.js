// The program takes the line and stop that a user is getting on at
// and the line and stop that user is getting off at
// and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."


// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// All 3 subway lines intersect at Union Square, but there are no other intersection points.
// (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)

// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


 // *********** LINES **********

const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

// *******************

const compareStations = function (lineOn, stationOn, lineOff, stationOff) {
  // object to return
  const tripData = {
    startLine: lineOn,
    thruStops: [],
    change: false,
    totalStops: 0
  };

  // bring in array of relevant starting line
  let lineArray; // declare here for scope
  if ('L' === lineOn) {
    lineArray = lineL;
  }
  // find index of starting station
  const startIndex = lineArray.indexOf( stationOn );
  // now look at line off
  // if it's the same as line on
  if (lineOn === lineOff) {
    // get end index
    const endIndex = lineArray.indexOf( stationOff );
    if (endIndex > startIndex) {
      // make array of thru stops (not inc start but inc end as per problem requirement)
      tripData.thruStops = lineArray.slice( startIndex + 1, endIndex + 1 );
    } else { // if going in reverse direction
      tripData.thruStops = lineArray.slice( endIndex, startIndex ).reverse();
    }
    tripData.totalStops = tripData.thruStops.length;

  } else {
  // if the start and end lines are different
  tripData.change = true;
  // do more stuff here
  }
  return tripData;
};




// ******** PLAN TRIP FUNCTION ************

const planTrip = function (lOn, sOn, lOff, sOff) {  // line ON, stop ON, line OFF, stop OFF
  const trip = compareStations(lOn, sOn, lOff, sOff);
  console.log( `You must travel through the following stops on the ${ trip.startLine } line: ${ trip.thruStops.join(', ') }.` );
  if (trip.change) {
    console.log( `Stuff goes here about changing lines.` );
  }
  console.log( `${ trip.totalStops } stops in total. Enjoy your trip!\n----------------------------------` );
};





// ********* Test cases ***********

const testCases = [
  { lo: 'L', so: '6th', lof: 'L', sof: '3rd' }, // L line only
  { lo: 'L', so: '8th', lof: 'L', sof: '1st' },
  { lo: 'L', so: '1st', lof: 'L', sof: '8th' }  // reverse direction L only
];



for (let i = 0; i < testCases.length; i++) {
  console.log( `You have entered:` );
  console.log( `LINE ON - ${ testCases[i].lo }, STOP ON - ${ testCases[i].so }` );
  console.log( `LINE OFF - ${ testCases[i].lof }, STOP OFF - ${ testCases[i].sof }\n ` );
  planTrip( testCases[i].lo, testCases[i].so, testCases[i].lof, testCases[i].sof );
}







// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."






// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.

// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Returns index of item found in array e.g. string
// Returns -1 if the item is not found.
//
// If the item is present more than once, the indexOf method returns the position of the first occurence.

// Tip: If you want to search from end to start, use the lastIndexOf() method
