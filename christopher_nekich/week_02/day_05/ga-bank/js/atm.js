let checking = 0
let savings = 0
let total = checking + savings

const updateTotal = function(){
  total = checking + savings
}

const wSavings = function(){ //withdraw savings
  let $amount = parseFloat( $("#savings-amount").val() );
  savings -= $amount;
  savings = parseFloat(savings.toFixed(2))
  $("#savings-balance").html(`$${savings}`);
}

const dSavings = function(){
  let $amount = parseFloat( $("#savings-amount").val() );
  savings += $amount;
  savings = parseFloat(savings.toFixed(2))
  $("#savings-balance").text(`$${savings}`);
}

const wChecking = function(){
  let $amount = parseFloat( $("#checking-amount").val() );
  checking -= $amount;
  checking = parseFloat(checking.toFixed(2))
  $("#checking-balance").text(`$${checking}`);
}

const dChecking = function(){
  let $amount = parseFloat( $("#checking-amount").val() );
  checking += $amount;
  checking = parseFloat(checking.toFixed(2))
  $("#checking-balance").text(`$${checking}`);
}



$(document).ready(function(){
  $("#savings-balance").html(`$${savings}`)
  $("#checking-balance").html(`$${checking}`)

  $("#savings-withdraw").on("click", function(){
    if($("#savings-amount").val() > savings){ // if attempting to overdraft checking
      if($("#savings-amount").val() < total){ // overdraft if amount is less than total
        $("#savings-balance").addClass("zero")
        checkingAmount = parseFloat($("#savings-amount").val() - savings)
        savings = 0
        checking -= checkingAmount
        checking = parseFloat(checking.toFixed(2))
        total = checking + savings
        $("#savings-balance").text(`$${savings}`);
        $("#checking-balance").text(`$${checking}`);
      }
    }else{
      wSavings();
      updateTotal();
      if(savings == 0){
        $("#savings-balance").addClass("zero")
      }
    }
  })

  $("#savings-deposit").on("click", function(){
    if(savings === 0){
      $("#savings-balance").removeClass("zero")
    }
    dSavings();
    updateTotal();
  })

  $("#checking-withdraw").on("click", function(){
    if($("#checking-amount").val() > checking){ // if attempting to overdraft checking
      if($("#checking-amount").val() < total){ // overdraft if amount is less than total
        $("#checking-balance").addClass("zero")
        savingsAmount = parseFloat($("#checking-amount").val() - checking)
        savings -= savingsAmount
        checking = 0
        savings = parseFloat(savings.toFixed(2))
        total = checking + savings
        $("#checking-balance").text(`$${checking}`);
        $("#savings-balance").text(`$${savings}`);

      }
    }else{
      wChecking();
      updateTotal();
      if(checking == 0){
        $("#checking-balance").addClass("zero")
      }
    }
  })

  $("#checking-deposit").on("click", function(){
    if(checking === 0){
      $("#checking-balance").removeClass("zero")
    }
    dChecking();
    updateTotal();
  })


}) // <------- document ready
