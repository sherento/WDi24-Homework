console.log("catgif evening");



const catgif = document.querySelector('img');
console.log(catgif);
catgif.style.position = 'absolute';
catgif.style.left = '0px';
catgif.style.top = "300px";
let newLeft = 0;
let oldLeft = 0;

const sungif = document.querySelectorAll('img')[1];
console.log(sungif);
sungif.style.width = "150px";
sungif.style.position = "absolute";
sungif.style.left = "0px";
sungif.style.top = "0px";
sunOldTop = 0;
sunNewTop = 0;

// const sky = document.body.bgColor
// console.log(sky);
// //sky = "#0061FF"
document.body.bgColor = "#5090FF"
// const sky = document.body.bgColor
// console.log("sky",sky);

let screenWidth = 1400; //lookup . .  later



let j = 0;

console.log("one");

const catWalk = function () {
  oldLeft = parseInt(catgif.style.left);
  newLeft = oldLeft + 2  // bigger = faster & jumpy, smaller = slow & smmoth
  catgif.style.left = newLeft + 'px'
  if (newLeft > screenWidth) {
    clearInterval(catTimerDone);
    console.log("cat has left the building");

  }
}

console.log("two");

const sunFall = function () {
  sunOldTop = parseInt(sungif.style.top);
  sunNewTop = sunOldTop + 1;
  sungif.style.top = sunNewTop + 'px';
  if (sunNewTop > 1000) {
    clearInterval(sunTimerDone);
    console.log("end the sun");
  }
}


const skyDarken = function () {
  // document.body.bgColor = "#0061FF"
  let skyOld = document.body.bgColor
  let sky1Hex = skyOld.slice(1,3)
  let sky2Hex = skyOld.slice(3,5)
  let sky3Hex = skyOld.slice(5,7)
  let sky1Dec = parseInt(sky1Hex,16)
  let sky2Dec = parseInt(sky2Hex,16)
  let sky3Dec = parseInt(sky3Hex,16)
  sky1Dec = sky1Dec - 1;   //////////////////////////////////////
  if (sky1Dec < 0 ) {sky1Dec = 0};
  sky2Dec = sky2Dec - 2;   //////////////////////////////////////
  if (sky2Dec < 0 ) {sky2Dec = 0};
  sky3Dec = sky3Dec - 4;   //////////////////////////////////////
  if (sky3Dec < 0 ) {sky3Dec = 0};
  sky1Hex = sky1Dec.toString(16);
  if (sky1Hex === "0") {sky1Hex = "00"}
  if (sky1Hex.length === 1) {sky1Hex = sky1Hex + sky1Hex}
  sky2Hex = sky2Dec.toString(16);
  if (sky2Hex === "0") {sky2Hex = "00"}
  if (sky2Hex.length === 1) {sky2Hex = sky2Hex + sky2Hex}
  sky3Hex = sky3Dec.toString(16);
  if (sky3Hex === "0") {sky3Hex = "00"}
  if (sky3Hex.length === 1) {sky3Hex = sky3Hex + sky3Hex}
  let skyNew = "#" + sky1Hex + sky2Hex + sky3Hex;
  document.body.bgColor = skyNew;
  console.log("sky", skyNew);
  j = j + 1;
  if (j > 58) {
    clearInterval(skyTimerDone);
    console.log("THe sky has fallen");
  }

}



const catTimerDone = window.setInterval(catWalk, 16);
const sunTimerDone = window.setInterval(sunFall, 16);
const skyTimerDone = window.setInterval(skyDarken, 200);




// const dogTimerDone = window.setInterval(dogWalk, 500);
