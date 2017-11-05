$(document).ready(function() {
  // balances stored in object so they can be accessed via jQuery selectors and bracket notation
  const accounts = {
    checking: 0,
    savings: 0,
    setBalance: function( account, amount ) {
      this[ account ] += amount;
    },
    // same as accounts[ account ]; negative effects???
    getBalance: function( account ) {
      return this[ account ];
    }
  }

  $( ':button' ).on( 'click' , function () {
    console.log( accounts );
    // reset message
    $('.message').html('');

    // Deposit or Withdrawal
    const transactionType = $( this ).val();
    const $clickedAccount = $( this ).parent();
    // account type: checking or savings
    const clickedAccount = $clickedAccount.attr( 'id' );
    const $clickedAccountDisplay = $clickedAccount.children( '.balance' ).children( 'p' );

    const $otherAccount = $clickedAccount.siblings( '.account' );
    const otherAccount = $otherAccount.attr( 'id' );
    const $otherAccountDisplay = $otherAccount.children( '.balance' ).children( 'p' );

    const amount = $clickedAccount.children( ':text' ).val();
    let msg = '';

    if ( validateInput( amount ) ) {
      if ( transactionType === 'Deposit' ) {
        accounts.setBalance( clickedAccount, +amount );
        msg = `<p>You have successfully deposited $${ amount } into your ${ clickedAccount } account.</p><p>Your total balance is $${ sumAll( accounts ) }.</p>`;
      }
      else if ( transactionType === 'Withdraw' ) {
        msg = handleWithdrawal( amount, clickedAccount, otherAccount, $otherAccountDisplay );
      }
    }

    updateScreen( $clickedAccountDisplay, accounts.getBalance( clickedAccount ), msg );
    updateBackground( accounts.getBalance( clickedAccount ), $clickedAccount );
    updateBackground( accounts.getBalance( otherAccount ), $otherAccount );
    $clickedAccount.children( ':text' ).val( '' );

    console.log( accounts );
    // TODO: implement metric symbols for longer numbers
  });

  const validateInput = function ( amount ) {
    if ( amount === '' ) {
      msg = `<p>Please enter an amount to begin your transaction.</p>`;
      return false;
    }
    else if ( /</g.test( amount ) ) {
      msg = `<p>Please stop trying to hack the Bank of GA.</p>`;
      return false;
    }
    else if ( isNaN( amount ) ) {
      msg = `<p>The amount you've entered, "${ amount }", is not a number. Please try again.</p>`;
      return false;
    } else {
      return true;
    }
  }

  const handleWithdrawal = function ( amount, clickedAccount, otherAccount, $otherAccountDisplay ) {
    let totalBalance = sumAll( accounts );
    const clickedAccountBalance = accounts.getBalance( clickedAccount );
    let msg = '';

    if ( amount > totalBalance ) {
      msg = `<p>Your total balance is $${ totalBalance }.</p><p>You don't have enough money to withdraw $${ amount }.</p>`;
    }
    else if ( amount > clickedAccountBalance ) {
      accounts.setBalance( clickedAccount, -clickedAccountBalance );
      // withdraw remainder from overdraft protection account
      accounts.setBalance( otherAccount, -( amount - clickedAccountBalance ) );
      // update balance on screen
      updateScreen( $otherAccountDisplay, accounts.getBalance( otherAccount ) );

      totalBalance = sumAll( accounts );
      msg = `<p>You have successfully withdrawn $${ clickedAccountBalance } from your ${ clickedAccount } account and $${ amount - clickedAccountBalance } from your ${ otherAccount } account (total amount: $${amount}).</p><p>Your total balance is $${ totalBalance }.</p>`;
    }
    else {
      accounts.setBalance( clickedAccount, -amount );

      totalBalance = sumAll( accounts );
      msg = `<p>You have successfully withdrawn $${ amount } from your ${ clickedAccount } account.</p><p>Your total balance is $${ totalBalance }.</p>`;
    }
    return msg;
  }

  const sumAll = function ( accounts ) {
    let total = 0;
    for ( let account in accounts ) {
      if ( !isNaN( accounts[ account ] ) ) {
        total += accounts[ account ];
      }
    }
    return total;
  }

  const updateScreen = function ( display, balance, msg ) {
    display.html(`$${ balance }`);
    $( '.message' ).html( msg );
    fadeIn( display, $( '.message' ) );
  }

  // function necessary to maintain display height
  const fadeIn = function () {
    for ( let i = 0; i < arguments.length; i++ ) {
      arguments[i].css( 'opacity', '0.0' ).animate( { opacity: 1.0 }, 375 );
      // prevents animation from locking up
      arguments[i].clearQueue();
    }
  }

  const updateBackground = function ( accountBalance, accountNode ) {
    if ( accountBalance === 0 ) {
      accountNode.children( '.balance' ).addClass( 'zero' );
    }
    else if ( accountBalance !== 0 ) {
      accountNode.children( '.balance' ).removeClass( 'zero' );
    }
  }
});
