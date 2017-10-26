// Closure
(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (value === null || isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // If the value is negative...
    if (value < 0) {
      return -decimalAdjust(type, -value, exp);
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();
// log and return the square of a number
const squareNumber = function ( num ) {
  const square = num * num;
  const msg = `The result of squaring the number ${ num } is ${ square }.`;
  console.log(msg)
  return square;
}

// log and return the result of halving a number
const halfNumber = function ( num ) {
  const half = num / 2;
  const msg = `Half of ${ num } is ${ half }.`;
  console.log(msg);
  return half;
}

// log and return the percentage of 2 numbers
const percentOf = function ( num1, num2 ) {
  const percentage = Math.round10(( num1 / num2 * 100 ), -2);
  const msg = `${ num1 } is ${ percentage }% of ${ num2 }.`
  console.log(msg);
  return percentage;
}

// log and return the area of a circle
const areaOfCircle = function ( radius ) {
  const area = Math.round10(( Math.PI * radius * radius ), -2);
  const msg = `The area for a circle with radius ${ radius } is ${ area }.`;
  console.log(area);
  return area;
}

// combine half, square, area, percentage into one function
const megaFunction = function ( num ) {
  const half = halfNumber(num);
  const square = squareNumber(half);
  const area = areaOfCircle(square);
  const percentage = percentOf(square, area);
}

megaFunction(6);

// DrEvil

const DrEvil = function ( amount ) {
  if ( amount === 1000000 ) {
    // console.log(`${ amount } dollars (pinky)`;
    return `${ amount } dollars (pinky)`;
  } else {
    return `${ amount } dollars`;
  }
}

console.log(DrEvil(1000000));
console.log(DrEvil(10));

// MixUp

const mixUp = function ( str1, str2 ) {
  const str = `${ str2.slice(0,2) + str1.slice(2, str1.length) } ${ str1.slice(0,2) + str2.slice(2, str2.length) }` ;
  return str;
}

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));
console.log(mixUp('no', 'ya'));

// FixStart
const fixStart = function ( str ) {
  const firstChar = str[0];
  // create regex object of first char
  const re = new RegExp(firstChar, 'g');
  // replace all matching characters with '*'
  let newStr = str.replace(re, "*");
  // replace first character with original
  newStr = newStr.replace('*', firstChar);
  return newStr;
}

console.log(fixStart( 'babble' ));
console.log(fixStart( 'rare' ));

// Verbing

const verbing = function ( str ) {
  const regexE = /e$/i;
  const regexDouble = /([^aoeui])([aoeui])([^aoeui])$/i;
  const regexWXY = /[xyz]$/i;
  const regexIng = /ing$/i;
  // if str length less than 3, leave it unchanged
  if ( str.length < 3 ) {
    return str;
  }
  // if str ends in 'ing' add 'ly'
  else if ( regexIng.test(str) ) {
    const newStr = str.concat('ly');
    return newStr;
  }
  // if str ends in 'e', remove 'e' & add 'ing'
  else if ( regexE.test(str) ) {
    const newStr = str.replace(regexE, 'ing');
    return newStr;
  }
  // if str ends in consonant + vowel + consonant, double final consonant & add 'ing'
    // if str ends in W, X, Y, don't double the final consonant
    //
  else if ( regexDouble.test(str)  && !regexWXY.test(str) ) {
    const newStr = str.concat(( str[str.length - 1] ), 'ing');
    return newStr;
  }
  // default case, add 'ing'
  else {
    const newStr = str.concat('ing');
    return newStr;
  }
}

console.log(verbing('live'));
console.log(verbing('have'));
console.log(verbing('make'));
console.log(verbing('stop'));
console.log(verbing('sit'));
console.log(verbing('swim'));
console.log(verbing('swimming'));
console.log(verbing('sitting'));
console.log(verbing('fix'));
console.log(verbing('feel'));
console.log(verbing('work'));

// Not Bad
const notBad = function ( str ) {
  // find position of bad & not
  const badPosition = str.indexOf('bad');
  const notPosition = str.indexOf('not ');
  const badEnd = badPosition + 3;
  let newStr;

  // return original sentence if 'not' not in sentence
  if (( notPosition === -1 ) || ( notPosition > badPosition )) {
    return str;
  }
  // replace 'not ... bad' with 'good' if 'bad' follows 'not'
  else if ( badPosition > notPosition ) {
    newStr = str.slice(0, notPosition).concat('good', str.slice(badEnd, str.length));
    return newStr;
  }

  console.log(badPosition, notPosition, badEnd, newStr);
}

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
