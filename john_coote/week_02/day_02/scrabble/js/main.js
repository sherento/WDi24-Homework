console.log('scrabble page');


const word = {
  values: {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  },
  score: function (string1) {
    wordScore = 0;
    let numKeys = Object.keys(this.values).length //this is the number of keys within the key 'values'
    //console.log('number of keys (aka values ' + numKeys);
    //loop through each char in string1
    for (var i = 0; i < string1.length; i++) {
      // loop through the arrays in values to match the letter
      let char1 = string1[i];
      //console.log('the letter being tested ' + char1);


      for (let key in this.values) {  // is char1 in all arrays
        let arr = this.values[key];
        let letterPoints = Number(key);
        //console.log(arr, key);

        if (arr.indexOf(char1) > -1) {   // is char1 in this one array
          //console.log("Success");
          wordScore = wordScore + letterPoints;
          //console.log('the word score  ' + wordScore);
        }
      }
    }
    return wordScore;
  }
}

console.log(word.score('CABBAGE'));
