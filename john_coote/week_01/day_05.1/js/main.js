console.log("is this thing on? - day 1.5");

const N = ["Times", "34th", "28th", "23rd", "Union Square", "8th"]
const L = ["8th", "6th", "Union Square", "3rd", "1st"]
const SIX = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]



const planTrip = function (startLine, startStation, finishLine, finishStation) {
  // This is the overall function, that we will be calling from the command line or
  // the browser or whatever. it will call other functions from within.

  let hops = [] // an empty array that will strore an array of smaller hops.
  let hop1 = hops[0];
  let hop2 = hops[1];

  totalTrip = []; // the end result - a list of stops.


  console.log(`Walk, Bus , Uber to ${startStation} on the ${startLine} Line`);

  if (startLine === finishLine) {
    hop1 = planTripSingle (startLine, startStation, finishLine, finishStation)
  } else {
    // need to change at Union Square.
    hop1 = planTripSingle (startLine, startStation, startLine, "Union Square")
    hop2 = planTripSingle (finishLine, "Union Square", finishLine, finishStation)
  }

    for (var i = 0; i < hop1.length; i++) {
      totalTrip.push(hop1[i]);
    }

    for (var i = 0; i < hop2.length; i++) {
      totalTrip.push(hop2[i])
    }

    console.log(totalTrip);
    return totalTrip;


} // end of plan trip

const planTripSingle = function (startLine, startStation, finishLine, finishStation) {
  let ind1 = 0; //index for 1st station
  let ind2 = 0; // index for 2nd startStation
  let indUnion = 0; // index for Union station

  let stopsArr = []; // Array to hold the stations travelled through


  // as we are passing in TEXT as an argument to this functions
  // we need to match that argument to one of the arrays (for the train lines) defined above.
  if (startLine === "N") {
    startLine = N;
  } else if (startLine === "L") {
    startLine = L;
  } else if (startLine = "6") {
    startLine = SIX
  } else {
    return;
  }


  ind1 = startLine.indexOf(startStation);
  ind2 = startLine.indexOf(finishStation);


  // The direction of travel dictates wether we add or subtract in the loop.
  if (ind1 > ind2) {
    for (let i = ind1; i >= ind2; i--) {
      stopsArr.push(startLine[i]);
    }
  } else {
    for (let i = ind1; i <= ind2; i++) {
      stopsArr.push(startLine[i]);
    }
  }


  console.log(`Travel from ${stopsArr[0]} to ${stopsArr[stopsArr.length-1]}`);
  return stopsArr;



} // end of planTripSingle


testTrips = [
  ["N", "Union Square", "N", "Times"],
  ["N", "Times", "N", "Union Square"],
  ["L", "6th", "L", "Union Square"],
  ["6", "Astor Place", "6", "Grand Central"],
  ["6", "Grand Central", "N", "Times"]
]


// for (var i = 0; i < testTrips.length; i++) {
//   testTrip = testTrips[i]
//   console.log("**********************");
//   console.log(`Testing from ${testTrip[1]} on the ${testTrip[0]} line to ${testTrip[3]} on the ${testTrip[2]} line`);
//   planTrip (testTrip[0], testTrip[1], testTrip[2], testTrip[3])
//   console.log("**********************");
// }

const showTestData = function () {
  let strTestList = "List of test cases;<BR><BR>"
  for (var i = 0; i < testTrips.length; i++) {
    let testTrip = testTrips[i];
    strTestList = strTestList + `${i}:  ${testTrip[1]} on the ${testTrip[0]}
    line to ${testTrip[3]} on the ${testTrip[2]} line<br>`
  }
  strTestList = "<p>" + strTestList + "</p>"
  document.getElementById('output0').innerHTML = strTestList;
}



const loadTest = function () {
  let a = prompt("Enter index number for test trip")
  let testTrip = testTrips[a];


  let strResults = `<p>Testing from ${testTrip[1]} on the ${testTrip[0]} line
  to ${testTrip[3]} on the ${testTrip[2]} line</p>`

  thisJourney = [];
  thisJourney = planTrip (testTrip[0], testTrip[1], testTrip[2], testTrip[3])

  strResults = strResults + thisJourney

  document.getElementById('output1').innerHTML = "<h1>" + strResults + "</h1>";
}

// planTrip ("6", "Grand Central", "N", "Times")
