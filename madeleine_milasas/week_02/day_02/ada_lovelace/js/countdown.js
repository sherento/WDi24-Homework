// console.log( `Working` );

// date declaration format: new Date(year, month, date, hours, minutes, seconds, milliseconds);

// current date and time
const currentDateMs = Date.now();


// ada lovelace day 2018
const adaDate = new Date(2018, 9, 9, 0, 0, 0, 0); // 9 is october
adaDateMs = adaDate.getTime();



const dateDifference = function ( date1, date2 ) { // dates in ms, earlier then later i.e. now then ada
  let count = '';

  let diff = date2 - date1; // now we have difference in ms

  diff = Math.floor(diff / 1000); // round down to nearest second

  let seconds = Math.floor(diff % 60); // i.e. seconds display is remainder after dividing for minutes
  diff = diff / 60; // prep to now calc for minutes

  // repeat for mins and hours
  let minutes = Math.floor(diff % 60);
  diff = diff / 60;

  let hours = Math.floor(diff % 24);
  diff = diff / 24;

  // stopping at days, so round what remains to days
  let days = Math.floor(diff);

  // count = `${ days } days, ${ hours } hours, ${ minutes } minutes and ${ seconds } seconds to go`;
  count = `<h3>DAYS - ${ days }</h3><h3>HOURS - ${ hours }</h3><h3>MINUTES - ${ minutes }</h3><h3>SECONDS - ${ seconds }</h3>`;



  console.log( count );
  return count;
};


let currentCountdown = dateDifference(currentDateMs, adaDateMs);



document.getElementById("countdown").innerHTML= currentCountdown;
