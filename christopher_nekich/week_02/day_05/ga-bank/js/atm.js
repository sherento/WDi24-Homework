let checking = 0
let savings = 0
let total = checking + savings

const wSavings = function(){ //withdraw savings
  let $amount = parseFloat( $("#savings-amount").val() ); // amount in input turned into float
  savings -= $amount; // taking amount from total savings
  savings = parseFloat(savings.toFixed(2))  // rounding savings to two decimal points and turning back into float
  updater(); // changing text on screen to reflect savings total
}

const dSavings = function(){  // deposit savings
  if(savings === 0){  // if savings is at 0, change color of savings screen to reflect account having a positive balance.
    $("#savings-balance").removeClass("zero");
  };
  let $amount = parseFloat( $("#savings-amount").val() );
  savings += $amount;
  savings = parseFloat(savings.toFixed(2))
  updater();
}

const wChecking = function(){
  let $amount = parseFloat( $("#checking-amount").val() );
  checking -= $amount;
  checking = parseFloat(checking.toFixed(2))
  updater();
}

const dChecking = function(){
  if(checking === 0){
    $("#checking-balance").removeClass("zero")
  };
  let $amount = parseFloat( $("#checking-amount").val() );
  checking += $amount;
  checking = parseFloat(checking.toFixed(2))
  updater();
}

const updater = function(){
  total = checking + savings
  $("#savings-balance").text(`$${savings}`);
  $("#checking-balance").text(`$${checking}`);
  if(checking === 0){
    $("#checking-balance").addClass("zero")
  }
  if(savings === 0){
    $("#savings-balance").addClass("zero")
  }
}



$(document).ready(function(){
  updater();

  $("#savings-withdraw").on("click", function(){
    if($("#savings-amount").val() > savings){ // if attempting to overdraft checking
      if($("#savings-amount").val() <= total){ // overdraft if amount is less than total
        $("#savings-balance").addClass("zero")
        checkingAmount = parseFloat($("#savings-amount").val() - savings)
        savings = 0
        checking -= checkingAmount
        checking = parseFloat(checking.toFixed(2))
        updater();
      }
    }else{
      wSavings();
    }
  })

  $("#savings-deposit").on("click", function(){
    dSavings();
  })

  $("#checking-withdraw").on("click", function(){
    if($("#checking-amount").val() > checking){ // if attempting to overdraft checking
      if($("#checking-amount").val() <= total){ // overdraft if amount is less than total
        $("#checking-balance").addClass("zero")
        savingsAmount = parseFloat($("#checking-amount").val() - checking)
        savings -= savingsAmount
        checking = 0
        savings = parseFloat(savings.toFixed(2))
        total = checking + savings
        updater();
      }
    }else{
      wChecking();
    }
  })

  $("#checking-deposit").on("click", function(){
    dChecking();
  })
}) // <------- document ready
