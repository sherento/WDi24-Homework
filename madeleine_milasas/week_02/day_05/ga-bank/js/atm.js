

$(document).ready( function() {

  // Get starting balances and convert to integers
  let cBal = +$('#checking-balance').text()[1]; // [1] because [0] is $
  let sBal = +$('#savings-balance').text()[1];


  // *********** DEPOSIT AND WITHDRAW FUNCTIONS ******************
  const depositChecking = function() {
    let amount = +$('#checking-amount').val();
    if ( !isNaN(amount) ) {  // if amount entered is a number
      cBal += amount;        // add amount to existing bal
      $('#checking-balance').text( `$${ cBal }` );      // and update that amount in display
    }
    if ( cBal > 0 ) {
      $('#checking-balance').removeClass('zero');
    }
  };


  const depositSavings = function() {
    let amount = +$('#savings-amount').val();
    if ( !isNaN(amount) ) {  // if amount entered is a number
      sBal += amount;     // add amount to existing
      $('#savings-balance').text( `$${ sBal }` );      // update that amount in display
    }
    if ( sBal > 0 ) {
      $('#savings-balance').removeClass('zero');
    }
  };


  const withdrawChecking = function() {
    let amount = +$('#checking-amount').val();
    if ( amount > cBal ) {
      if ( amount > cBal + sBal ) {       // if amount is bigger than both balances
        return;
      } else {
        withdrawOverdraft( amount, 1 );
        return;
      }
    }
    if ( !isNaN(amount) ) {  // if amount entered is a number
      cBal -= amount;     // add amount to existing
      $('#checking-balance').text( `$${ cBal }` );      // update that amount in display
    }
    if ( cBal === 0 ) {
      $('#checking-balance').addClass('zero');
    }
  };


  const withdrawSavings = function() {
    let amount = +$('#savings-amount').val();
    if ( amount > sBal ) {
      if ( amount > cBal + sBal ) {       // if amount is bigger than both balances
        return;
      } else {
        withdrawOverdraft( amount, -1 );
        return;
      }
    }
    if ( !isNaN(amount) ) {  // if amount entered is a number
      sBal -= amount;     // add amount to existing
      $('#savings-balance').text( `$${ sBal }` );      // update that amount in display
    }
    if ( sBal === 0 ) {
      $('#savings-balance').addClass('zero');
    }
  };


  const withdrawOverdraft = function( a, delta ) {  // delta=which direction, sav to chk or vv
    let amount = a; // a is user amount passed in from withdraw savings/checking function
    if ( delta === 1 ) {
      sBal = sBal - (a - cBal);
      cBal = 0;
    } else if (delta === -1) {
      cBal = cBal - (a - sBal);
      sBal = 0;
    }
    $('#checking-balance').text( `$${ cBal }` );      // update CHECKING amount in display
    $('#savings-balance').text( `$${ sBal }` );      // update SAVINGS amount in display
    if ( sBal === 0 ) {
      $('#savings-balance').addClass('zero');
    }
    if ( cBal === 0 ) {
      $('#checking-balance').addClass('zero');
    }

  };


  // ************* CLICK EVENT HANDLERS **************************
  $('#checking-deposit').on('click', depositChecking);
  $('#savings-deposit').on('click', depositSavings);
  $('#checking-withdraw').on('click', withdrawChecking);
  $('#savings-withdraw').on('click', withdrawSavings);



// refactor ideas:
// - fix NaN so function exits earlier if NaN







}); // end document ready
















// **
