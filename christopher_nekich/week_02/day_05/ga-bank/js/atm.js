let checking = 0;
let savings = 0;
let total = checking + savings;

const wSavings = function(){ //withdraw savings
  let $amount = parseFloat( $("#savings-amount").val() ); // amount in input turned into float
  if($amount > 0){
    savings -= $amount; // taking amount from total savings
    savings = parseFloat(savings.toFixed(2));  // rounding savings to two decimal points and turning back into float
    updater(); // function updates account totals and screens to reflect them
  };
};

const dSavings = function(){  // deposit savings
  let $amount = parseFloat( $("#savings-amount").val() ); //amount from input turned into float
  if($amount > 0){
    if(savings === 0){  // if savings is at 0, change color of savings screen to reflect account having a positive balance.
      $("#savings-balance").removeClass("zero");
    };
    savings += $amount; // adding amount to total savings
    savings = parseFloat(savings.toFixed(2));  // savings to two decimal points and turned to float
    updater();  // update function
  };
};

const wChecking = function(){
  let $amount = parseFloat( $("#checking-amount").val() );  // same as savings function but on checking account
  if($amount > 0){
    checking -= $amount;
    checking = parseFloat(checking.toFixed(2));
    updater();
  };
};

const dChecking = function(){ // same as savings function but on checking account
  let $amount = parseFloat( $("#checking-amount").val() );
  if($amount > 0){
    if(checking === 0){
      $("#checking-balance").removeClass("zero");
    };
    checking += $amount;
    checking = parseFloat(checking.toFixed(2));
    updater();
  }
};

const updater = function(){
  total = checking + savings;  // updates totals
  $("#savings-balance").text(`$${savings}`);      //changes screen to reflect account totals
  $("#checking-balance").text(`$${checking}`);
  if(checking === 0){   //checks to see if account is 0 in which case div reflecting total on screen turns red
    $("#checking-balance").addClass("zero");
  };
  if(savings === 0){
    $("#savings-balance").addClass("zero");
  };
};

const savingsOverdraft = function(){
  if($("#savings-amount").val() > 0){
    checkingAmount = parseFloat($("#savings-amount").val() - savings);
    savings = 0;
    checking -= checkingAmount;
    checking = parseFloat(checking.toFixed(2));
    updater();
  };
};

const checkingOverdraft = function(){
  if($("#checking-amount").val() > 0){
    savingsAmount = parseFloat($("#checking-amount").val() - checking);
    savings -= savingsAmount;
    checking = 0;
    savings = parseFloat(savings.toFixed(2));
    updater();
  };
};


$(document).ready(function(){
  updater();

  $("#savings-withdraw").on("click", function(){
    if($("#savings-amount").val() > savings){ // if attempting to overdraft savings
      if($("#savings-amount").val() <= total){ // if overdraft if amount is less than total run overdraft else do nothing
        savingsOverdraft();
      };
    }else{
      wSavings();
    };
  });

  $("#savings-deposit").on("click", function(){
    dSavings();
  });

  $("#checking-withdraw").on("click", function(){
    if($("#checking-amount").val() > checking){ // if attempting to overdraft checking
      if($("#checking-amount").val() <= total){ // overdraft if amount is less than total else do nothing
        checkingOverdraft();
      };
    }else{
      wChecking();
    };
  });

  $("#checking-deposit").on("click", function(){
    dChecking();
  });
}); // <------- document ready
