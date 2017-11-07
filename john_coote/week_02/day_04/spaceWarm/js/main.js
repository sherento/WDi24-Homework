console.log("space warm 101");

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


const spaceAge = function (seconds, planet) {
  console.log("functioning");
  let age = 0;

  if (planet === "Earth") {age = (seconds / 31557600)}
  if (planet === "Mercury") {age = (seconds / (31557600 * 0.2408467))}
  if (planet === "Venus") {age = (seconds / (31557600 * 0.61519726))}
  if (planet === "Mars") {age = (seconds / (31557600 * 1.8808158))}

  console.log(age);
  age = Math.round(age-0.5);
  console.log(`Planet: ${planet}, age: ${age}`);
  let result = `You are ${age} ${planet} years old`
  return result;

}

const button = document.getElementById('button');

let buttFunction = function () {
  const planet = document.getElementById('planet').value;
  const numSeconds = document.getElementById('numSeconds').value
  spaceAge(numSeconds, planet)
  // output to screen here
};

//button.addEventListener('click', buttFunction );

button.addEventListener('click', buttFunction );







// spaceAge(1500000000, "Earth");
// spaceAge(1500000000, "Mercury");
// spaceAge(1500000000, "Venus");
// spaceAge(1500000000, "Mars");
