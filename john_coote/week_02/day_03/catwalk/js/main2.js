console.log("catgif day");

const catgif = document.querySelector('img')
const img =  document.querySelector('img')
img.style.opacity = 1;
// catgif.style.left = '0px';
// catgif.style.width = '20px';
//
//
const fadeAway = function() {
  img.style.opacity = img.style.opacity - 0.1;
  if (img.style.opacity < 0.2) {
    clearInterval(fadeTimer);
  }
};


// const moveCat = function () {
//   let oldLeft = Number(catgif.stlye.left);
//   let newLeft = oldLeft + 50;
//   catgif.style.left = newLeft + 'px';
//   if ()
//
//
// }


const fadeTimer = window.setInterval(fadeAway, 800);

console.log('timer ID is ', fadeTimer);
console.log("continue");



//
// const walkCat = function () {
//
//   let maxScreenWidth = (Number(window.innerWidth) - 300)
//
//   let oldLeft = parseInt(catgif.style.left);
//   let newLeft = oldLeft + 3;
//   console.log(newLeft);
//
//   let oldWidth = Number(catgif.width);
//   let newWidth = oldWidth + 2;
//   console.log(newWidth);
//
//
//
//
//   if ( newLeft > maxScreenWidth ) {
//     clearInterval(moveTimer);
//     console.log("finished");
//     return;
//   }
//   catgif.style.left = newLeft + 'px';
//   catgif.style.width = newWidth + 'px';
//
//
// }
//
//
// const moveTimer = window.setInterval(walkCat, 25);
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
