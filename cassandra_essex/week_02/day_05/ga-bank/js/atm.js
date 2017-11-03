let checkingAccount = 0;
let savingsAccount = 0;

$(document).ready(function (){

  $('#checking-amount').val();
  $('#savings-amount').val();

  $('#checking-deposit').on('click', function() {
    checkingAccount = checkingAccount + +$('#checking-amount').val();
    $('#checking-balance').text(checkingAccount);
  });
})

  $('#checking-withdraw').on('click', function() {
    checkingAccount = checkingAccount - +$('#checking-amount').val();
    $('#checking-balance').text(checkingAccount);
  });


  $('#savings-deposit').on('click', function() {
    savingsAccount = savingsAccount+ +$('#savings-amount').val();
    $('#savings-balance').text(savingsAccount);
  });


  $('#savings-withdraw').on('click', function() {
    savingsAccount = savingsAccount - +$('#savings-amount').val();
    $('#savings-balance').text(savingsAccount);
  });
