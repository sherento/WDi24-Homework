let cat = document.querySelector("#cat")
let rainbow = document.querySelector(".rainbow")
let music = document.querySelector("audio")
let pink = document.querySelector(".pink")

music.currentTime = 6; //skips to six seconds in audio
music.loop = true; // audio loops infinitely
cat.style.left = 0 //cat starting position
cat.style.top = "280px"

let leftmove = false // variable to trigger movement direction

let runKitty = function() {


  if(!leftmove){  // if the cat is heading right
    if(parseInt(cat.style.left) < window.innerWidth){ // if the cat hasnt reached the end of the window
      var oldLeft = parseInt(cat.style.left); // old position turned into integer
      var newLeft = oldLeft + 10; // new value is old + 10
      cat.style.left = newLeft + 'px';  // applying new value to the dom
      pink.style.left = parseInt(cat.style.left) + 60 +"px" // pink box positioned on cat and moves with car

    }else{
      leftmove = true // if cat has passed width of window turns the value on to trigger backwards movement
    }
  }else{
    if(parseInt(cat.style.left) === 0){ // when cat has come back to beginning of screen
      cat.style.transform = "scaleX(1)" // flips the cat around
      leftmove = false  // resets trigger
      cat.style.left = "10px" //sends cat 10px to the right
    }else if(parseInt(cat.style.left) > 0){ // while cat is moving left
      cat.style.transform = "scaleX(-1)"  // cat is flipped to face direction it is moving in
      let oldLeft = parseInt(cat.style.left);
      let newLeft = oldLeft - 10;
      cat.style.left = newLeft + 'px'
      pink.style.left = parseInt(cat.style.left) + 80 +"px"

    }else{
      leftmove = false; // sends the cat back to the right
    }
  }
  rainbow.style.width = cat.style.left //width of div rainbow follows the cat
};


window.setInterval(runKitty, 20);
