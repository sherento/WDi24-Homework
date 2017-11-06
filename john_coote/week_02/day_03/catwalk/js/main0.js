console.log("catgif evening");

document.querySelector('.left').style.display='inline-block';
document.querySelector('.left').style.width="50%";
document.querySelector('.left').style.padding="20px";
document.querySelector('.left').style.verticalAlign="top";

document.querySelector('.right').style.display='inline-block';
document.querySelector('.right').style.width="40%";
document.querySelector('.right').style.padding="20px";
document.querySelector('.right').style.verticalAlign="top";


const catgif = document.querySelector('img');
console.log(catgif);
catgif.style.position = 'fixed';
catgif.style.left = '1100px';
catgif.style.top='200px';
let i = 0;
let j = 0;

const catWalk = function () {
  console.log(i);
  loopingMessage="  ...catWalk i:" + i + "<br>";
  document.querySelector('.right').insertAdjacentHTML('beforeend', loopingMessage)
  i++
  if (i > 5) {
    clearInterval(catTimerDone);
    console.log("four");
  }
}

const dogWalk = function () {
  loopingMessage="  ... ... ... dogWalk j:" + j + "<br>"
  document.querySelector('.right').insertAdjacentHTML('beforeend', loopingMessage)
  console.log(j);
  j++
  if (j > 5) {
    clearInterval(dogTimerDone);
    console.log("five");
  }
}

console.log("one");
Message="<B>Before any loops are executed</B><br>"
document.querySelector('.right').insertAdjacentHTML('beforeend', Message)

const catTimerDone = window.setInterval(catWalk, 1000);
console.log("two");
Message="<B>... After the catTimerDone / catWalk function is called</B><br>"
document.querySelector('.right').insertAdjacentHTML('beforeend', Message)

const dogTimerDone = window.setInterval(dogWalk, 2000);
console.log("three");
Message="<B>... ... ... After the dogTimerDone / dogWalk function is called</B><br>"
document.querySelector('.right').insertAdjacentHTML('beforeend', Message)

// timer functions run simultaneously AFTER the other code has return
// one / twow / three / LOOPS EXECUTE / four / five
