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

const countStops = function (startI, endI, lineArr) {
  const calculated = {
    thru: [],
    total: 0
  };

  if (endI > startI) {
    // make array of thru stops (not inc start but inc end as per problem requirement)
    calculated.thru = lineArr.slice( startI + 1, endI + 1 );
  } else { // if going in reverse direction
    calculated.thru = lineArr.slice( endI, startI ).reverse();
  }
  calculated.total = calculated.thru.length;

  return calculated;
};



const compareStations = function (lineOn, stationOn, lineOff, stationOff) {
  // object to return
  const tripData = {
    startLine: lineOn,
    endLine: lineOff,
    thruStops: [],
    thruStopsCont: [],  // for second part of journey if req
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
    // calculate stops
    const calculate = countStops( startIndex, endIndex, lineArray );
    tripData.thruStops = calculate.thru;
    tripData.totalStops = calculate.total;
  } else {
    // ~~ if the start and end lines are different ~~
    tripData.change = true;
    // FIRST HALF OF TRIP: calculate stops to Union Square
    let unionSquare = lineArray.indexOf( 'Union Square' );  // a let b/c we'll recalculate index of US for second line
    const calculateA = countStops( startIndex, unionSquare, lineArray );
    // spit out data to obj
    tripData.thruStops = calculateA.thru;
    tripData.totalStops = calculateA.total;

    // then figure out second half of trip
    // determine second line
    if ('N' === lineOff) {
      lineArray = lineN;  // can use lineArray again as we've already copied relevant stops from prev line into tripData obj
    } else if ('6' === lineOff) {
      lineArray = line6;
    }
    // SECOND HALF OF TRIP: calculate stops from Union Square to end
    unionSquare = lineArray.indexOf( 'Union Square' );  // finding new US index on second line
    const endIndex = lineArray.indexOf( stationOff );
    const calculateB = countStops( unionSquare, endIndex, lineArray );
    // add second trip data to obj
    tripData.thruStopsCont = calculateB.thru;
    tripData.totalStops += calculateB.total;
  }
  return tripData;
};




// ******** PLAN TRIP FUNCTION ************

const planTrip = function (lOn, sOn, lOff, sOff) {  // line ON, stop ON, line OFF, stop OFF
  const trip = compareStations(lOn, sOn, lOff, sOff);
  console.log( `You must travel through the following stops on the ${ trip.startLine } line: ${ trip.thruStops.join(', ') }.` );
  if (trip.change) {
    console.log( `Change at Union Square for the ${ trip.endLine } line.` );
    console.log( `Your journey continues through the following stops: ${ trip.thruStopsCont.join(', ') }.` );
  }
  console.log( `${ trip.totalStops } stops in total. Enjoy your trip!\n----------------------------------` );
};





// ********* Test cases ***********

const testCases = [
  { lo: 'L', so: '6th', lof: 'L', sof: '3rd' }, // L line only
  { lo: 'L', so: '8th', lof: 'L', sof: '1st' },
  { lo: 'L', so: '1st', lof: 'L', sof: '8th' },  // reverse direction L only
  { lo: 'L', so: '8th', lof: 'N', sof: 'Times Square' }  // multi lines
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
