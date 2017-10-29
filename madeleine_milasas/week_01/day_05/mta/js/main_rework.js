


// const validLines = ['L', 'N', '6'];
// const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
// const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
// const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];


const trainLines = {
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};
const allLines = Object.keys( trainLines );


// declare error msgs
const invalidLineMsg = `Sorry, that doesn't look like a valid train line to me, please check your entry and try again.\n----------------------------------`;
const invalidStationMsg = `Sorry, that doesn't look like a valid station to me, please check your entry and try again.\n----------------------------------`
const sameStationMsg = `Spin around. You are at your destination.\n----------------------------------`;


// find start line array and start station index


//////////////////////////// FIND LINE FUNCTION ////////////////////////////////
////////////// Returns obj w array of line in question or error string
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
////////////// Returns obj w station index or error msg
const findStation = function ( l, s ) {  // line array, station
  const station = {
    error: ''
  };
  // ## check if station data is valid, if not return error msg
  if ( l.lineArray.indexOf( s ) === -1 ) {
    station.error = invalidStationMsg;
    return station;
  }
  // convert array to uppercase for comparison
  lUpper = l.lineArray.map( function (x) { return x.toUpperCase()} );
  // now compare
  station.index = lUpper.indexOf( s.toUpperCase() );
  return station;
};


////////////// PLAN TRIP FUNCTION //////////////////////////////////////////////
const planTrip = function ( lOn, sOn, lOff, sOff ) {
  const startLine = findLine(lOn);
  if (startLine.error) {
    console.log( startLine.error );
    return;
  }
  const startStation = findStation( startLine, sOn );
  if (startStation.error) {
    console.log( startStation.error );
    return;
  }
  const endLine = findLine(lOff);
  if (endLine.error) {
    console.log( endLine.error );
    return;
  }
};








// ******* Test cases *****************************

// startLineArray = findLine( 'l' );
// startStationIndex = findStation( startLineArray, '22th' );
// startStationIndex2 = findStation( startLineArray, '8th' );


const testCases = [
  { lo: 'L', so: '6th', lof: 'L', sof: '3rd' }, // L line only
  { lo: 'Q', so: '6th', lof: 'L', sof: '3rd' }, // Bad start line name
  { lo: 'L', so: '34th', lof: 'L', sof: '3rd' }, // Bad start station name
  { lo: 'L', so: '6th', lof: 'Foo', sof: '3rd' } // Bad end line name
];





for (let i = 0; i < testCases.length; i++) {
  console.log( `You have entered:` );
  console.log( `LINE ON - ${ testCases[i].lo }, STOP ON - ${ testCases[i].so }` );
  console.log( `LINE OFF - ${ testCases[i].lof }, STOP OFF - ${ testCases[i].sof }\n ` );
  planTrip( testCases[i].lo, testCases[i].so, testCases[i].lof, testCases[i].sof );
}
