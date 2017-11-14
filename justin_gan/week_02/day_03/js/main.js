const cat = document.querySelector( 'img' );
cat.style.left = 0;

const catWalkRepeat = function () {
  let windowWidth = window.innerWidth;
  let forward = true;

  if ( parseInt(cat.style.left) < windowWidth ) {
    const oldLeft = parseInt( cat.style.left );
    const newLeft = oldLeft + 1;
    cat.style.left = newLeft + 'px';
  } else {
    cat.style.left = -296 + 'px';
  }
  // else {
  //   const oldLeft = parseInt( cat.style.left );
  //   const newLeft = oldLeft - 10;
  //   cat.style.left = newLeft + 'px';
  // }

}

let forward = true;
const moonwalk = function () {
  let windowWidth = window.innerWidth;
  const catLeft = parseInt( cat.style.left );

  if ( catLeft > windowWidth && forward ) {
    forward = false;
  } else if ( catLeft + 296 < 0 ) {
    forward = true;
  }

  if ( forward ) {
    const oldLeft = parseInt( cat.style.left );
    const newLeft = oldLeft + 1;
    cat.style.left = newLeft + 'px';
  } else {
    const oldLeft = parseInt( cat.style.left );
    const newLeft = oldLeft - 1;
    cat.style.left = newLeft + 'px';
  }
}

let t = 0;
let angle = 270;
const catWidth = 296;
console.log(cat.style.transform = 'rotate(90deg)');

const circle = function () {

  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  t += 0.05;

  let r = 100;
  let xcenter = (windowWidth - catWidth) / 2;
  let ycenter = (windowHeight - catWidth) / 2;
  let newLeft = Math.floor( xcenter + (r * Math.cos(t)) );
  let newTop = Math.floor( ycenter + (r * Math.sin(t)) );

  cat.style.left = newLeft + 'px';
  cat.style.top = newTop + 'px';
  let oldAngle = cat.style.transform;
  let oldAngleInt = parseInt(oldAngle.replace(/([^0-9])+/g, ''));
  let newAngle = oldAngleInt + 1;
  console.log(newAngle);
  // console.log(parseInt(oldAngle));
  cat.style.transform = 'rotate(' + newAngle + 'deg)';
  // console.log(cat.style.transform);
}

window.setInterval(circle, 50);
