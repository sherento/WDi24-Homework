const word = {

  values: {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
  },

  scrabble: function( word ){
    // Takes the argument and coverts the string to uppercase.
    word = word.toUpperCase();
    // console.log(word);
    let score = 0;

    // iterates through each letter in the string.
    for (let i = 0; i < word.length; i++) {
      // console.log(word[i]);

      // Loops through the object with each letter of the string.
      for (let key in this.values) {
        // console.log(this.values[key]);

        // checks to see if the letter is in the object. If so, we take the key from that value and turn it into an integer then add that integer to the score variable.
        if ( this.values[key].indexOf( word[i] ) > -1 ){
          score += parseInt(key);

          // break out so we don't have to loop through the whole object.
          break;
        }
      }
    }
    return score;
  }

};

console.log(word.scrabble("cabbage"));
