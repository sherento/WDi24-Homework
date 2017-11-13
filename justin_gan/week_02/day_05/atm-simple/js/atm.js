const checkForZero = function () {
  $( '.zero' ).removeClass( 'zero' );
  const checkingBalance = +( $('#checking-balance').text().slice(1) ); // skip the '$'
  if ( 0 === checkingBalance ) {
    $( '#checking-balance' ).addClass( 'zero' );
  }

  const savingsBalance = +( $('#savings-balance').text().slice(1) ); // skip the '$'
  if ( 0 === savingsBalance ) {
    $( '#savings-balance' ).addClass( 'zero' );
  }
}

$( document ).ready( function () {
  checkForZero();

  $( '#checking-deposit' ).on( 'click', function () {
    const amount = +( $( '#checking-amount' ).val() );
    const balance = +( $('#checking-balance').text().slice(1) ); // skip the '$'
    $( '#checking-balance' ).text( '$' + (amount + balance) );
    checkForZero();
  });

  $( '#checking-withdraw' ).on( 'click', function () {
    const amount = +( $( '#checking-amount' ).val() );
    const balance = +( $('#checking-balance').text().slice(1) ); // skip the '$'
    const otherBalance = +($('#savings-balance').text().slice(1) ); // skip the '$'

    const newBalance = balance - amount;
    if ( newBalance >= 0 ) {
      $( '#checking-balance' ).text( '$' + ( newBalance ) );
    } else if (amount <= balance + otherBalance) {
      const remaining = amount - balance; // How much do we need from the other account
      $( '#checking-balance' ).text( '$0' );
      $( '#savings-balance' ).text( '$' + ( otherBalance - remaining ) );

    } else {
      console.log( 'nope' );
    }

    checkForZero();

  });

  $( '#savings-deposit' ).on( 'click', function () {
    const amount = +( $( '#savings-amount' ).val() );
    const balance = +( $('#savings-balance').text().slice(1) ); // skip the '$'
    $( '#savings-balance' ).text( '$' + (amount + balance) );
    checkForZero();
  });

  $( '#savings-withdraw' ).on( 'click', function () {
    const amount = +( $( '#savings-amount' ).val() );
    const balance = +( $('#savings-balance').text().slice(1) ); // skip the '$'
    const newBalance = balance - amount;
    if ( newBalance >= 0 ) {
      $( '#savings-balance' ).text( '$' + ( newBalance ) );
    }
    checkForZero();
  });

  $( '#savings-withdraw' ).on( 'click', function () {
    const amount = +( $( '#savings-amount' ).val() );
    const balance = +( $('#savings-balance').text().slice(1) ); // skip the '$'
    const otherBalance = +($('#checking-balance').text().slice(1) ); // skip the '$'

    const newBalance = balance - amount;
    if ( newBalance >= 0 ) {
      $( '#savings-balance' ).text( '$' + ( newBalance ) );
    } else if (amount <= balance + otherBalance) {
      const remaining = amount - balance; // How much do we need from the other account
      $( '#savings-balance' ).text( '$0' );
      $( '#checking-balance' ).text( '$' + ( otherBalance - remaining ) );

    } else {
      console.log( 'nope' );
    }

    checkForZero();

  });

});
