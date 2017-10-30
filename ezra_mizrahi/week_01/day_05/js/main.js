// MTA /////////////////////////////////////////////////////////////////////////

/*

Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at,
and the line and stop that the user is getting off at,
and prints the journey and the total number of stops for the trip.

There are 3 subway lines:

The N line has the following stops:
Times Square, 34th, 28th, 23rd, Union Square, and 8th

The L line has the following stops:
8th, 6th, Union Square, 3rd, and 1st

The 6 line has the following stops:
Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

All 3 subway lines intersect at Union Square,
but there are no other intersection points.
(For example, this means the 28th stop on the N line is different
than the 28th street stop on the 6 line,
so you'll have to differentiate this when you name your stops in the arrays.)

Tell the user the number of stops AND the stops IN THE ORDER
that they will pass through or change at.

The key to the lab is finding the index positions of each stop.
(hint: indexOf())

Make sure the stops that are the same for different lines have different names
(i.e. 23rd on the N and on the 6 need to be differentiated)

*/


const lineN = [ "Times square",
                "34th",
                "28th line N",
                "23rd line N",
                "Union Square line N",
                "8th line N"
              ];

const lineL = [ "8th line L",
                "6th",
                "Union Square line L",
                "3rd",
                "1st"
              ];

const line6 = [ "Grand Central",
                "33rd",
                "28th line 6",
                "23rd line 6",
                "Union Square line 6",
                "Astor Place"
               ];


let transfer = line6.indexOf("Union Square line 6");
console.log(transfer);

// below function produces list of stops on a given trip
// works
const listStops = function ( startLine, startStop, endLine, endStop ) {
  let startIndex = startLine.indexOf(startStop); //get the index of 1st stop
  let endIndex = endLine.indexOf(endStop); //get the index of last stop
  if (startIndex < endIndex) { //if travelling forward on line
    let list = startLine.slice(startIndex, endIndex +1);
    console.log( "You must travel through the following stops: " + list );
  } else { //if travelling backwards on line, reverse array
    let list = startLine.slice(endIndex, startIndex +1);
    let listReverse = list.reverse();
    console.log( "You must travel through the following stops: " + list );
  }

};

// below function produces list of stops if trip is a transfer
// the function will list stops from the start stop to Union Square
// and will list stops from Union Square to end stop on end line
// const listStopsTransfer = function ( startLine, startStop, endLine, endStop ) {
//   let startIndex = startLine.indexOf(startStop); //get index of 1st stop
//   let endIndex = endLine.indexOf(endStop); //get index of last stop
//   if (true) {
//
//   }
// }



// should list: 33rd, 28th, 23rd, union square, astor place
listStops(line6, "33rd", line6, "Astor Place");

// should list: grand central ... astor place
listStops(line6, "Grand Central", line6, "Astor Place");

// should list: 28th, 23rd
listStops(line6, "28th line 6", line6, "23rd line 6");

// should list: astor place, union square, 23rd
// this is the reverse case
listStops(line6, "Astor Place", line6, "23rd line 6");



// below function produces sum of stops forward
// works properly
const sumStops = function ( startLine, startStop, endLine, endStop ) {
  let startIndex = startLine.indexOf(startStop);
  let endIndex = endLine.indexOf(endStop);
  if (startIndex < endIndex) {

    let sum = startIndex + endIndex;
    console.log( "There are this many stops: " + sum )
  } else {
    let sum = startIndex - endIndex;
    console.log( "There are this many stops: " + sum );
  }

};

// should return 5 stops
sumStops(line6, "Grand Central", line6, "Astor Place");

// should return 1 stops
sumStops(line6, "Grand Central", line6, "33rd");

// should return 4 stops
sumStops(lineL, "8th line L", lineL, "1st");

// should return 1 stops
sumStops(line6, "Astor Place", line6, "Union Square line 6");

// should return 4 stops
// reverse case
sumStops(line6, "Astor Place", line6, "33rd");



const planTrip = function ( startLine, startStation, endLine, endStation ) {
  // console.log( "You must travel through the following stops " + stops );
  // console.log( "N stops in total.");
  if (startLine === endLine) {
    listStops(startLine, startStation, endLine, endStation);
    sumStops(startLine, startStation, endLine, endStation);
  } else if (startLine !== endLine) {
    // go from startStation of startLine and stop at Union Square
    // go from Union Square of endLine to endStation
    // concatenate these together
    // didn't finish this
    console.log(false); // just a placeholder for the rest of the function
  }


};

planTrip(line6, "Astor Place", line6, "Grand Central");
planTrip(line6, "Grand Central", line6, "Astor Place");
