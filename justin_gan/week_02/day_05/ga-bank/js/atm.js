$(document).ready(function() {

  // balances stored in object so they can be accessed via jQuery selectors and bracket notation
  const accounts = {
    checking: 0,
    savings: 0
  }

  $( ':button' ).on( 'click' , function () {
    // reset message
    $('.message').html('');

    // Deposit or Withdrawal
    const transactionType = $( this ).val();
    const $clickedAccount = $( this ).parent();
    // account type: checking or savings
    const clickedAccount = $clickedAccount.attr( 'id' );
    const $clickedAccountBalanceDisplay = $clickedAccount.children( '.balance' ).children( 'p' );
    const $otherAccount = $clickedAccount.siblings( '.account' );
    const otherAccount = $otherAccount.attr( 'id' );
    const $otherAccountBalanceDisplay = $otherAccount.children( '.balance' ).children( 'p' );
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
      accounts[ clickedAccount ] += +amount;

      // add functionality: successful transaction message

    }
    else if ( transactionType === 'Withdraw' ) {
      handleWithdrawal( amount, clickedAccount, otherAccount, $otherAccountBalanceDisplay );
    }
    // add functionality: empty text input after button click

    // update balance on screen
    $clickedAccountBalanceDisplay.html(`$${ accounts[ clickedAccount ] }`);
    fadeAmountIn( $clickedAccountBalanceDisplay );

    updateBackground( accounts[ clickedAccount ], $clickedAccount );
    updateBackground( accounts[ otherAccount ], $otherAccount );

  });

  const handleWithdrawal = function ( amount, clickedAccount, otherAccount, $otherAccountBalanceDisplay ) {
    const totalBalance = sumAll( accounts );
    if ( amount > totalBalance ) {
      $( '.message' ).html( `<p>Your total balance is $${ totalBalance }.</p><p>You don't have enough money to withdraw $${ amount }.</p>` )
    }
    else if ( amount > accounts[ clickedAccount ]) {
      // calculate amount needed from overdraft protection account
      const remainder = amount - accounts[ clickedAccount ];
      // withdraw all from user specified account
      accounts[ clickedAccount ] = 0;
      // withdraw remainder from overdraft protection account
      accounts[ otherAccount ] -= remainder;
      // update balance on screen
      $otherAccountBalanceDisplay.html(`$${ accounts[ otherAccount ] }`);
      fadeAmountIn( $otherAccountBalanceDisplay );

      // add functionality: successful transaction message

    }
    else {
      accounts[ clickedAccount ] -= +amount;

      // add functionality: successful transaction message

    }
  }

  const sumAll = function ( accounts ) {
    let total = 0;
    for ( let account in accounts ) {
      total += accounts[ account ];
    }
    return total;
  }

  const fadeAmountIn = function ( balanceDisplay ) {
    // fade amount in
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
