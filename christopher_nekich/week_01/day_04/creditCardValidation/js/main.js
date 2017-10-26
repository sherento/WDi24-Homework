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
  let removeDash = '';
  let multipleDigits = [];
  let sumDigits = 0

  for (let i = 0; i < cardNum.length; i++) {
    if(cardNum[i] !== '-'){
      removeDash += cardNum[i];
    };
  };

  let allDigits = /^\d+$/.test(removeDash);


  for (let i = 0; i < removeDash.length; i++) {
    if(multipleDigits.includes(removeDash[i]) === false){
      multipleDigits.push(removeDash[i]);
    };
  };

  isEven = parseInt(removeDash) % 2 === 0;

  if(allDigits){
    splits = removeDash.split('');
    for (var i = 0; i < splits.length; i++) {
      sumDigits += parseInt(splits[i]);
    }
  }

  if(!allDigits){
    return false
  }else if(multipleDigits.length < 2){
    return false
  }else if(!isEven){
    return false
  }else if(sumDigits < 16){
    return false
  }else{
    return true
  }

};
