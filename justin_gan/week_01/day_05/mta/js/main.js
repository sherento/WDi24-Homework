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
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
};

const planTrip = function ( startLine, startStation, endLine, endStation ) {
  const line = subway[startLine];
  const startIndex = line.indexOf(startStation);
  const endIndex = line.indexOf(endStation);
  let requiredStations;
  // check if trip goes from left to right in array via index
  if ( startIndex < endIndex ) {
    requiredStations = travelEast( startIndex, endIndex, line );
  }
  // otherwise trip goes from right to left
  else {
    requiredStations = travelWest( startIndex, endIndex, line );
  }
  const msg = `You must travel through the following stops on the N line: ${ requiredStations.join(', ') }.`;
  console.log(msg);
}

const travelEast = function ( startIndex, endIndex, line ) {
  let stops = [];
  for (let i = startIndex; i <= endIndex; i++) {
    stops.push(line[i]);
  }
  return stops;
}

const travelWest = function ( startIndex, endIndex, line ) {
  let stops = [];
  for (let i = startIndex; i >= endIndex; i--) {
    stops.push(line[i]);
  }
  return stops;
}


planTrip('N', 'Times Square', 'N', '8th');
planTrip('N', '8th', 'N', 'Times Square');
planTrip('N', '34th', 'N', 'Union Square');
planTrip('N', '28th', 'N', 'Times Square');
