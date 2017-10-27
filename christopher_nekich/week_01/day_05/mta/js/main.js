var difference = function (a, b) { return Math.abs(a - b); }


let lLine = ['8th', '6th', 'Union Square', '3rd', '1st'];
let nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
let sixLine = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

let mta = {
  L: lLine,
  N: nLine,
  6: sixLine
};

const journeyA = function(startLine, start){ // total number of stops in trip that requires a transfer
  let journey = [];
  let startIndexA = mta[startLine].indexOf(start);
  let stopIndexA = mta[startLine].indexOf('Union Square');

  if (startIndexA > stopIndexA) {
    for (let i = startIndexA - 1; i > stopIndexA ; i--) {
      journey.push(mta[startLine][i]);
      };
    }else{
      for (let i = startIndexA + 1; i < stopIndexA; i++) {
        journey.push(mta[startLine][i]);
    };
  };
  return journey;
};

const journeyB = function(stopLine, stop){
  let journey = [];
  let startIndexB = mta[stopLine].indexOf('Union Square');
  let stopIndexB = mta[stopLine].indexOf(stop);

  if(startIndexB > stopIndexB){
    for (let i = startIndexB -1; i >= stopIndexB; i--) {
      journey.push(mta[stopLine][i]);
    };
  }else{
    for (let i = startIndexB + 1; i <= stopIndexB; i++) {
      journey.push(mta[stopLine][i]);
    };
  };
  return journey;
};

const planTrip = function(startLine, start, stopLine, stop){
  if(startLine !== stopLine){
    let firstLeg = journeyA(startLine, start);
    let secondLeg = journeyB(stopLine, stop);
    let stopsTotal = firstLeg.length + secondLeg.length + 1;

    console.log(`You must travel through the following stops on the ${startLine} line: ${firstLeg.join(', ')}.`);
    console.log("Change at Union Square");
    console.log(`Your journey continues through the following stops on the ${stopLine} line: ${secondLeg.join(', ')}.`);
    console.log(`${stopsTotal} stops in total.`);
  }else{
    let startIndex = mta[startLine].indexOf(start);
    let stopIndex = mta[startLine].indexOf(stop);

    stops = difference(startIndex, stopIndex);
    console.log(`You travel ${stops} stops along the ${startLine} line.`);
  };
};


planTrip('N', 'Times Square', '6', '33rd');
console.log("===================================");
planTrip('N', 'Times Square', 'N', '28th');
console.log("===================================");
planTrip('6', '33rd', 'L', '8th');
