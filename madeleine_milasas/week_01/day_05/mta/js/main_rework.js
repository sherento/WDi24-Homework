


// LINES
// const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
// const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
// const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];
// The A line has the following stops: 50th, Port, 23rd, 8th Av, W 4th

const trainLines = {
  L: ['8th Av', '6th Av', 'Union Square', '3rd Av', '1st Av'],
  N: ['Times Square', '34th', '28th (N)', '23rd (N)', 'Union Square', '8th St'],
  6: ['Grand Central', '33rd', '28th (6)', '23rd (6)', 'Union Square', 'Astor Place'],
  A: ['50th', 'Port', '23rd', '8th Av', 'W 4th']
};
const allLines = Object.keys( trainLines );


// declare error msgs
const invalidLineMsg = `Sorry, that doesn't look like a valid train line to me.`;
const invalidStationMsg = `Sorry, that doesn't look like a valid station to me.`
const sameStationMsg = `Spin around. You are at your destination.\n----------------------------------`;


// find start line array and start station index


//////////////////////////// FIND LINE FUNCTION ////////////////////////////////
////////////// Returns obj w .lineArray in question or error string
const findLine = function ( l ) {
  const line = {
    lineArray: [],
    error: ''
  };
  const searchIndex = allLines.indexOf( l.toUpperCase() );  // uppercase to normalise user input
  if (-1 === searchIndex) {
      line.error = invalidLineMsg;
      return line;
  } else {
    const lineName = allLines[ searchIndex ];
    line.lineArray = trainLines[lineName];
  }
  return line;
};


//////////////// FIND STATION FUNCTION /////////////////////////////////////////
////////////// Returns obj w station .index or error msg
const findStation = function ( l, s ) {  // line array, station
  const station = {
    error: ''
  };
  // convert array to uppercase for comparison
  lUpper = l.lineArray.map( function (x) { return x.toUpperCase()} );
  // look for station in array
  const index = lUpper.indexOf( s.toUpperCase() )
  // ## if station entered is not in array return error msg
  if ( -1 === index ) {
    station.error = invalidStationMsg;
    return station;
  } else {
  // return index
    station.index = index;
    return station;
  }
};


///////////// FIND INTERCEPT ///////////////////////////////////////////////////
///////////// Returns obj with xStartLine and xEndLine
const findIntercept = function ( startArray, endArray ) {
  let result = {};
  for (let i = 0; i < startArray.length; i++) {
    for (let j = 0; j < endArray.length; j++) {
      if ( startArray[i] === endArray[j] ) {
        result.xStartLine = i;
        result.xEndLine = j;
        return result;
      }
    }
  }
};

/////////////// COUNT STOPS ////////////////////////////////////////////////////
////////////// Returns obj w .thru stops array and .total num of stops
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

////////////// PLAN TRIP FUNCTION //////////////////////////////////////////////
const planTrip = function ( lOn, sOn, lOff, sOff ) {
  const startLine = findLine( lOn );
  if (startLine.error) {
    console.log( startLine.error + `\nPlease check your LINE ON entry and try again.\n----------------------------------` );
    return;
  }
  const startStation = findStation( startLine, sOn );
  if (startStation.error) {
    console.log( startStation.error + `\nPlease check your STOP ON entry and try again.\n----------------------------------` );
    return;
  }
  const endLine = findLine( lOff );
  if (endLine.error) {
    console.log( endLine.error + `\nPlease check your LINE OFF entry and try again.\n----------------------------------`);
    return;
  }
  const endStation = findStation( endLine, sOff );
  if (endStation.error) {
    console.log( endStation.error + `\nPlease check your STOP OFF entry and try again.\n----------------------------------` );
    return;
  }
  // console.log(startLine, endLine);
  // ** IF START AND END LINES ARE THE SAME **
  if (lOn.toUpperCase() === lOff.toUpperCase()) {
    trip = countStops( startStation.index, endStation.index, startLine.lineArray );
    console.log( `You must travel through the following stops on the ${ lOn.toUpperCase() } line: ${ trip.thru.join(', ') }.` );
    console.log( `${ trip.total } stops in total. Enjoy your trip!\n----------------------------------` );
    return;
  } else {
  // ** IF START AND END LINES ARE DIFFERENT **
    // find intercept
    const intercept = findIntercept( startLine.lineArray, endLine.lineArray );
    // console.log( intercept );
    // FIRST HALF OF TRIP
    tripA = countStops( startStation.index, intercept.xStartLine, startLine.lineArray );
    console.log( `You must travel through the following stops on the ${ lOn.toUpperCase() } line: ${ tripA.thru.join(', ') }.` );
    const interceptStation = startLine.lineArray[ intercept.xStartLine ];
    console.log( `Change at ${ interceptStation } for the ${ lOff.toUpperCase() } line.` );
    // SECOND HALF OF TRIP
    tripB = countStops( intercept.xEndLine, endStation.index, endLine.lineArray );
    console.log( `Your journey continues through the following stops: ${ tripB.thru.join(', ') }.` );
    let totalStops = tripA.total + tripB.total;
    console.log( `${ totalStops } stops in total. Enjoy your trip!\n----------------------------------` );
  }
};







