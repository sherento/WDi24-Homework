let cat = document.querySelector("#cat")
let rainbow = document.querySelector(".rainbow")
let music = document.querySelector("audio")
let pink = document.querySelector(".pink")

music.currentTime = 6;
music.loop = true;
cat.style.left = 0
cat.style.top = "280px"

let leftmove = false

let runKitty = function() {

  if(!leftmove){
    if(parseInt(cat.style.left) < window.innerWidth){
      var oldLeft = parseInt(cat.style.left);
      var newLeft = oldLeft + 10;
      cat.style.left = newLeft + 'px';
      pink.style.left = parseInt(cat.style.left) + 60 +"px"

    }else{
      leftmove = true
    }
  }else{
    if(parseInt(cat.style.left) === 0){
      cat.style.transform = "scaleX(1)"
      leftmove = false
      cat.style.left = "10px"
    }else if(parseInt(cat.style.left) > 0){
      cat.style.transform = "scaleX(-1)"
      let oldLeft = parseInt(cat.style.left);
      let newLeft = oldLeft - 10;
      cat.style.left = newLeft + 'px'
      pink.style.left = parseInt(cat.style.left) + 80 +"px"

    }else{
      leftmove = false;
    }
  }
  rainbow.style.width = cat.style.left

};


window.setInterval(runKitty, 20);
