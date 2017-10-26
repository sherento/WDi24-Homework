console.log(`warmup day 4 - 26-10-17`);

// Serge Says
//
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.


const sergeSays = function (string1 = "") {
  console.log(`Serge is loading...`);
  console.log(string1);
  console.log(string1.toUpperCase());

  let result = ""; // declare variable that we will output to screen.

  // case 1 - no input or empty string
  if (string1 === "") {
    result = "Fine be that way!";
    return result;
  }

  // case 2  - ALL CAPS
  if (string1 === string1.toUpperCase()) {
    result = 'Woah, chill out!';
    return result;
  }

  // case 3 - it is a non-shouty question
  // all this tests for is the prescenece of a question mark. I guess it's a question, but
  // it's hardly a failsafe test '???' would be fine for it.
  // another decent way would be to check if lastLetter === "?"
  if (string1.indexOf('?') > -1) {
    result = 'sure';
    return result;
  }
  // note - I've used string.search(char) before, but seems as though '?' is a special character
  // and I wouod have to tackle regular Expression to use that method, string.indexOf seems to
  // bypass this potential problem.

  // case 4 - everything else.
  // we could have used if / then / else structure, but this'll do
  result = "Whatever";
  return result;
}
