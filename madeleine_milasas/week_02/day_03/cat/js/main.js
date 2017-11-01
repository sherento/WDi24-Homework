

const cat = document.getElementById('cat');
cat.style.position = 'absolute';
cat.style.left = '40px';
cat.style.top = '300px';
cat.style.width = '90px';


const catWalkForwards = function () {
  let oldLeft = parseFloat(cat.style.left);
  let oldTop = parseFloat(cat.style.top);
  let oldWidth = parseFloat(cat.style.width);
  let newLeft = oldLeft + 0.4;
  let newTop = oldTop + 0.1;
  let newWidth = oldWidth + 0.16;
  cat.style.left = `${ newLeft }px`;
  cat.style.top = `${ newTop }px`;
  cat.style.width = `${ newWidth }px`;
};


setInterval( catWalkForwards, 20 );
