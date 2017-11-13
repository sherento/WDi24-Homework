/*Create a new Javascript file and link to it with a script tag at the bottom.

Create a variable to store a reference to the img.

Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.*/

//console.log("working"); //check console is connected

const cat = document.getElementsByTagName('img')[0];

let maxWidth = window.innerWidth;

//console.log(cat); //check cat image is stored in new variable 'cat'

cat.style.left = '0px';                 //start cat at the left hand side of the screen

const catWalk = function () {          //create function to make cat move  by changing its position at intervals
  const oldPosition = parseInt(cat.style.left);   //save initial position in a new variable
  const newPosition = oldPosition + 10;           //save new position by taking initial position and adding 10 pixels
  cat.style.left = newPosition + 'px';            //change the position of the cat and make it equal the new position in pixels
  if (parseInt(cat.style.left) >= maxWidth) {
    //console.log('true');
    cat.style.left = '0px';
  }
};


  // console.log(maxWidth);

setInterval(catWalk, 50);                         //call event but passing in function and interval time
