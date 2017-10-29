
//global scope //
//object with arrays for each line
let station1 = " ";
let station2 = " ";
let tripLog = " ";

let mta = {
  lLine: [ "8th", "6th", "union square", "3rd", "1st" ],
  sixLine: [ "grand central", "33rd", "28th", "23rd", "union square", "astor place" ],
  nLine: [ "34th", "28th", "23rd", "union square", "8th"]
}

///////////TESTING ARRAYS//////////////
//console.log(mta.lLine);
//console.log(mta.sixLine);
//console.log(mta.nLine);

//work on travelling along 1 line forwards

//master function //
const tripPlan = function (startStat, startStop, endStat, endStop) {
  console.log(station1 = startStat);
  console.log(station2 = endStat);
}

console.log(tripPlan("lLine", "6th", "lLine", "1st"));

//can call an array and its values
for (const prop in mta) {
  console.log(`mta.${prop} = ${mta[prop]}`);
}

//find starting and ending stop //use indexOf
//can't work out how to use 'indexOf' if I dont have the array name eg. the station
let start = function(stop1, stop2) {
  console.log(mta.lLine.indexOf(stop1, [0]));
  console.log(mta.lLine.indexOf(stop2, [0]));
}

start("6th", "1st");

//loop through object to display stations you'll go through
//use for loop to console.log stops from starting station to end of line
//can't work out how to use the indexes I found as the start and end of the loop
let stops = function (line) {
    while (//line index is between 1 and 4 //i is between line[1] and line [4]) {
          tripLog = tripLog + " " + line[i]
    }
      console.log(tripLog);
}

stops(mta.lLine);

//once I have the index of the starting and ending stop could I use the array,obj.push(); method to push the stops I want to display in a new variable eg.tripLog??


//store these stations in new variable //using tripLog

//console.log stops for trip using string.length of new variable

console.log(tripLog.length);
