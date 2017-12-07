// Eventually we want five console.logs that look like the following...
//
// Groucho Marx was born in 1890.
// Chico Marx was born in 1887.
// Zeppo Marx was born in 1901.
// Harpo Marx was born in 1888.
// Gummo Marx was born in 1892.
// You'll need to rearrange the data firstly, then alter the data, then print it out.

console.log( `MARX BROS PUZZLE` );

const startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];

// rearrange data
const brothers = _(startingData).map(function (arr) {
  return _.chain(arr)
    .unzip()
    .object()
    .invert()
    .value();
});

// make function for title case
const title = function ( str ) {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
};

// log out each sentence
_(brothers).each(function (b) {
  console.log(
    `${ title(b.firstName) } ${ title(b.lastName) } was born in ${b.born}.`
  );
});
