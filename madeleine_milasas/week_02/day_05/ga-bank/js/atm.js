// Bank of GA


$(document).ready( function() {


  // Declare balance variables, get starting balances and convert to integers
  let cBal = +( $('#checking-balance').text().slice(1) ); // because first char is $
  let sBal = +( $('#savings-balance').text().slice(1) );

  const changeIfZero = function () {
    if ( cBal === 0 ) {
      $('#checking-balance').addClass('zero');
    }
    if ( sBal === 0 ) {
      $('#savings-balance').addClass('zero');
    }
  };

  changeIfZero();

  // *********** DEPOSIT AND WITHDRAW FUNCTIONS ******************

  const validated = function ( amount ) {
    if ( isNaN(amount) ) {
      return false;
    }
    if ( amount > 9999 ) {
      $('.error>p').text(`Sorry, transactions are limited to under $10,000`);
      return false;
    } else {
      $('.error>p').text(` `);
    }
    if ( amount % 1 !== 0 ) {
      $('.error>p').text(`Sorry, we only accept transactions in whole dollar amounts`);
      return false;
    } else {
      $('.error>p').text(` `);
      return true;
    }
  };


  const withdrawOverdraft = function( amount, delta ) {  // delta = which direction, chk to sav or vv
    if ( delta === 1 ) {  // take money from check first, then sav
      const excess = amount - cBal;
      sBal = sBal - excess;
      addRecord( 'CHECKING', 'WITHDRAW^', cBal, 0 ); // i.e. amount withdrawn is all the balance, balance now 0
      addRecord( 'SAVINGS&nbsp;', 'OVERDRAW&nbsp;', excess, sBal );
      cBal = 0;
    } else if (delta === -1) {  // from sav first, then check
      const excess = amount - sBal;
      cBal = cBal - excess;
      addRecord( 'SAVINGS&nbsp;', 'WITHDRAW^', sBal, 0 ); // i.e. amount withdrawn is all the balance, balance now 0
      addRecord( 'CHECKING', 'OVERDRAW&nbsp;', excess, cBal );
      sBal = 0;
    }
    $('#checking-balance').text( `$${ cBal }` );      // update CHECKING amount in display
    $('#savings-balance').text( `$${ sBal }` );      // update SAVINGS amount in display
    changeIfZero();
  };


  const depositChecking = function() {
    const amount = +$('#checking-amount').val();
    if ( !validated(amount) ) {
      return;
    }
    $('#checking-balance').text( `$${ cBal += amount }` );  // add amount and update display
    if ( cBal > 0 ) {
      $('#checking-balance').removeClass('zero');
    }
    addRecord( 'CHECKING', 'DEPOSIT&nbsp;&nbsp;', amount, cBal );  // nbsp for alignment
  };


  const depositSavings = function() {
    const amount = +$('#savings-amount').val();
    if ( !validated(amount) ) {
      return;
    }
    $('#savings-balance').text( `$${ sBal += amount }` );  // add amount and update display
    if ( sBal > 0 ) {
      $('#savings-balance').removeClass('zero');
    }
    addRecord( 'SAVINGS&nbsp;', 'DEPOSIT&nbsp;&nbsp;', amount, sBal );
  };


  const withdrawChecking = function() {
    const amount = +$('#checking-amount').val();
    if ( !validated(amount) ) {
      return;
    }
    // ** overdraft feature **
    if ( amount > cBal ) {
      if ( amount > cBal + sBal ) {
        $('.error>p').text( `Insufficient funds` );
        return;
      } else {
        withdrawOverdraft( amount, 1 ); // 1 = direction from l to r, checking then savings
        return;
      }
    } // end overdraft
    $('#checking-balance').text( `$${ cBal -= amount }` );
    changeIfZero();
    addRecord( 'CHECKING', 'WITHDRAW&nbsp;', amount, cBal );
  };


  const withdrawSavings = function() {
    const amount = +$('#savings-amount').val();
    if ( !validated(amount) ) {
      return;
    }
    // ** overdraft feature **
    if ( amount > sBal ) {
      if ( amount > cBal + sBal ) {
        $('.error>p').text( `Insufficient funds` );
        return;
      } else {
        withdrawOverdraft( amount, -1 );  // -1 = from r to l, from sav then chk
        return;
      }
    } // end overdraft **
    $('#savings-balance').text( `$${ sBal -= amount }` );
    changeIfZero();
    addRecord( 'SAVINGS&nbsp;', 'WITHDRAW&nbsp;', amount, sBal );
  };


  const addRecord = function ( acctType, transType, amount, balance ) {
    // get current date and time
    const timestamp = new Date().toString().slice(0, 24);
    // make and prepend record string
    const recordString = `${ timestamp } &nbsp; ${ acctType } &nbsp; ${ transType } &nbsp; $${ Number(amount).toFixed(2) } <span class="right-balance">$${ Number(balance).toFixed(2) } BALANCE</span>`;
    $('.record').prepend( `<p class="record-data">${recordString}</p>` );
  };

  // ************* CLICK EVENT HANDLERS **************************
  $('#checking-deposit').on('click', depositChecking);
  $('#savings-deposit').on('click', depositSavings);
  $('#checking-withdraw').on('click', withdrawChecking);
  $('#savings-withdraw').on('click', withdrawSavings);

}); // end document ready
