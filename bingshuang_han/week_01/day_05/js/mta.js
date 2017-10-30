/*
MTA Lab
Objectives:

    Apply your knowledge of Javascript to solve a real world problem.
    Get really good at array manipulation.

Activity

    Create a program that models a simple subway system.

    The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function  and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

    There are 3 subway lines:
        The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
        The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
        The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
        All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
    Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

*/
//******************************************************************************************************************
// Declare gloal arrays to hold lines information//////////////////////////////////////////////
// Choose line's name as the keys;
const lines = {
  lineN:['Times Square', '34th', '28th', '23rd', 'Union Square',  '8th'],
  lineL:['8th', '6th', 'Union Square', '3rd',  '1st'],
  line6:['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}


// Declare the function for user to travel within the same line.
const travelSameLine = function (lineName,station1,station2){

//Declare local array pathStation to hold all the stops and pathStationString to hold stops name in string.
  let pathStation = [];
  let pathStationString = "";
  let nameOfLine = lineName;
  const a=lines[lineName].indexOf (station1);
  const b=lines[lineName].indexOf (station2);
  if ( a < b ) {
  // travel direction from left to right
    for ( let i=a; i<=b; i++){
      pathStation.push ( lines[lineName][i] );
    }
    pathStationString = pathStation.join(', ');
    console.log(pathStationString);
    return( b - a ) ;
  }
  else{
  //travel direction from right to left;
    for ( let i=a; i>=b;i--){
      pathStation.push(lines[lineName][i] );
    }
    pathStationString = pathStation.join(', ');
    console.log(pathStationString);
    return ( a - b ) ;
    }

}
//test for travelSameLine
//***************************************************************************************
// travelSameLine('lineN', '34th',  'Union Square');
// travelSameLine('lineN','Union Square', '34th' );

//*****************************************************************************************

// main function for travel plan
const planTrip = function ( ){
     const input = prompt ("Input your travel information: Get on line and station ; Get off line and station: ","line6,Grand Central,lineN,34th"  );
     const arrayOfStrings = input.split (",");
     const line1 = arrayOfStrings[0];
     const station1 = arrayOfStrings[1];
     const line2 = arrayOfStrings[2];
     const station2 = arrayOfStrings[3];
     console.log( input);
     console.log(arrayOfStrings);

  if (line1 === line2 )
  {
    //travel in same line;
    if (( line1 === 'lineN' )|| (line1 === 'lineL') ||(line1 ==='line6')){
      console.log(`You must travel through the following stops on the ${line1}`);
      let c =travelSameLine(line1,station1,station2);
      console.log(`${c } stops in total`)
    }
    else{
      console.log("Your travel line is not exit!!!");
    }
  }
 else {
  //travel in different line, need to change at Union Square station.
  //step 1: from any starting station to Union Square station ---same line;
  //step 2: from Square station to destination station--same line;
   console.log(`You must travel through the following stops on the ${line1}`);
   let a = travelSameLine (line1, station1,'Union Square');
   console.log(`Change at Union Square to ${line2}`);
   console.log(`Your journey continues through the following stops: `);
   let b = travelSameLine(line2,'Union Square',station2);
   console.log (`${a+b} stops in total.`);


  }
}
// test for travel in the same line
//***********************************************************************
// planTrip('lineN', '34th', 'lineN', 'Union Square');
// planTrip('lineN', 'Union Square', 'lineN', '34th');
// planTrip('lineL', '1st', 'lineL', 'Union Square');
// planTrip('lineL', 'Union Square', 'lineL', '1st');
// planTrip('line6', '33rd', 'line6', 'Union Square');
// planTrip('line6', '28th', 'line6', '33rd');
// planTrip('lineM', '28th', 'lineM', '33rd');
//*************************************************************************
//test for travel in different lines
//*************************************************************************
// planTrip('lineN', '34th', 'lineL', '1st');
// planTrip('line6', 'Grand Central', 'lineN', '34th');

//  lineN,34th,lineL,1st
//line6,Grand Central,lineN,34th
