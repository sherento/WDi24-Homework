var difference = function (a, b) { return Math.abs(a - b); }


let lLine = ['8th', '6th', 'Union Square', '3rd', '1st'];
let nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
let sixLine = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

let mta = {
  L: lLine,
  N: nLine,
  6: sixLine
};

const journeyA = function(startLine, start){ // first trip in a journey that requires a transfer
  let journey = [];
  let startIndexA = mta[startLine].indexOf(start);
  let stopIndexA = mta[startLine].indexOf('Union Square');

  if (startIndexA > stopIndexA) {     // determines which direction along the line user is travelling
    for (let i = startIndexA - 1; i >= stopIndexA ; i--) {
      journey.push(mta[startLine][i]);  // adds stops to array in order
      };
    }else{
      for (let i = startIndexA + 1; i <= stopIndexA; i++) {
        journey.push(mta[startLine][i]);
    };
  };
  return journey;
};

const journeyB = function(stopLine, stop){  // second trip in a journey that requires a transfer
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
  if(stop === "Union Square"){    // all trips starting at union square travel along a single line
    stopLine = startLine;
  };

  if(startLine === stopLine && start === stop){
    return(console.log("You do not need to get on a train, you are already at your destination"))
  }

  if(startLine !== stopLine){
    let firstLeg = journeyA(startLine, start);
    let secondLeg = journeyB(stopLine, stop);
    let stopsTotal = firstLeg.length + secondLeg.length;  // length of both arrays added === number of stops

    console.log(`You must travel through the following stops on the ${startLine} line: ${firstLeg.join(', ')}.`);
    console.log("Change at Union Square");
    console.log(`Your journey continues through the following stops on the ${stopLine} line: ${secondLeg.join(', ')}.`);
    console.log(`${stopsTotal} stops in total.`);

    return [`${firstLeg.join(', ')}`, `${secondLeg.join(', ')}`, `${stopsTotal}`] // return array for later use in dom manipulation
  }else{
    let startIndex = mta[startLine].indexOf(start);
    let stopIndex = mta[startLine].indexOf(stop);

    stops = difference(startIndex, stopIndex);
    console.log(`You travel ${stops} stops along the ${startLine} line.`);

    return [`${stops}`, `${startLine}`]
  };
};

//test cases ==========================================================
planTrip('N', 'Times Square', '6', '33rd');
console.log("===================================");
planTrip('N', 'Times Square', 'N', '28th');
console.log("===================================");
planTrip('6', 'Astor Place', 'L', '8th');
console.log("===================================");
planTrip('L', '1st', 'N', 'Times Square');
console.log("===================================");
planTrip('L', '1st', 'L', '1st');
console.log("===================================");
planTrip('L', '1st', 'N', 'Union Square');


//html content=================================================
let lDropdown = [];
let nDropdown = [];
let sixDropdown = [];
let startLinePicked = document.querySelector(".startLine");
let dynamicDropdown = document.querySelector(".startStation");  // dropdown for starting stations
let stopLinePicked = document.querySelector(".stopLine");
let dynamicDropdown2 = document.querySelector(".stopStation"); // dropdown for destination stations
let goButton = document.querySelector("#process");
let resetButton = document.querySelector("#reset");
let messageBox = document.querySelector(".messagebox");


for (var i = 0; i < lLine.length; i++) {
  lDropdown.push(`<option value="${lLine[i]}">${lLine[i]}</option>`);
};

for (var i = 0; i < nLine.length; i++) {
  nDropdown.push(`<option value="${nLine[i]}">${nLine[i]}</option>`);
};

for (var i = 0; i < sixLine.length; i++) {
  sixDropdown.push(`<option value="${sixLine[i]}">${sixLine[i]}</option>`);
};

const startDropdownChanger = function(){
  if(startLinePicked.value === "L"){
    dynamicDropdown.innerHTML = lDropdown;
  }else if(startLinePicked.value === "N"){
    dynamicDropdown.innerHTML = nDropdown;
  }else{
    dynamicDropdown.innerHTML = sixDropdown;
  };
};

const stopDropdownChanger = function(){
  if(stopLinePicked.value === "L"){
    dynamicDropdown2.innerHTML = lDropdown;
  }else if(stopLinePicked.value === "N"){
    dynamicDropdown2.innerHTML = nDropdown;
  }else{
    dynamicDropdown2.innerHTML = sixDropdown;
  };
};

startLinePicked.addEventListener('change', function(){
  startDropdownChanger();
});

stopLinePicked.addEventListener('change', function(){
  stopDropdownChanger();
});

goButton.addEventListener('click', function(){
  if(!dynamicDropdown.value){
    messageBox.innerHTML = "<p>Please select a start point</p>";
    return;
  }else if(!dynamicDropdown2.value){
    messageBox.innerHTML = "<p>Please select a destination</p>";
    return;
  };


  let journeyPrinter = planTrip(startLinePicked.value, dynamicDropdown.value, stopLinePicked.value, dynamicDropdown2.value)

  // essentially the same thing as the console version
  if(dynamicDropdown.value === dynamicDropdown2.value && startLinePicked.value === stopLinePicked.value){
    messageBox.innerHTML = `You do not need to get on a train, you are already at your destination`
  }else if(startLinePicked.value === stopLinePicked.value){
    messageBox.innerHTML = `You travel ${journeyPrinter[0]} stops along the ${journeyPrinter[1]} Line`
  }else{
    messageBox.innerHTML = `\<p>You must travel through the following stops on the ${startLinePicked.value} Line: ${journeyPrinter[0]}\</p>
                            \<p>Change at Union Square Station\</p>
                            \<p>Your journey continues along the following stops on the ${stopLinePicked.value} Line: ${journeyPrinter[1]}\</p>
                            \<p>${journeyPrinter[2]} stops in total.`
  };
});

resetButton.addEventListener('click', function(){
  document.querySelector(".messagebox").innerHTML = ""
  stopLinePicked.value = ""
  dynamicDropdown2.value = ""
  startLinePicked.value = ""
  dynamicDropdown.value = ""
});
