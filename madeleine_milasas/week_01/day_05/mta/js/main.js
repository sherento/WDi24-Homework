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

const validLines = ['L', 'N', '6'];
const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

// ************* functions *****************************************************

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


// *******************

const compareStations = function (lineOn, stationOn, lineOff, stationOff) {
  // object to return
  const tripData = {
    startLine: lineOn,
    endLine: lineOff,
    thruStops: [],
    thruStopsCont: [],  // for second part of journey if req
    change: false,
    totalStops: 0,
  //  invalid: false, // flag for invalid user input
    error: ''
  };

  // declare error msgs
  const invalidLineMsg = `Sorry, that doesn't look like a valid train line to me, please check your entry and try again.\n----------------------------------`;
  const invalidStationMsg = `Sorry, that doesn't look like a valid station to me, please check your entry and try again.\n----------------------------------`
  const sameStationMsg = `Spin around. You are at your destination.\n----------------------------------`;

  // ## check if lOn/lOff is a valid line ##
  if ( validLines.indexOf( lineOn ) === -1 || validLines.indexOf( lineOff ) === -1 ) {
    tripData.error = invalidLineMsg;
    return tripData;
  }

  // ## check if both stations the same (same station same line) or both are US
  if ( lineOn === lineOff && stationOn === stationOff || ( 'Union Square' === stationOn && 'Union Square' === stationOff ) ) {
    tripData.error = sameStationMsg;
    return tripData;
  }

  // !!!!!!!! add condition if user enters starting at US but on different line to end point
  if ('Union Square' === stationOn && lineOn !== lineOff) {
    unionSquareRedirect = `At Union Square, go straight to the ${ lineOff } line.`;
    console.log( unionSquareRedirect );
    lineOn = lineOff;
    tripData.startLine = lineOff;
  }
  // !!!!!! and change line off to be same as line on if user enters ending at US but on different line to start point
  if ('Union Square' === stationOff && lineOn !== lineOff) {
    console.log( `No need to change lines.` );
    lineOff = lineOn;
  }

  // bring in array of relevant starting line
  let lineArray1; // declare here for scope
  if ('L' === lineOn) {
    lineArray1 = lineL;
  } else if ('N' === lineOn) {
    lineArray1 = lineN;
  } else if ('6' === lineOn) {
    lineArray1 = line6;
  }


  // ## check if station data is valid
  if ( lineArray1.indexOf( stationOn ) === -1 ) {
    tripData.error = invalidStationMsg;
    return tripData;
  }


  // find index of starting station
  const startIndex = lineArray1.indexOf( stationOn );
  // now look at line off
  // if it's the same as line on
  if (lineOn === lineOff) {
    // get end index
    const endIndex = lineArray1.indexOf( stationOff );
    // calculate stops
    const calculate = countStops( startIndex, endIndex, lineArray1 );
    tripData.thruStops = calculate.thru;
    tripData.totalStops = calculate.total;
  } else {
    // ~~ if the start and end lines are different ~~
    tripData.change = true;
    // FIRST HALF OF TRIP: calculate stops to Union Square
    let unionSquare = lineArray1.indexOf( 'Union Square' );  // a let b/c we'll recalculate index of US for second line
    const calculateA = countStops( startIndex, unionSquare, lineArray1 );
    // spit out data to obj
    tripData.thruStops = calculateA.thru;
    tripData.totalStops = calculateA.total;

    // then figure out second half of trip
    // determine second line
    let lineArray2;
    if ('L' === lineOff) {
      lineArray2 = lineL;
    } else if ('N' === lineOff) {
      lineArray2 = lineN;
    } else if ('6' === lineOff) {
      lineArray2 = line6;
    }

    // ## check if station data is valid
    if ( lineArray2.indexOf( stationOff ) === -1 ) {
      tripData.error = invalidStationMsg;
      return tripData;
    }

    // SECOND HALF OF TRIP: calculate stops from Union Square to end
    unionSquare = lineArray2.indexOf( 'Union Square' );  // finding new US index on second line
    const endIndex = lineArray2.indexOf( stationOff );
    const calculateB = countStops( unionSquare, endIndex, lineArray2 );
    // add second trip data to obj
    tripData.thruStopsCont = calculateB.thru;
    tripData.totalStops += calculateB.total;
  }
  return tripData;
};



// ******** PLAN TRIP FUNCTION ************

const planTrip = function (lOn, sOn, lOff, sOff) {  // line ON, stop ON, line OFF, stop OFF
  const trip = compareStations(lOn, sOn, lOff, sOff);
  // if there was invalid user input
  if (trip.error) {
    console.log( trip.error );
    return;
  }
  console.log( `You must travel through the following stops on the ${ trip.startLine } line: ${ trip.thruStops.join(', ') }.` );
  if (trip.change) {
    console.log( `Change at Union Square for the ${ trip.endLine } line.` );
    console.log( `Your journey continues through the following stops: ${ trip.thruStopsCont.join(', ') }.` );
  }
  console.log( `${ trip.totalStops } stops in total. Enjoy your trip!\n----------------------------------` );
};





// ********* Test cases ***********

// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

const testCases = [
  { lo: 'L', so: '6th', lof: 'L', sof: '3rd' }, // L line only
  { lo: 'L', so: '8th', lof: 'L', sof: '1st' },
  { lo: 'L', so: '1st', lof: 'L', sof: '8th' },  // reverse direction L only
  { lo: 'N', so: '34th', lof: 'N', sof: '8th' }, // N line only
  { lo: 'N', so: '8th', lof: 'N', sof: 'Times Square' },  // reverse direction N only
  { lo: '6', so: 'Grand Central', lof: '6', sof: '23rd' }, // 6 line only
  { lo: '6', so: 'Astor Place', lof: '6', sof: '33rd' },  // reverse direction 6 only
  { lo: 'L', so: '8th', lof: 'N', sof: 'Times Square' },  // multi lines L to N
  { lo: '6', so: 'Astor Place', lof: 'L', sof: '6th' },  // multi lines 6 to L
  { lo: 'N', so: '8th', lof: '6', sof: '28th' },  // multi lines N to 6
  { lo: '6', so: 'Union Square', lof: '6', sof: '33rd' },  // if US is a start on one line
  { lo: 'L', so: 'Union Square', lof: '6', sof: '33rd' },  // if US is start but user entered they think they need to change lines
  { lo: 'N', so: '34th', lof: 'L', sof: 'Union Square' },  // if US is destination but user entered they think they need to change lines
  { lo: 'Q', so: '34th', lof: 'L', sof: 'Union Square' },  // if invalid line
  { lo: 'N', so: '34th', lof: 'Foo Line', sof: 'Union Square' },  // if invalid line
  { lo: 'L', so: '34th', lof: 'L', sof: 'Union Square' },  // if invalid station (e.g. real station, wrong line)
  { lo: '6', so: 'Astor Place', lof: 'L', sof: 'Foo Station' },  // if invalid station (e.g. nonsense station)
  { lo: 'L', so: '3rd', lof: 'L', sof: '3rd' },  // if both stations the same (same station same line)
  { lo: 'N', so: 'Union Square', lof: '6', sof: 'Union Square' }  // if both stations are Union Square
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
