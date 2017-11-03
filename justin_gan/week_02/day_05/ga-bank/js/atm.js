let checkingBalance = 0;
let savingsBalance = 0;

$(document).ready(function() {
  const user = {
    checking: 0,
    savings: 0
  }
  $( ':button' ).on( 'click' , function () {


    // store whether the transaction is a deposit or withdrawal
    const transaction = $( this ).val();

    // store the parent node of clicked button
    const $account = $( this ).parent();
    const accountId = $account.attr( 'id' );
    console.log( accountId );
    const amount = $account.children( ':text' ).val();
    console.log( transaction );
    if ( transaction === 'Deposit' ) {
      console.log( user[accountId] += +amount );
      checkingBalance += +amount;
    }
    else if ( transaction === 'Withdraw' ) {
      console.log( user[accountId] -= +amount );
      checkingBalance -= +amount;
    }
    $account.children( '.balance' ).html(`$${ user[ accountId ] }`);
  });
});
