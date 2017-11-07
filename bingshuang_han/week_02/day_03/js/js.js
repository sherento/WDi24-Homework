//****************************************************
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//********************************************************
// const image = document.getElementsByTagName('img')[0];
// let b= 0 ;
// const catWalk = function (){
//   b += 10;
//   //console.log(b);
//   image.style.left = b+ "px";
//   if (b>960){
//       clearInterval(fadeTimer);
//       b = 0;
//   }
// }
//
// const fadeTimer = setInterval(catWalk,50);
// setInterval(catWalk,50);


// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// const image = document.getElementsByTagName('img')[0];
// let b= 0 ;
// const catWalk = function (){
//   b += 10;
//   console.log(b);
//   image.style.left = b+ "px";
//   if (b>960){
//       //clearInterval(fadeTimer);
//     b=0;
//   }
// }
//
// //const fadeTimer = setInterval(catWalk,500);
// setInterval(catWalk,2000);


//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.


var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
let c = false;

const catDance = function( ){
  img.src="images/dance.gif";
  console.log('The function walk is called');
}
const catWalk1 = function(){
  img.src ='images/walk.gif';
  console.log('The function continue is called');
  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft + 10;
 console.log(newLeft);
 img.style.left = newLeft + 'px';
   if (newLeft > 900) {
    -webkit-transform: scaleX(-1);
    //transform: scaleX(-1);
    clearInterval(setInterval(catWalk1(),100));

   }
}



var catWalk = function() {

  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft + 10;
  console.log(newLeft);
  img.style.left = newLeft + 'px';
  //console.log(fadeTimer);
  if (newLeft === 460){


     clearInterval(fadeTimer)
     setTimeout(catDance,1000);
     console.log('hello');
     //setTimeout(setInterval(catWalk1, 100),12000);




  }

}


const fadeTimer = setInterval(catWalk, 100);

// const conWalk = function () {
//   img.src="images/slack-imgs.com.gif";
//   const timer2 = setInterval(catWalk1, 100);
//
// }



//setTimeout(setInterval(catWalk, 100), 1000);
//const fadeTimer2 = setInterval(catWalk2, 100);


//window.setInterval(watchKittyFall, 100);

// file:///C:/Users/Ice.DESKTOP-GVH8QIH/fundamentals/Javascript/homework/WDi24-Homework/bingshuang_han/week_02/day_03/index.html

//
// Bonus #4: Pretty much go nuts or whatever.
