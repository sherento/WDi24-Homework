const maxOfTwoNumbers = function ( a, b ) {
  if ( a > b ) {
    return a;
  } else {
    return b;
  }
}

const maxOfThree = function ( a, b, c ) {
  if ( a > b && a > c ) {
    return a;
  }
  else if ( b > a && b > c ) {
    return b;
  }
  else {
    return c;
  }
}

const isVowel = function ( char ) {
  const reVowel = /[aeiou]/i;
  if ( reVowel.test(char) ) {
    return true;
  } else {
    return false;
  }
}

const sumarr = function ( arr ) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

const multiplyarr = function ( arr ) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

const reverseString = function ( str ) {
  let newStr = '';
  for (let i = (str.length - 1) ; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

const findLongestWord = function ( arr ) {
  let longest = '';
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i].length > longest.length ) {
      longest = arr[i];
    }
  }
  return longest;
}

const filterLongWords = function ( arr, i ) {
  let newArr = [];
  for (let j = 0; j < arr.length; j++) {
    if ( arr[j].length > i ) {
      newArr.push(arr[j]);
    }
  }
  return newArr;
}
