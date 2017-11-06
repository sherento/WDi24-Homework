console.log('scrab2');


const scrabble = {
  values: {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q','Z']
  },
  scoreWord: function (string1) {
    let score = 0;
    let num = 0;

    for (var i = 0; i < string1.length; i++) {
      let char1 = string1[i] //this is the char we will search for
      console.log(char1);

      let arr1 = Object.keys(scrabble.values) //an array of the key values.
      for (var j = 0; j < arr1.length; j++) {
        let key = arr1[j]
        let arr2 = scrabble.values[key] // an array of the letters in the jth value.
        //console.log(arr2);
        if (arr2.indexOf(char1) > -1) {
          num = Number(key);
          score = score + num;

        }

      }
    } //end of i loop searching for char.
    return score;
  },
  testing: function () {
    for (let key in scrabble.values) {
      //console.log(key);
      arr = scrabble.values[key];
      console.log(key, this.values[key], Number(key));
    }
  },

  scoring2: function (string1) {
    score = 0;
    for (var i = 0; i < string1.length; i++) {
      let char1 = string1[i];

      for (let key in this.values) {
        num1 = Number(key);
        if (this.values[key].indexOf(char1) > -1) {
          score = score + num1;
          break;
        }
      }
    } return score;
  }
}


//console.log(scrabble.scoreWord('CABBAGE'));
//console.log(scrabble.scoring2('CABBAGE'));



const scrab2 = {
  values: {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    G: 2,
    O: 1
  },
  score2: function (string2) {
    let score = 0;
    for (var i = 0; i < string2.length; i++) {
      let char1 = string2[i];
      for (let key in scrab2.values) {
        let num1 = scrab2.values[key];
        if (key === char1) {
          score = score + num1;
          break;
        }
      }
    }
    return score;
  }

}

console.log(scrab2.score2("BOB"));
console.log(scrab2.score2("CABBAGE"));
