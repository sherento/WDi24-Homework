


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



// find start line array and start station index

//////////////////////////// FIND LINE FUNCTION ///////////////////////////////////////
const findLine = function ( l ) {
  const line = {
    lineName: '',
    error: ''
  };
  const searchIndex = allLines.indexOf( l.toUpperCase() );
  if (-1 === searchIndex) {
      line.error = `Sorry, that doesn't look like a valid train line to me, please check your entry and try again.`;
  } else {
    line.lineName = allLines[ searchIndex ];
  }
  return line;
};



const findStationIndex = function () {

};
