// Bank of GA

$(document).ready( function() {

  // Declare balance vars, get starting balances and convert to integers
  let cBal = +$('#checking-balance').text()[1]; // [1] because [0] is $
  let sBal = +$('#savings-balance').text()[1];


  // *********** DEPOSIT AND WITHDRAW FUNCTIONS ******************
  const depositChecking = function() {
    let amount = +$('#checking-amount').val();
    if ( isNaN(amount) ) {  // if amount entered is NOT a number
      return;               // exit the function
    }
    $('#checking-balance').text( `$${ cBal += amount }` );  // add amount and update display
    if ( cBal > 0 ) {
      $('#checking-balance').removeClass('zero');
    }
  };


  const depositSavings = function() {
    let amount = +$('#savings-amount').val();
    if ( isNaN(amount) ) {
      return;
    }
    $('#savings-balance').text( `$${ sBal += amount }` );  // add amount and update display
    if ( sBal > 0 ) {
      $('#savings-balance').removeClass('zero');
    }
  };


  const withdrawChecking = function() {
    let amount = +$('#checking-amount').val();
    if ( isNaN(amount) ) {
      return;
    }
    // ** overdraft feature **
    if ( amount > cBal ) {
      if ( amount > cBal + sBal ) {
        return;
      } else {
        withdrawOverdraft( amount, 1 ); // 1 = direction from l to r, checking to savings
        return;
      }
    } // end overdraft
    $('#checking-balance').text( `$${ cBal -= amount }` );
    if ( cBal === 0 ) {
      $('#checking-balance').addClass('zero');
    }
  };


  const withdrawSavings = function() {
    let amount = +$('#savings-amount').val();
    if ( isNaN(amount) ) {
      return;
    }
    // ** overdraft feature **
    if ( amount > sBal ) {
      if ( amount > cBal + sBal ) {
        return;
      } else {
        withdrawOverdraft( amount, -1 );  // -1 = from r to l, from sav to chk
        return;
      }
    } // end overdraft **
    $('#savings-balance').text( `$${ sBal -= amount }` );
    if ( sBal === 0 ) {
      $('#savings-balance').addClass('zero');
    }
  };


  const withdrawOverdraft = function( amount, delta ) {  // delta = which direction, chk to sav or vv
    if ( delta === 1 ) {  // take money from check first, then sav
      sBal = sBal - (amount - cBal);
      cBal = 0;
    } else if (delta === -1) {  // from sav first, then check
      cBal = cBal - (amount - sBal);
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

}); // end document ready
