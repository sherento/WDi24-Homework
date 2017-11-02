console.log("catgif day");

// declare vasriables 0
oldLeft = 0;
newLeft = 0;
oldWidth = 0;
newWidth = 0;
let maxScreenWidth = 1000;

const catgif = document.querySelector('img');
catgif.style.position = 'absolute';
catgif.style.left = '0px';
catgif.style.top = "300px";

const walkCat = function () {



  // oldLeft = parseInt(catgif.style.left);
  // newLeft = oldLeft + 2 // bigger = faster & jumpy, smaller = slow & smmoth
  // catgif.style.left = newLeft + 'px'

console.log(catgif);
console.log(catgif.style.left);

  oldLeft = parseInt(catgif.style.left);

  console.log(oldLeft);
  let newLeft = oldLeft + 3;
  console.log(newLeft);

  let oldWidth = parseInt(catgif.style.width);
  let newWidth = oldWidth + 2;
  //console.log(newWidth);

  catgif.style.left = newLeft + 'px';
  catgif.style.width = newWidth + 'px';


  if ( oldLeft > maxScreenWidth ) {
    clearInterval(moveTimer);
    console.log("finished");
    return;
  }



}


const moveTimer = window.setInterval(walkCat, 25);



// console.log("boo");
//
// // window.setInterval(walkCat, 40);
//
//
//
// console.log("do we ever get here?");
//
// // catgif.style.left = '300 px';
// // catgif.style.width = '200 px';
//
//
// //
// // var img = document.getElementsByTagName('img')[0];
// // img.style.position = 'absolute';
// // img.style.top = '0px';
// // var watchKittyFall = function() {
// //   var oldTop = parseInt(img.style.top);
// //   var newTop = oldTop + 10;
// //   img.style.top = newTop + 'px';
// // };
// // window.setInterval(watchKittyFall, 1000);
