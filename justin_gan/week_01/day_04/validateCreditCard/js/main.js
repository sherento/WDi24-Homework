/*
Credit Card Validation
*/

const validateCreditCard = function ( n ) {
  let creditCard  = {
    number: n
  };

  // remove hyphens
  let nArr = n.replace(/-/g, '');
  const sum = nArr.split('').reduce(function (a, b) {
    return parseInt(a) + parseInt(b);
  }, 0);
  // check if number is 16 digits
  if ( nArr.length !== 16 ) {
    creditCard.valid = false;
    creditCard.error = 'invalid_card_length';
    return creditCard;
  }
  // check if all characters are numbers
  else if ( /[^0-9]/.test(nArr) ) {
    creditCard.valid = false;
    creditCard.error = 'invalid_characters';
    return creditCard;
  }
  // check if there are at least 2 different digits
  else if ( allDigitsSame(nArr) ) {
    creditCard.valid = false;
    creditCard.error = 'only_one_type_of_number';
    return creditCard;
  }
  // check if the final digit is even
  else if ( nArr[ nArr.length - 1 ] % 2 !== 0 ) {
    creditCard.valid = false;
    creditCard.error = 'final_digit_is_odd';
    return creditCard;
  }
  // check if sum of all digits is more than 16
  else if ( 16 >= sum ) {
    creditCard.valid = false;
    creditCard.error = 'sum_of_digits_less_than_16';
    return creditCard;
  } else {
    creditCard.valid = true;
    creditCard.number = n;
    return creditCard;
  }
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
