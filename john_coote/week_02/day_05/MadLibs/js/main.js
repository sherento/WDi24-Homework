console.log("connected");


// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
//
// const nickname = document.getElementById('nickname');
// nickname.innerHTML = "John";

// const test = document.createElement('p')
// test.innerText = "test text. blah blah blah"
// body.appendChild(test);

// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });


////////////////

//
// const button = document.getElementById('lib-button');
//
// let makeMadLib = function () {
//   const noun1 = document.getElementById('noun').value;
//   const adjective1 = document.getElementById('adjective').value;
//   const person1 = document.getElementById('person').value;
//   const story1 = document.getElementById('story');
//
//   const text = `${person1} really likes ${adjective1} ${noun1}`;
//   story1.innerHTML = text;
// }
//
// button.addEventListener('click', makeMadLib );

const makeMadLib = function (event) {
  const noun = $('#noun').val();
  const adjective = $('#adjective').val()
  const person = $('#person').val()

  const text = `${person} <b>really</b> likes ${adjective} ${noun}`;

  $('#story').html(text);
  //$('#story').text(text);

  console.log(noun, adjective, person);
}

$('#button').on('click', makeMadLib)
