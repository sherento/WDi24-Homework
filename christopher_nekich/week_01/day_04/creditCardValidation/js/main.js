// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple
// function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number


const validateCreditCard = function(cardNum){
  let removeDash = '';        // credit card number with dashes removed
  let multipleDigits = [];    // array for checking for at least 2 different digits
  let sumDigits = 0;           // for checking sum of digits


// for loop removes dashes from credit card
  for (let i = 0; i < cardNum.length; i++) {
    if(cardNum[i] !== '-'){
      removeDash += cardNum[i];
    };
  };

// regex tests whether every index is an integer
  let allDigits = /^\d+$/.test(removeDash);       // stolen from stackoverflow - I cannot yet make sense of regexpressions and hate that they exist

// for loop places differing digits in array to be counted later
  for (let i = 0; i < removeDash.length; i++) {
    if(multipleDigits.includes(removeDash[i]) === false){
      multipleDigits.push(removeDash[i]);
    };
  };

// evaluates to boolean to check if number is even
  isEven = parseInt(removeDash) % 2 === 0;

// splits digits into an array then for loop adds every digit to find the sum of the entire number
  if(allDigits){
    splits = removeDash.split('');
    for (var i = 0; i < splits.length; i++) {
      sumDigits += parseInt(splits[i]);
    };
  };

  result = {valid: false, number: cardNum}

// check to see if number satisfies all requirements
  if(!allDigits){
    result.error = 'invalid characters';
    return result;
  }else if(multipleDigits.length < 2){
    result.error = 'only one type of number';
    return result;
  }else if(!isEven){
    result.error = 'odd final number'
    return result;
  }else if(sumDigits < 16){
    result.error = 'sum less than 16';
    return result;
  }else{
    result.valid = true;
    return result
  };

};
