/////////////////////////////////////////////////////////////////////////
$(document).ready(function() {





  // checking account total
  let checkingTotal = 0;

  // savings account total
  let savingsTotal = 0;

  // sum in both checking and savings
  let accountsTotal = checkingTotal + savingsTotal;

  // default styling for balances
  // balances should be red if 0, grey if > 0
  $('#checking-balance').css({'background-color': '#F52F4F', 'color': '#FFF'});

  $('#savings-balance').css({'background-color': '#F52F4F', 'color': '#FFF'});



  // need 4 functions:

  // function 1: adds number from text field to global checkingTotal
  // after user clicks deposit, and places current value of checkingTotal on screen

  $('#checking-deposit').on('click', function() {

    checkingTotal = checkingTotal + +$('#checking-amount').val();

    $('#checking-balance').text("$" + checkingTotal);

    // this clears the input field after clicking deposit
    $('#checking-amount').val("");

    // this turns the balance div to grey
    $('#checking-balance').css({'background-color': '#E3E3E3', 'color': 'black'});

    console.log(checkingTotal);

  });

  // function 2:
  // this isn't working properly - checkingTotal still has a positive value even after overdraft

  $('#checking-withdraw').on('click', function() {

    if (+$('#checking-amount').val() > checkingTotal) {
      let overdraftAmountChecking = checkingTotal - +$('#checking-amount').val();
      console.log(overdraftAmountChecking);

      // set balance to $0 on screen
      $('#checking-balance').text("$0");

      // set checkingTotal to $0

      // minus the rest from the savings total
      savingsTotal = savingsTotal + -Math.abs(overdraftAmountChecking);

      // display new value on savings account screen
      $('#savings-balance').text("$" + savingsTotal);

      $('#checking-balance').css({'background-color': '#F52F4F', 'color': '#FFF'});

      console.log(savingsTotal);


    } else {
      checkingTotal = checkingTotal - +$('#checking-amount').val();

      // need to change the below to a condition where checkingTotal === 0
      $('#checking-balance').css({'background-color': '#F52F4F', 'color': '#FFF'});

      $('#checking-balance').text("$" + checkingTotal);
    };


    console.log(checkingTotal);

  });

  // function 3: adds number from text field to global let savings total
  // after user clicks deposit, and places current value of global let on screen

  $('#savings-deposit').on('click', function() {

    savingsTotal = savingsTotal + +$('#savings-amount').val();

    $('#savings-balance').text("$" + savingsTotal);

    // this clears the input field after clicking deposit
    $('#savings-amount').val("");

    // changing balance div to grey when depositing
    $('#savings-balance').css({'background-color': '#E3E3E3', 'color': 'black'});

    console.log(savingsTotal);

  });

  // function 4:
  // this isn't working, still leaving positive value in savings even after overdraft

$('#savings-withdraw').on('click', function() {

  if (+$('#savings-amount').val() > savingsTotal) {
    let overdraftAmountSavings = savingsTotal - +$('#savings-amount').val();
    console.log(overdraftAmountSavings);

    // set balance to $0 on screen
    $('#savings-balance').text("$0");

    // set savingsTotal to $0

    // minus the rest from the checkings total
    checkingTotal = checkingTotal + -Math.abs(overdraftAmountSavings);

    // display new value on checking account screen
    $('#checking-balance').text("$" + checkingTotal);

    $('#savings-balance').css({'background-color': '#F52F4F', 'color': '#FFF'});

    console.log(checkingTotal);


  } else {
    savingsTotal = savingsTotal - +$('#savings-amount').val();

    // need to change the below to a condition where checkingTotal === 0
    $('#savings-balance').css({'background-color': '#F52F4F', 'color': '#FFF'});

    $('#savings-balance').text("$" + savingsTotal);
  };


  console.log(savingsTotal);

});


});

