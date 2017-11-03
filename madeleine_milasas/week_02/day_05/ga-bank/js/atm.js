// joels steps:
//
// - get buttons working first
// - don't do a fancy version w factories etc first
// get it working the long way then refactor if time


// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.



$(document).ready( function() {

  // get starting balances and convert to integers
  let cBal = +$('#checking-balance').text()[1]; // [1] because [0] is $
  let sBal = +$('#savings-balance').text()[1];

  const depositChecking = function() {
    cBal += +$('#checking-amount').val();     // get amount to be added and add to existing
    $('#checking-balance').text( `$${ cBal }` );      // update that amount in display
  };

  const depositSavings = function() {
    sBal += +$('#savings-amount').val();     // get amount to be added and add to existing
    $('#savings-balance').text( `$${ sBal }` );      // update that amount in display
  };

  const withdrawChecking = function() {
    cBal -= +$('#checking-amount').val();     // get amount to be added and add to existing
    $('#checking-balance').text( `$${ cBal }` );      // update that amount in display
  };

  const withdrawSavings = function() {
    sBal -= +$('#savings-amount').val();     // get amount to be added and add to existing
    $('#savings-balance').text( `$${ sBal }` );      // update that amount in display
  };

  $('#checking-deposit').on('click', depositChecking);
  $('#savings-deposit').on('click', depositSavings);
  $('#checking-withdraw').on('click', withdrawChecking);
  $('#savings-withdraw').on('click', withdrawSavings);











}); // end document ready
















// **
