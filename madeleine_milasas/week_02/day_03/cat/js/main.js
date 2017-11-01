
// Cat position vars
const posH = '40px';
const posV = '200px';
const size = '140px';
const middleBarrier = 340;
const edgeBarrier = 150;
const finalBarrier = 250;
// Circle vars
// const circleStartWidth = 2;


// FIRST CAT INIT
const cat = document.getElementById('cat');
cat.style.position = 'absolute';
cat.style.left = posH;
cat.style.top = posV;
cat.style.width = size;
cat.style.filter = 'grayscale(100%)';

// SECOND CAT INIT
const catMirror = document.getElementById('cat-mirror');
catMirror.style.position = 'absolute';
catMirror.style.right = posH;
catMirror.style.top = posV;
catMirror.style.width = size;
catMirror.style.transform = 'scaleX(-1)';
catMirror.style.filter = 'grayscale(100%)';

// CIRCLE INIT
const circle = document.getElementById('circle');
circle.style.width = '20px';
circle.style.visibility = 'hidden';
circle.style.position = 'fixed';
let h = window.innerHeight;
circle.style.top = `${ h / 2 }px`;
let w = window.innerWidth;
circle.style.right = `${ w / 2 }px`;
circle.style.transform = 'scale(1, 1)';

/////////////

const catWalkLtoR = function () {
  let oldH = parseFloat(cat.style.left);
  let oldV = parseFloat(cat.style.top);
  let oldWidth = parseFloat(cat.style.width);
  let newH = oldH + 0.7;
  let newV = oldV + 0.2;
  let newWidth = oldWidth * 1.001;
  cat.style.left = `${ newH }px`;
  cat.style.top = `${ newV }px`;
  cat.style.width = `${ newWidth }px`;
  if ( parseFloat(cat.style.left) > middleBarrier ) {
    window.clearInterval(timerId);
    // go to still gif
    cat.src = "images/cat-walk-frames/cat02.gif";
  }
};

const catWalkRtoL = function () {
  let oldH = parseFloat(cat.style.left);
  let oldV = parseFloat(cat.style.top);
  let oldWidth = parseFloat(cat.style.width);
  let newH = oldH - 0.7;
  let newV = oldV - 0.2;
  let newWidth = oldWidth / 1.001;
  cat.style.left = `${ newH }px`;
  cat.style.top = `${ newV }px`;
  cat.style.width = `${ newWidth }px`;
  if ( parseFloat(cat.style.left) < edgeBarrier ) {
    window.clearInterval(timerId2);
    // go to still gif
    cat.src = "images/cat-walk-frames/cat05.gif";
  }
};

const catWalkLtoR2 = function () {
  let oldH = parseFloat(cat.style.left);
  let oldV = parseFloat(cat.style.top);
  let oldWidth = parseFloat(cat.style.width);
  let newH = oldH + 0.7;
  let newV = oldV + 0.2;
  let newWidth = oldWidth * 1.001;
  cat.style.left = `${ newH }px`;
  cat.style.top = `${ newV }px`;
  cat.style.width = `${ newWidth }px`;
  if ( parseFloat(cat.style.left) > finalBarrier ) {
    window.clearInterval(timerId3);
    // go to still gif
    cat.src = "images/cat-walk-frames/cat07.gif";
  }
};

const catWalkRtoL2 = function () {
  let oldH = parseFloat(cat.style.left);
  let oldV = parseFloat(cat.style.top);
  let oldWidth = parseFloat(cat.style.width);
  let newH = oldH - 0.7;
  let newV = oldV - 0.2;
  let newWidth = oldWidth / 1.001;
  cat.style.left = `${ newH }px`;
  cat.style.top = `${ newV }px`;
  cat.style.width = `${ newWidth }px`;
  if ( parseFloat(cat.style.left) < edgeBarrier ) {
    window.clearInterval(timerId4);
    // go to still gif
    cat.src = "images/cat-walk-frames/cat05.gif";
  }
};


/////////////

const catMirWalkRtoL = function () {
  let oldH = parseFloat(catMirror.style.right);
  let oldV = parseFloat(catMirror.style.top);
  let oldWidth = parseFloat(catMirror.style.width);
  let newH = oldH + 0.7;
  let newV = oldV + 0.2;
  let newWidth = oldWidth * 1.001;
  catMirror.style.right = `${ newH }px`;
  catMirror.style.top = `${ newV }px`;
  catMirror.style.width = `${ newWidth }px`;
  if ( parseFloat(catMirror.style.right) > middleBarrier ) {
    clearInterval(timerIdMir);
    // go to still gif
    catMirror.src = "images/cat-walk-frames/cat02.gif";
  }
};