////////////////////////////////////////////////////////////////////////////////
//// JOEL'S SIMPLE SOLUTION ///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const checkForZero = function () {

  $('.zero').removeClass('zero');
  const checkingBalance = +()$('#checking-balance').text().slice(1)); // skip the "$"
  if (0 === checkingBalance) {
    $('#checking-balance').addClass('zero');
  }


  const savingsBalance = +()$('#savings-balance').text().slice(1)); // skip the "$"
  if (0 === savingsBalance) {
    $('#savings-balance').addClass('zero');
  }

};

$(document).ready(function () {


  checkForZero();


  $('#checking-deposit').on('click', function () {

    const amount = +()$('#checking-amount').val());

    const balance = +()$('#checking-balance').text().slice(1)); // skip the "$"

    $('#checking-balance').text( '$' + (amount + balance) );

    checkForZero();

  });


  $('#checking-withdraw').on('click', function() {

    const amount = +()$('#checking-amount').val());

    const balance = +()$('#checking-balance').text().slice(1)); // skip the "$"

    // pseudocode
    // retrieve other balance
    const otherBalance = +($('#savings-balance').text().slice(1)); // skip the $

    const newBalance = balance - amount;

    if (newBalance >= 0) {
      $('#checking-balance').text( '$' + newBalance );
    } else if (amount <= balance + otherBalance) {
      const remaining = amount - balance; // how much do we need from the other account?
      $('#checking-balance').text('$0');
      $('#savings-balance').text('$' + (otherBalance - remaining));
    }
    checkForZero();
    // else if amount <= balance + otherBalance
      // withdraw from both accounts
    // else
      // seriously you don't have enough money

  });


  $('#savings-deposit').on('click', function () {

    const amount = +()$('#savings-amount').val());

    const balance = +()$('#savings-balance').text().slice(1)); // skip the "$"

    $('#savings-balance').text( '$' + (amount + balance) );

    checkForZero();

  });


  $('#savings-withdraw').on('click', function() {

    const amount = +()$('#savings-amount').val());

    const balance = +()$('#savings-balance').text().slice(1)); // skip the "$"

    // pseudocode
    // retrieve other balance
    const otherBalance = +($('#checking-balance').text().slice(1)); // skip the $

    const newBalance = balance - amount;

    if (newBalance >= 0) {
      $('#savings-balance').text( '$' + newBalance );
    } else if (amount <= balance + otherBalance) {
      const remaining = amount - balance; // how much do we need from the other account?
      $('#savings-balance').text('$0');
      $('#checking-balance').text('$' + (otherBalance - remaining));
    }
    checkForZero();
    // else if amount <= balance + otherBalance
      // withdraw from both accounts
    // else
      // seriously you don't have enough money

  });


});

////////////////////////////////////////////////////////////////////////////////
/// JOEL'S JAVASCRIPT + JQUERY SOLUTION ////////////////////////////////////////
/// LINKED TO ACCOUNTS.JS //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const render = function () {
  $('#checking-balance').text('$' + accounts.checkingBalance);
  $('#savings-balance').text('$' + accounts.savingsBalance);

  $('.zero').removeClass('zero');

  // check for zero balances
  if (accounts.checkingBalance === 0) {
    $('#checking-balance').addClass('zero');
  }

  // check for zero balances
  if (accounts.savingsBalance === 0) {
    $('#savings-balance').addClass('zero');
  }

};

$(document).ready(function () {

  render();

  $('#checking-deposit').on('click', function () {
    const amount = $('#checking-amount').val();
    accounts.checkingDeposit(amount);
    render();
  });

  $('#checking-withdraw').on('click', function() {
    const amount = $('#checking-amount').val();
    accounts.checkingWithdraw(amount);
    render();
  });


  $('#savings-deposit').on('click', function() {
    const amount = $('#savings-amount').val();
    accounts.savingsDeposit(amount);
    render();
  });

  $('#savings-withdraw').on('click', function() {
    const amount = $('#savings-amount').val();
    accounts.savingsWithdraw(amount);
    render();
  });


});
