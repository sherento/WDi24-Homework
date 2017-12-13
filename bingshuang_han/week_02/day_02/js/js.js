

const checkAnswer = function(){
  if (document.getElementById("mat").checked ===true){
    alert ("Congratulations, you're human !!")
    document.getElementById("mat").checked =false;
    document.getElementById("lamp").checked =false;
    document.getElementById("table").checked =false;
    document.getElementById("chair").checked =false;
  }
  else {
    alert ("Are you  human?");
    document.getElementById("mat").checked =false;
    document.getElementById("lamp").checked =false;
    document.getElementById("table").checked =false;
    document.getElementById("chair").checked =false;
  }
}
