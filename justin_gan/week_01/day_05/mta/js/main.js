// MTA Lab
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

const subway = {
  N: [ 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ],
  L: [ '8th', '6th', 'Union Square', '3rd', '1st' ],
  6: [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place' ]
};

const planTrip = function ( startLine, startStation, endLine, endStation ) {
  const startIndex = subway[ startLine ].indexOf( startStation );
  const endIndex = subway[ endLine ].indexOf( endStation );
  // check if journey is on one line
  if ( startLine === endLine ) {
    travel( startLine, startIndex, endIndex );
  }
  // if journey crosses multiple lines
  else {
    // get 'Union Square' index for both lines
    const endIndexUS = findUnionSquare( subway[ startLine ] );
    const startIndexUS = findUnionSquare( subway[ endLine ] );

    travel( startLine, startIndex, endIndexUS, true );
    console.log( 'Change at Union Square' );
    travel( endLine, startIndexUS, endIndex, true );
  }
}

const findUnionSquare = function ( line ) {
  // iterate over line to find index of Union Square on that line
  for ( let i = 0; i < line.length; i++ ) {
    if ( line[ i ] === 'Union Square' ) {
      return line.indexOf( line[ i ] );
      break;
    }
  }
  console.log( `For some reason Union square doesn't exist on this line.` );
}

const travel = function ( line, startIndex, endIndex, change ) {
  let passedStations;
  // check if trip goes from left to right in array via index
  if ( startIndex < endIndex ) {
    passedStations = travelEast( line, startIndex, endIndex, change );
  }
  // otherwise trip goes from right to left
  else {
    passedStations = travelWest( line, startIndex, endIndex, change );
  }
  const msg = `You must travel through the following stops on the ${ line } line: ${ passedStations.join(', ') }.`;
  console.log( msg );
}

const travelEast = function ( line, startIndex, endIndex, change ) {
  let stops = [];
  // iterate over stops in line and push stations passed through
  for ( let i = startIndex; i <= endIndex; i++ ) {
    let stop = subway[ line ][ i ];
    // push all stations except start & end stop unless changing
    if ( i !== startIndex && ( i !== endIndex || change )) {
      stops.push( stop );
    }
  }
  return stops;
}

const travelWest = function ( line, startIndex, endIndex, change ) {
  let stops = [];
  // iterate over stops in line and push stations passed through
  for ( let i = startIndex; i >= endIndex; i-- ) {
    let stop = subway[ line ][ i ];
    // ignore start and end stations
    if ( i !== startIndex && ( i !== endIndex || change )) {
      stops.push( stop );
    }
  }
  return stops;
}


planTrip( 'N', 'Times Square', 'N', '8th' );
planTrip( 'N', '8th', 'N', 'Times Square' );
planTrip( 'N', '34th', 'N', 'Union Square' );
planTrip( 'N', '28th', 'N', 'Times Square' );
planTrip( 'L', '8th', 'L', 'Union Square' );
planTrip( 'L', '3rd', 'L', '6th' );
planTrip( '6', 'Grand Central', '6', '23rd' );
planTrip( '6', 'Astor Place', '6', '33rd' );
planTrip( '6', '33rd', 'N', 'Times Square' );
planTrip( 'N', 'Times Square', '6', '33rd' );
