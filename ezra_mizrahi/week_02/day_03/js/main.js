////////////////////////////////////////////////////////////////////////////////
// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px",
// so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels
// to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving
// across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen,
// restart them at the left hand side ("0px").
// So they should keep walking from left to right across the screen,
// forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen,
// make them move backwards instead.
// They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen,
// replace the img with an image of a cat dancing,
// keep it dancing for 10 seconds, and then replace the img
// with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.

const img = document.getElementsByTagName('img')[0];
let windowWidth = window.innerWidth;

img.style.position = 'absolute';

img.style.left = '0px';

img.style.right = '0px';





const watchCatWalk = function() {
  let oldLeft = parseInt(img.style.left);
  let newLeft = oldLeft + 10;
  img.style.left = newLeft + 'px';
  if (img.style.left > window.innerWidth) {
    newLeft = oldLeft - 10;
  } else {
    newLeft = oldLeft + 10;
  }
};

// const watchCatWalkLeft = function() {
//   let oldRight = parseInt(img.style.right);
//   let newRight = oldRight + 10;
//   img.style.right = newRight + 'px';
// };




window.setInterval(watchCatWalk, 50);

// window.setInterval(watchCatWalkLeft, 50);

// var img = document.getElementsByTagName('img')[0];
// img.style.position = 'absolute';
// img.style.top = '0px';
// var watchKittyFall = function() {
//   var oldTop = parseInt(img.style.top);
//   var newTop = oldTop + 10;
//   img.style.top = newTop + 'px';
// };
//
// window.setInterval(watchKittyFall, 1000);
