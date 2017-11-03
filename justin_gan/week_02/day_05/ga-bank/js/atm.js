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
    // parent node of clicked button
    const $clickedAccount = $( this ).parent();
    // account type: checking or savings
    const clickedAccount = $clickedAccount.attr( 'id' );
    // overdraft protection account node i.e. account that wasn't clicked
    const $otherAccount = $clickedAccount.siblings( '.account' );
    // account type that wasn't clicked
    const otherAccount = $otherAccount.attr( 'id' );
    // amount entered by user
    const amount = $clickedAccount.children( ':text' ).val();

    if ( isNaN( amount ) ) {  // validate input
      $( '.message' ).html( `The amount you've entered, "${ amount }", is not a number. Please try again.` )
    }
    else if ( transactionType === 'Deposit' ) {
      accounts[ clickedAccount ] += +amount;
    }
    else if ( transactionType === 'Withdraw' && amount > sumAll( accounts ) ) {

      $( '.message' ).html( `<p>Your total balance is $${ sumAll( accounts ) }.</p><p>You don't have enough money to withdraw $${ amount }.</p>` )

    }
    else if ( transactionType === 'Withdraw' && amount > accounts[ clickedAccount ]) {
      // calculate amount needed from overdraft protection account
      const remainder = amount - accounts[ clickedAccount ];
      // withdraw all from user specified account
      accounts[ clickedAccount ] = 0;
      // withdraw remainder from overdraft protection account
      accounts[ otherAccount ] -= remainder;
      // update balance on screen
      $otherAccount.children( '.balance' ).html(`$${ accounts[ otherAccount ] }`);
    }
    else if ( transactionType === 'Withdraw'  ) {
      accounts[ clickedAccount ] -= +amount;
    }

    // update balance on screen
    $clickedAccount.children( '.balance' ).html(`$${ accounts[ clickedAccount ] }`);

    updateBackground( accounts[ clickedAccount ], $clickedAccount, accounts[ otherAccount ], $otherAccount );

  });

  const sumAll = function ( accounts ) {
    let total = 0;
    for ( let account in accounts ) {
      total += accounts[ account ];
    }
    return total;
  }

  const updateBackground = function ( clickedAccountBalance, clickedAccountNode, otherAccountBalance, otherAccountNode ) {
    if ( clickedAccountBalance === 0 ) {
      clickedAccountNode.children( '.balance' ).addClass( 'zero' );
    }
    else if ( clickedAccountBalance !== 0 ) {
      clickedAccountNode.children( '.balance' ).removeClass( 'zero' );
    }

    if ( otherAccountBalance === 0 ) {
      otherAccountNode.children( '.balance' ).addClass( 'zero' );
    }
    else if ( otherAccountBalance !== 0 ) {
      otherAccountNode.children( '.balance' ).removeClass( 'zero' );
    }
  }
});
