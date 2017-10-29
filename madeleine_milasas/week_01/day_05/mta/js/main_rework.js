


// const validLines = ['L', 'N', '6'];
// const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
// const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
// const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];


const trainLines = {
  L: ['8th (L)', '6th', 'Union Square', '3rd', '1st'],
  N: ['Times Square', '34th', '28th (N)', '23rd (N)', 'Union Square', '8th (N)'],
  6: ['Grand Central', '33rd', '28th (6)', '23rd (6)', 'Union Square', 'Astor Place']
};
const allLines = Object.keys( trainLines );


// declare error msgs
const invalidLineMsg = `Sorry, that doesn't look like a valid train line to me, please check your entry and try again.\n----------------------------------`;
const invalidStationMsg = `Sorry, that doesn't look like a valid station to me, please check your entry and try again.\n----------------------------------`
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
    console.log( startLine.error );
    return;
  }
  const startStation = findStation( startLine, sOn );
  if (startStation.error) {
    console.log( startStation.error );
    return;
  }
  const endLine = findLine( lOff );
  if (endLine.error) {
    console.log( endLine.error );
    return;
  }
  const endStation = findStation( endLine, sOff );
  if (endStation.error) {
    console.log( endStation.error );
    return;
  }
  // console.log(startLine, endLine);
  // ** IF START AND END LINES ARE THE SAME **
  if (lOn === lOff) {
    trip = countStops( startStation.index, endStation.index, startLine.lineArray );
    console.log( `You must travel through the following stops on the ${ lOn.toUpperCase() } line: ${ trip.thru.join(', ') }.` );
    console.log( `${ trip.total } stops in total. Enjoy your trip!\n----------------------------------` );
    return;
  }


  // if not
  //
  // // find intercept
  // const intercept = findIntercept( startLine.lineArray, endLine.lineArray );
  // console.log( intercept );
  // // then do the calcs and logging
  // // FIRST HALF OF TRIP
  // calculateA = countStops( startStation.index, intercept.xStartLine, startLine.lineArray );
    // this is returning thru stops and total

};







// ******* Test cases *****************************

// startLineArray = findLine( 'l' );
// startStationIndex = findStation( startLineArray, '22th' );
// startStationIndex2 = findStation( startLineArray, '8th' );


const testCases = [
  { lo: 'L', so: '6th', lof: 'L', sof: '3rd' }, // L line only
  { lo: 'Q', so: '6th', lof: 'L', sof: '3rd' }, // Bad start line name
  { lo: 'L', so: '34th', lof: 'L', sof: '3rd' }, // Bad start station name
  { lo: 'L', so: '6th', lof: 'Foo', sof: '3rd' }, // Bad end line name
  { lo: 'L', so: '6th', lof: 'N', sof: 'Bar' }, // Bad end station name
  { lo: 'L', so: '8th (L)', lof: 'N', sof: '23rd (N)' } // find intercept test **
];





for (let i = 0; i < testCases.length; i++) {
  console.log( `You have entered:` );
  console.log( `LINE ON - ${ testCases[i].lo }, STOP ON - ${ testCases[i].so }` );
  console.log( `LINE OFF - ${ testCases[i].lof }, STOP OFF - ${ testCases[i].sof }\n ` );
  planTrip( testCases[i].lo, testCases[i].so, testCases[i].lof, testCases[i].sof );
}
