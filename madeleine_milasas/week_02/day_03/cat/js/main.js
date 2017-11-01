
// Cat init position vars
const posH = '40px';
const posV = '300px';
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



const catWalk = function () {
  let oldLeft = parseFloat(cat.style.left);
  let oldTop = parseFloat(cat.style.top);
  let oldWidth = parseFloat(cat.style.width);
  let newLeft = oldLeft + 0.7;
  let newTop = oldTop + 0.2;
  let newWidth = oldWidth * 1.001;
  cat.style.left = `${ newLeft }px`;
  cat.style.top = `${ newTop }px`;
  cat.style.width = `${ newWidth }px`;
  if ( parseFloat(cat.style.left) > 340 ) {
    window.clearInterval(timerId);
    // go to still gif
    cat.src = "images/cat-walk-frames/cat02.gif";
  }
};



// now call function anim
const timerId = setInterval( catWalk, 20 );
