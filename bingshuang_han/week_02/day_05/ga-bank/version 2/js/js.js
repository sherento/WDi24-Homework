

// always check the account to put into the DOM
const render = function(){
  $('#checking-balance').text('$'+account.checkingBalance);
  $('#savings-balance').text('$'+account.savingsBalance);
}



$(document).ready(function(){
  $('#checking-deposit').on ('click',function](){
    const amount = $('#checking-amount').val();
    account.checkingBalance(amount);
    render();
  })

$('#checking-withdraw').on('click', function(){
  const amount = $('#checking-amount').val();
  accounts.checkingWithdraw(amount);
  render();

})

$('#savings-deposit').on ('click',function](){
  const amount = $('#savings-amount').val();
  account.savingsBalance(amount);
  render();
})

$('#savings-withdraw').on('click', function(){
const amount = $('#savings-amount').val();
accounts.savingsWithdraw(amount);
render();

})


});
