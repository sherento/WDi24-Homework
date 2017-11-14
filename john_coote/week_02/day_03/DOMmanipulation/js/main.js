console.log("DOM");


// Create a new Javascript file and link to it with a script tag at the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.


// document.body.font-family = "Arial, sans-serif";
//
// let bodyTag = document.getElementsByTagName('body')[0]
// const newFont = "Arial, sans-serif"
// bodyTag = bodyTag + newFont;

const body = document.querySelector('body');
body.style.fontFamily = "Arial, sans-serif";

const nickname = document.getElementById('nickname');
nickname.innerHTML = "John";


let list = document.getElementsByTagName('li');
for (var i = 0; i < list.length; i++) {
  list[i].className = "listitem";
}


let bill = document.createElement('img');
bill.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Edsger_Wybe_Dijkstra.jpg/440px-Edsger_Wybe_Dijkstra.jpg"
body.appendChild(bill)

const test = document.createElement('p')
test.innerText = "test text. blah blah blah"
body.appendChild(test);
