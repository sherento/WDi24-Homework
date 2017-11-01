
// Cat init position vars
const posH = '40px';
const posV = '420px';
const size = '140px';


// FIRST CAT INIT
const cat = document.getElementById('cat');
cat.style.position = 'absolute';
cat.style.left = posH;
cat.style.top = posV;
cat.style.width = size;

// SECOND CAT INIT
const catMirror = document.getElementById(`cat-mirror`);
catMirror.style.position = 'absolute';
catMirror.style.right = posH;
catMirror.style.top = posV;
catMirror.style.width = size;
catMirror.style.transform = 'scaleX(-1)';

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
  if ( parseFloat(cat.style.left) > 340 ) {
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
  if ( parseFloat(cat.style.left) < 150 ) {
    window.clearInterval(timerId2);
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
  if ( parseFloat(catMirror.style.right) > 340 ) {
    window.clearInterval(timerIdMir);
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
  if ( parseFloat(catMirror.style.right) > 340 ) {
    window.clearInterval(timerIdMir);
    // go to still gif
    catMirror.src = "images/cat-walk-frames/cat02.gif";
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
let newSrc = "images/cat-walk-reverse.gif";
setTimeout(changeCats.bind( null, newSrc ), 10000);
// setTimeout(exampleFunction.bind(null, exampleVariable), 4000);



let timerId2;

// now call function anims going in other direction
setTimeout( function () { timerId2 = setInterval( catWalkRtoL, 20 ); }, 10000);
// setTimeout( function () { setInterval( catMirWalkLtoR, 20 ); }, 10000);















//
