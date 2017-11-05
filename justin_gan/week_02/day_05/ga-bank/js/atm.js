$(document).ready(function() {

  // balances stored in object so they can be accessed via jQuery selectors and bracket notation
  const accounts = {
    checking: 0,
    savings: 0,
    setBalance: function( account, amount ) {
      this[ account ] += amount;
    },
    // same as accounts [ account ]
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

    if ( amount === '' ) {
      $( '.message' ).html( `Please enter an amount to begin your transaction.` );
    }
    else if ( /</g.test( amount ) ) {
      $( '.message' ).html( `Please stop trying to hack the Bank of GA.`);
    }
    else if ( isNaN( amount ) ) {
      $( '.message' ).html( `The amount you've entered, "${ amount }", is not a number. Please try again.` )
    }
    else if ( transactionType === 'Deposit' ) {
      accounts.setBalance( clickedAccount, +amount );

      // TODO: successful transaction message

    }
    else if ( transactionType === 'Withdraw' ) {
      handleWithdrawal( amount, clickedAccount, otherAccount, $otherAccountDisplay );
    }
    // TODO: empty text input after button click

    // update balance on screen
    $clickedAccountDisplay.html(`$${ accounts.getBalance( clickedAccount ) }`);
    fadeAmountIn( $clickedAccountDisplay );

    updateBackground( accounts.getBalance( clickedAccount ), $clickedAccount );
    updateBackground( accounts.getBalance( otherAccount ), $otherAccount );

    console.log( accounts );
  });

  const handleWithdrawal = function ( amount, clickedAccount, otherAccount, $otherAccountDisplay ) {
    const totalBalance = sumAll( accounts );
    if ( amount > totalBalance ) {
      $( '.message' ).html( `<p>Your total balance is $${ totalBalance }.</p><p>You don't have enough money to withdraw $${ amount }.</p>` )
    }
    else if ( amount > accounts.getBalance( clickedAccount ) ) {
      // calculate amount needed from overdraft protection account
      const remainder = amount - accounts.getBalance( clickedAccount );
      // withdraw all from user specified account
      accounts.setBalance( clickedAccount, -( amount - remainder ) );
      // withdraw remainder from overdraft protection account
      accounts.setBalance( otherAccount, -remainder );
      // update balance on screen
      $otherAccountDisplay.html(`$${ accounts.getBalance( otherAccount ) }`);
      fadeAmountIn( $otherAccountDisplay );

      // TODO: successful transaction message

    }
    else {
      accounts.setBalance( clickedAccount, -amount );

      // TODO: successful transaction message

    }
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

  const fadeAmountIn = function ( balanceDisplay ) {
    balanceDisplay.css( 'opacity', '0.0' ).animate( { opacity: 1.0 }, 375 );
    balanceDisplay.clearQueue();
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
