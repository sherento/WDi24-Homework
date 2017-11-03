$(document).ready(function() {
  const accounts = {
    checking: 0,
    savings: 0
  }
  $( ':button' ).on( 'click' , function () {
    // reset message
    $('.message').html('');

    // store relevant information
    const transactionType = $( this ).val();  // Deposit or Withdrawal
    const $account = $( this ).parent();  // parent node of clicked button
    const accountType = $account.attr( 'id' );  // checkings or savings account
    const $overdraftProtectionAccount = $account.siblings( '.account' ); // overdraft protection account node i.e. account that wasn't clicked
    const overdraftProtectionAccountType = $overdraftProtectionAccount.attr( 'id' ); // account type that wasn't clicked
    const amount = $account.children( ':text' ).val(); // amount entered by user

    if ( isNaN( amount ) ) {  // validate input
      $( '.message' ).html( `The amount you've entered, "${ amount }", is not a number. Please try again.` )
    }
    else if ( transactionType === 'Deposit' ) {
      accounts[ accountType ] += +amount; // add amount to account in accounts object
    }
    else if ( transactionType === 'Withdraw' && amount > sumAll( accounts ) ) { // if withdraw amount is larger than sum of all accounts inform user they're too poor
      $( '.message' ).html( `<p>Your total balance is $${ sumAll( accounts ) }. You don't have enough money to withdraw $${ amount }.</p>` )
    }
    else if ( transactionType === 'Withdraw' && amount > accounts[ accountType ]) {
      const remainder = amount - accounts[ accountType ];  // calculate amount needed from overdraft protection account
      accounts[ accountType ] = 0;  // withdraw all from user specified account
      accounts[ overdraftProtectionAccountType ] -= remainder; // withdraw remainder from overdraft protection account
      // update balance on screen
      $overdraftProtectionAccount.children( '.balance' ).html(`$${ accounts[ overdraftProtectionAccountType ] }`);
    }
    else if ( transactionType === 'Withdraw'  ) {
      accounts[ accountType ] -= +amount; // subtract amount from account in accounts object
    }

    if ( accounts[ accountType ] === 0 ) {
      $account.children( '.balance' ).addClass( 'zero' );
    }
    else if ( accounts[ accountType ] !== 0 ) {
      $account.children( '.balance' ).removeClass( 'zero' );
    }
    // update balance on screen
    $account.children( '.balance' ).html(`$${ accounts[ accountType ] }`);
  });

  const sumAll = function ( accounts ) {
    let total = 0;
    for ( let account in accounts ) {
      total += accounts[ account ];
    }
    return total;
  }

});
