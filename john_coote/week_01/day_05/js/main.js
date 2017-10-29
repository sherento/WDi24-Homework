console.log("is this thing on? - day 1.5");

const N = ["Times", "34th", "28th", "23rd", "Union Square", "8th"]
const L = ["8th", "6th", "Union Square", "3rd", "1st"]
const SIX = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]



const planTrip = function (startLine, startStation, finishLine, finishStation) {
  // This is the overall function, that we will be calling from the command line or
  // the browser or whatever. it will call other functions from within.

  trip1 = [];
  trip2 = [];


  console.log(`Walk, Bus , Uber to ${startStation} on the ${startLine} Line`);

  if (startLine === finishLine) {
    trip1 = planTripSingle (startLine, startStation, finishLine, finishStation)
  } else {
    // need to change at Union Square.
    trip1 = planTripSingle (startLine, startStation, startLine, "Union Square")
    console.log(`Change trains at ${trip1[trip1.length -1]}. The next part of your jorney is on the ${finishLine} line.`);
    trip2 = planTripSingle (finishLine, "Union Square", finishLine, finishStation)
  }

  console.log("Get off the train and continue to your destination by foot, bus, hoverboard etc. " + 
  "This trip contains a total of " + (trip1.length + trip2.length - 1) + " stops");

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


for (var i = 0; i < testTrips.length; i++) {
  testTrip = testTrips[i]
  console.log("**********************");
  console.log(`Testing from ${testTrip[1]} on the ${testTrip[0]} line to ${testTrip[3]} on the ${testTrip[2]} line`);
  planTrip (testTrip[0], testTrip[1], testTrip[2], testTrip[3])
  console.log("**********************");
}



planTrip ("6", "Grand Central", "N", "Times")
