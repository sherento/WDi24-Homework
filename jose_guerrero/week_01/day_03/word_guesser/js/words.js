const answer = ["F","O","X"];   /// array to be discovered
let temp = ["_","_","_"];  /// input of the user

const correct_answer = 10; /// points for each correct answer
const wrong_answer = 5; /// points for each incorrect answer
let amount = 0;  /// variable which contains the amount gained when the game finishes
let tries = 0;  /// number of tries to guess all the words
const max_tries = 6;  /// maximum tries allowed to win the game
let index_hombre = 0;  /// index of the array "hombre"
const hang_man = ["   O\n", "  /", "|", "\\\n", "  /","\\\n"];  /// hangman composition


const maxi = function(a,b)  /// This function returns the maximum of 2 values
{
  if (a>b) return a;
  return b;
}

function guessLetter(aux) /// This function determines if the user guessed a letter
{
  let flag = false; /// This variable will determine if the user guessed a letter

  for (let i=0;i<answer.length;i++) /// abalyse all the values of the array
  {
    if (aux === answer[i] && temp[i]==="_")  /// the user guessed and it is the first time this character has been mentioned?
    {
      flag = true;  /// The user effectively guessed a letter
      temp[i] = answer[i];  /// update the array of the user
      window.alert(`Congrats you found a letter! ${temp.join("")}`);

      amount += correct_answer; /// the user earned some coins when the letter was guessed
    }
  }

  if (!flag)
  {
    temp_hangman += hang_man[tries]; /// let's addition one member of the hangman
    tries++; /// udate the tries allowed for the user
    window.alert(temp_hangman); /// display the hangman
    amount = maxi( amount - wrong_answer, 0 ); /// substract the amount earned if the user has otherwise keep it "Zero"
  }
}

let temp_hangman ="___\n   |\n"; /// initialization of the hangman composition
window.alert("Welcome to Word Gresser!!!!");  /// Initial Message
while (1)
{
  let aux = prompt("Please guess a letter"); /// user input of a character

  guessLetter(aux);

  if (temp.indexOf("_")<0) /// all the characters were discovered?
  {
    window.alert("Congratulations!! you won the game");
    break;
  }

  if (tries === max_tries) /// the number of tries allowed is the same than the maximum allowed
  {
    window.alert("Dead man!!");
    break;
  }
}

window.alert(`Your amount is ${amount}`); /// display the amount earned by the user
