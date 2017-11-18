

const cat = document.getElementsByTagName('img')[0];
cat.style.left = 0;


const catWalk = function () {
  const start = parseInt(cat.style.left);
  const finish = start + 10;
  cat.style.left = finish +'px';
};
setInterval (catWalk, 100);



//cat safety crossing
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//should have done a for loop for this but only thought it late in the evening.
var c =canvas.getContext ('2d');
c.fillRect(00,200, 100, 100);
c.fillRect(100,300, 100, 100);
c.fillRect(200,200, 100, 100);
c.fillRect(300,300, 100, 100);
c.fillRect(400,200, 100, 100);
c.fillRect(500,300, 100, 100);
c.fillRect(600,200, 100, 100);
c.fillRect(700,300, 100, 100);
c.fillRect(800,200, 100, 100);
c.fillRect(900,300, 100, 100);
c.fillRect(1000,200, 100, 100);
c.fillRect(1100,300, 100, 100);
c.fillRect(1200,200, 100, 100);
c.fillRect(1300,300, 100, 100);
c.fillRect(1400,200, 100, 100);
console.log(canvas);