// ******* Test cases *****************************

// startLineArray = findLine( 'l' );
// startStationIndex = findStation( startLineArray, '22th' );
// startStationIndex2 = findStation( startLineArray, '8th' );


const testCases = [
  { lo: 'L', so: '6th Av', lof: 'L', sof: '3rd Av' }, // L line only
  { lo: 'Q', so: '6th Av', lof: 'L', sof: '3rd Av' }, // Bad start line name
  { lo: 'L', so: '34th', lof: 'L', sof: '3rd Av' }, // Bad start station name
  { lo: 'L', so: '6th Av', lof: 'Foo', sof: '3rd Av' }, // Bad end line name
  { lo: 'L', so: '6th Av', lof: 'N', sof: 'Bar' }, // Bad end station name
  { lo: 'L', so: '8th Av', lof: 'N', sof: '23rd (N)' }, // intercept L and N
  { lo: 'N', so: '8th St', lof: '6', sof: 'Grand Central' }, // intercept N and 6
  { lo: 'A', so: 'Port', lof: 'L', sof: '1st Av' }, // intercept L and A!
  { lo: 'A', so: 'W 4th', lof: 'a', sof: '50th' }, // just A, also lower case
  // adding some test cases from first version:
  { lo: 'L', so: '1st Av', lof: 'L', sof: '8th Av' },  // reverse direction L only
  { lo: 'N', so: '34th', lof: 'N', sof: '8th St' }, // N line only
  { lo: 'N', so: '8th St', lof: 'N', sof: 'Times Square' },  // reverse direction N only
  { lo: '6', so: 'Grand Central', lof: '6', sof: '23rd (6)' }, // 6 line only
  { lo: '6', so: 'Astor Place', lof: '6', sof: '33rd' },  // reverse direction 6 only
  { lo: 'L', so: '8th Av', lof: 'N', sof: 'Times Square' },  // multi lines L to N
  { lo: 'l', so: '1st av', lof: 'n', sof: 'times square' },  // multi lines L to N lower case letters
  { lo: '6', so: 'Astor Place', lof: 'L', sof: '6th Av' },  // multi lines 6 to L
  { lo: 'N', so: '8th St', lof: '6', sof: '28th (6)' }  // multi lines N to 6
  // { lo: '6', so: 'Union Square', lof: '6', sof: '33rd' },  // if US is a start on one line
  // { lo: 'L', so: 'Union Square', lof: '6', sof: '33rd' },  // if US is start but user entered they think they need to change lines
  // { lo: 'N', so: '34th', lof: 'L', sof: 'Union Square' },  // if US is destination but user entered they think they need to change lines
  // { lo: 'L', so: '3rd', lof: 'L', sof: '3rd' },  // if both stations the same (same station same line)
  // { lo: 'N', so: 'Union Square', lof: '6', sof: 'Union Square' }  // if both stations are Union Square
];





for (let i = 0; i < testCases.length; i++) {
  console.log( `${ i + 1 }: You have entered:` );
  console.log( `LINE ON - ${ testCases[i].lo }, STOP ON - ${ testCases[i].so }` );
  console.log( `LINE OFF - ${ testCases[i].lof }, STOP OFF - ${ testCases[i].sof }\n ` );
  planTrip( testCases[i].lo, testCases[i].so, testCases[i].lof, testCases[i].sof );
}
