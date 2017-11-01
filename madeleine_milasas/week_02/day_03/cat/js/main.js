
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



// now call function anim
const timerId = setInterval( catWalkLtoR, 20 );
const timerIdMir = setInterval( catWalkRtoL, 20 );
