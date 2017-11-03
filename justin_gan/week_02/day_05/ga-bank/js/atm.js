let checkingBalance = 0;
let savingsBalance = 0;

$(document).ready(function() {
  const accounts = {
    checking: 0,
    savings: 0
  }
  $( ':button' ).on( 'click' , function () {
    // store relevant information
    const transaction = $( this ).val();  // Deposit or Withdrawal
    const $account = $( this ).parent();  // parent node of clicked button
    const accountType = $account.attr( 'id' );  // checkings or savings account
    const amount = $account.children( ':text' ).val(); // amount entered by user

    if ( isNaN( amount ) ) {  // validate input
      $('.message').html(`The amount you've entered, "${ amount }", is not a number. Please try again.`)
    }

    else if ( transaction === 'Deposit' ) {
      accounts[ accountType ] += +amount; // add amount to account in accounts object
    }
    else if ( accounts[ accountType] - amount < 0 ) { // inform user they're too poor
      $('.message').html(`<p>Your balance is $${ accounts[ accountType ] }. You don't have enough money to withdraw $${ amount }.</p>`)
    }
    else if ( transaction === 'Withdraw'  ) {
      accounts[ accountType ] -= +amount; // subtract amount to account in accounts object
    }

    // update balance on screen
    $account.children( '.balance' ).html(`$${ accounts[ accountType ] }`);
  });
});
