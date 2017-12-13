// Space Age Warmup
//
// Given an age in seconds, calculate how old someone would be on:
//
// Earth: orbital period 365.25 Earth days, or 31557600 seconds
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31 Earth-years old.
//
// There are 31557600 seconds in an Earth year.
//
// Bonus:
//
// Have the option of either returning the ages on all planets, or any of the above planets individually.

const planetAges = {
  'Earth': 1,
  'Mercury': 0.2408467,
  'Venus': 0.61519726,
  'Mars': 1.8808158,
  'Jupiter': 11.862615,
  'Saturn': 29.447498,
  'Uranus': 84.016846,
  'Neptune': 164.79132
};

const spaceAges = function( seconds ){
  // using 'for in' loop to gain access to the keys
  for ( let key in planetAges ){
    // figuring out what 1 earth year would equal in seconds.
    let earthYears = seconds / 31557600;
    console.log( planetAges[key] );
    console.log( `Your are on ${ key } is ${ earthYears / planetAges[key] }`  );
  }
};

spaceAges(31557600);

// taking two arguments so we can target a specific planet. 
const singlePlanet = function( seconds, planet ){
  let earthYears = seconds / 31557600;
  console.log( `Your age on ${ planet } is ${ earthYears / planetAges[planet] }.` );
};

singlePlanet( 31557600, 'Earth' );
