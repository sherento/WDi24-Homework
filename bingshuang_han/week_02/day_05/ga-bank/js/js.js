

// always check the account to put into the DOM
const render = function(){
  $('#checking-balance').text('$'+account.checkingBalance);
  $('#savings-balance').text('$'+account.savingsBalance);

   $('.zero').removeClass('zero');

   if (accounts.savingsBalance === 0){
     $('#savings-balance').addClass('zero');

   }
   if (accounts.checkingBalance === 0){
     $('#checking-balance').addClass('zero');

}



$(document).ready(function(){
     render();
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
