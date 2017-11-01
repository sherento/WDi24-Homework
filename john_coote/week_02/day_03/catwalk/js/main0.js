console.log("catgif evening");

const catgif = document.querySelector('img');
console.log(catgif);
catgif.style.position = 'absolute';
catgif.style.left = '0px';
let i = 0;
let j = 0;

const catWalk = function () {
  console.log(i);
  i++
  if (i > 5) {
    clearInterval(catTimerDone);
    console.log("four");
  }
}

const dogWalk = function () {
  console.log(j);
  j++
  if (j > 5) {
    clearInterval(dogTimerDone);
    console.log("five");
  }
}

console.log("one");
const catTimerDone = window.setInterval(catWalk, 500);
console.log("two");
const dogTimerDone = window.setInterval(dogWalk, 500);
console.log("three");

// timer functions run simultaneously AFTER the other code has return
// one / twow / three / LOOPS EXECUTE / four / five
