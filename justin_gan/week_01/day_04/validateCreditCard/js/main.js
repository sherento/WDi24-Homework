/*
Credit Card Validation
*/

const validateCreditCard = function ( n ) {
  console.log(n.replace(/-/g, ''));
  // remove hyphens
  let nArr = n.replace(/-/g, '');
  const sum = nArr.split('').reduce(function (a, b) {
    return parseInt(a) + parseInt(b);
  }, 0);
  // check if number is 16 digits
  if ( nArr.length !== 16 ) {
    return false;
  }
  // check if all characters are numbers
  else if ( /[^0-9]/.test(nArr) ) {
    return false;
  }
  // check if there are at least 2 different digits
  else if ( allDigitsSame(nArr) ) {
    return false;
  }
  // check if the final digit is even
  else if ( nArr[ nArr.length - 1 ] % 2 !== 0 ) {
    return false;
  }
  // check if sum of all digits is more than 16
  else if ( 16 >= sum ) {
    return false;
  }
  return true;
}

const allDigitsSame = function ( n ) {
  let firstDigit = n[0];
  let same = true;
  // iterate over array to check if all match the first digit
  for (let i = 1; i < n.length; i++) {
    if ( n[i] !== firstDigit ) {
      same = false;
      break;
    }
  }
  return same;
}

console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('6666-6666-6666-1666'));
console.log(validateCreditCard('a923-3211-9c01-1112'));
console.log(validateCreditCard('4444-4444-4444-4444'));
console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('6666-6666-6666-6661'));
console.log(validateCreditCard('9999-9999-8888-00001'));
