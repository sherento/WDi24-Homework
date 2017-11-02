console.log("testing.. testing..");

//1.
const maxOfTwoNumbers = function(a, b) {

    if (a > b) {
        return a;
    } else {
        return b;
    }
};
console.log(`The greater number of 23 and 18 is ${ maxOfTwoNumbers(23,18) }.`)
console.log(`The greater number of 7 and 40 is ${ maxOfTwoNumbers(7,40) }.`)

//2.
const maxOfThree = function(a, b, c) {

    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    }
};
console.log(`The greater number of 2, 5 and 9 is ${maxOfThree(2, 5, 9)}`);
console.log(`The greater number of 8, 12 and 3 is ${maxOfThree(8, 12, 3)}`);

//3.
const vowel = ['a', 'e', 'i', 'o', 'u'];
const str = function(letter) {
    if (vowel.includes(letter)) {
        console.log(`${letter} is a vowel and thus true`);
        return true;
    } else {
        console.log(`${letter} is not a vowel and thus false`);
        return false;
    }
};

str('a');
str('b');
str('c');


//4.
let array = [1, 2, 3, 4];
const sumArray = function(array) {
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total = total + array[i];
        console.log(total);
    }
    return total;
};
console.log(sumArray(array));

const multiplyArray = function(array) {
    let total = 1;
    for (i = 0; i < array.length; i++) {
        total = total * array[i];
        console.log(total);
    }
    return total;
};
console.log(multiplyArray(array));

// 5.
let string = "";
const reverseString = function(string) {
    let revString = "";
    for (i = string.length - 1; i >= 0; i--) {
        revString = revString + string[i];
        // console.log(revString);
    }
    return revString;
};
console.log(reverseString('string'));

//6.

const findLongestWord = function(arrayLong) {
    var words = 0;
    for (i = 0; i < arrayLong.length; i++) {
        if (arrayLong[i].length > words) {
            var words = arrayLong[i].length;
        }
    }
    return words;

};
console.log(findLongestWord(['bee', 'flower', 'shine']));


//7.****** not complete
let listOfWords = ['sunshine', 'a', 'bee', 'flowers', 'sun'];
const filterLongWords = function(listOfWords) {
  let wordLength = listOfWords[i].length;
    for (i = 0; i < listOfWords.length; i++) {
        if (wordLength > i) {
          console.log(listOfWords);
      }
   }
};
console.log(filterLongWords('sunshine', 'a', 'bee', 'flowers', 'sun'));
