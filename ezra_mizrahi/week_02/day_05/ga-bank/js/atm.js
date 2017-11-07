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
