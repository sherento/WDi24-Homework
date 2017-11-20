console.log("anagram");

// Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".


// main function (string, array)
// split array into strings
// loop through array (using for of)
// send to stringMatcher (string1, string2) // along with original string.
// log the returned value

// stringMatcher (string1, string2)
// reject strings of unequal length
// sort alpha
// if string1 === string2
// return true

let stringSorter = function (string) {
  // first split the text (makes an array)
  // then sort the array
  // then join the array into a string
  let sorted = string.split('').sort().join('');
  return sorted;
}

let stringMatcher = function (string1, string2) {
  let string1Sorted = stringSorter(string1);
  let string2Sorted = stringSorter(string2);
  if (string1Sorted === string2Sorted) {
    return true;
  }
  return false;
}

let anagramDetective = function (string1, array1) {
  let string2 = "";
  for (let string2 of array1) {
    if (stringMatcher(string1, string2)) {
      console.log(string2);
    }
  }
}


string1 = "listen"
array1 = ["enlists", "google", "inlets", "banana"]

anagramDetective (string1, array1)



let objectDetective = {
  stringSorter: function (string) {
    return string.split('').sort().join('');
  },
  stringMatcher: function (string1, string2) {
    let string1Sorted = this.stringSorter(string1);
    let string2Sorted = this.stringSorter(string2);
    if (string1Sorted === string2Sorted) {
      return true;
    }
    return false;
  },
  check: function (string1, array1) {
    let string2 = "";
    for (let string2 of array1) {
      if (this.stringMatcher(string1, string2)) {
        console.log(string2);
      }
    }
  }
}

objectDetective.check (string1, array1);