const catMirWalkLtoR = function () {
  let oldH = parseFloat(catMirror.style.right);
  let oldV = parseFloat(catMirror.style.top);
  let oldWidth = parseFloat(catMirror.style.width);
  let newH = oldH - 0.7;
  let newV = oldV - 0.2;
  let newWidth = oldWidth / 1.001;
  catMirror.style.right = `${ newH }px`;
  catMirror.style.top = `${ newV }px`;
  catMirror.style.width = `${ newWidth }px`;
  if ( parseFloat(catMirror.style.right) < edgeBarrier ) {
    clearInterval(timerIdMir2);
    // go to still gif
    catMirror.src = "images/cat-walk-frames/cat05.gif";
  }
};

const catMirWalkRtoL2 = function () {
  let oldH = parseFloat(catMirror.style.right);
  let oldV = parseFloat(catMirror.style.top);
  let oldWidth = parseFloat(catMirror.style.width);
  let newH = oldH + 0.7;
  let newV = oldV + 0.2;
  let newWidth = oldWidth * 1.001;
  catMirror.style.right = `${ newH }px`;
  catMirror.style.top = `${ newV }px`;
  catMirror.style.width = `${ newWidth }px`;
  if ( parseFloat(catMirror.style.right) > finalBarrier ) {
    clearInterval(timerIdMir3);
    // go to still gif
    catMirror.src = "images/cat-walk-frames/cat07.gif";
  }
};

const catMirWalkLtoR2 = function () {
  let oldH = parseFloat(catMirror.style.right);
  let oldV = parseFloat(catMirror.style.top);
  let oldWidth = parseFloat(catMirror.style.width);
  let newH = oldH - 0.7;
  let newV = oldV - 0.2;
  let newWidth = oldWidth / 1.001;
  catMirror.style.right = `${ newH }px`;
  catMirror.style.top = `${ newV }px`;
  catMirror.style.width = `${ newWidth }px`;
  if ( parseFloat(catMirror.style.right) < edgeBarrier ) {
    clearInterval(timerIdMir4);
    // go to still gif
    catMirror.src = "images/cat-walk-frames/cat05.gif";
  }
};

// now call function anim
const timerId = setInterval( catWalkLtoR, 20 );
const timerIdMir = setInterval( catMirWalkRtoL, 20 );



// pause then change to reverse walking cats
const changeCats = function ( srcStr ) {
  cat.src = srcStr;
  catMirror.src = srcStr;
};


setTimeout(changeCats.bind( null, "images/cat-walk-reverse.gif" ), 10000);
// setTimeout(exampleFunction.bind(null, exampleArg), 4000);


// now call function anims going in backwards direction
let timerId2;
let timerIdMir2;
setTimeout( function () { timerId2 = setInterval( catWalkRtoL, 20 ); }, 10000);
setTimeout( function () { timerIdMir2 = setInterval( catMirWalkLtoR, 20 ); }, 10000);

// change to fwd cats
setTimeout(changeCats.bind( null, "images/cat-walk.gif" ), 16000);
// now go again forwards
let timerId3;
let timerIdMir3;
setTimeout( function () { timerId3 = setInterval( catWalkLtoR2, 20 ); }, 16000);
setTimeout( function () { timerIdMir3 = setInterval( catMirWalkRtoL2, 20 ); }, 16000);

// change to reverse cats
setTimeout(changeCats.bind( null, "images/cat-walk-reverse.gif" ), 20000);
// now back again
let timerId4;
let timerIdMir4;
setTimeout( function () { timerId4 = setInterval( catWalkRtoL2, 20 ); }, 20000);
setTimeout( function () { timerIdMir4 = setInterval( catMirWalkLtoR2, 20 ); }, 20000);
//
//

// now make cat wipe



// now make circle wipe
// const circleWipe = function () {
//   let oldW = parseInt( circle.style.width );
//   let newW = oldW + 10;
//   circle.style.width = `${ newW }px`;
//   h = window.innerHeight;
//   circle.style.top = `${ h / 2 }px`;
//   w = window.innerWidth;
//   circle.style.right = `${ w / 2 }px`;
// };

const circleWipe = function () {
  circle.style.visibility = 'visible';
  const transStr = circle.style.transform;
  console.log(transStr);
  const a = transStr[9];
  const b = transStr[10];
  const c = transStr[11];
  let x;
  if (c) {
    x = parseInt( a + b + c );
  } else if (b) {
    x = parseInt( a + b );
  } else {
    x = parseInt(a);
  }
  let newX = x + 1;
  circle.style.transform = `scale(${newX}, ${newX}`;
  if ( newX === 100 ) {
    clearInterval(timerIdCircle);
  }
};
// e.g. circle.style.transform = 'scale(1, 1)';


let timerIdCircle;
setTimeout( function () { timerIdCircle = setInterval( circleWipe, 20 );  }, 24000 );















//
