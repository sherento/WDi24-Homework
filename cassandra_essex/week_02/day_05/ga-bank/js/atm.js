let checkingAccount = 0;
let savingsAccount = 0;

$(document).ready(function (){

  $('#checking-amount').val();
  $('#savings-amount').val();


  $('#checking-deposit').on('click', function() {
    checkingAccount = checkingAccount + +$('#checking-amount').val();
    $('#checking-balance.balance').text(checkingAccount);
    $("#checking-balance.balance").css({"background-color":"#E3E3E3"});
  });
})

$('#savings-deposit').on('click', function() {
  savingsAccount = savingsAccount+ +$('#savings-amount').val();
  $('#savings-balance.balance').text(savingsAccount);
  $("#savings-balance.balance").css({"background-color":"#E3E3E3"});
});


$('#checking-withdraw').on('click', function() {
  if ( checkingAccount <= 0 ) {
      console.log(('Insufficient funds available') + $("#checking-balance.balance").css({"background-color":"red"}));
  } else {
    checkingAccount = checkingAccount - +$('#checking-amount').val();
    $('#checking-balance').text(checkingAccount).css({"background-color":"#E3E3E3"});
  };
});

 $('#savings-withdraw').on('click', function() {
  if ( savingsAccount <= 0 ) {
    console.log(('Insufficient funds available') + $("#savings-balance.balance").css({"background-color":"red"}));
  } else  {
  savingsAccount = savingsAccount - +$('#savings-amount').val();
  $('#savings-balance').text(savingsAccount);
  $("#savings-balance.balance").css({"background-color":"#E3E3E3"});
};
});
