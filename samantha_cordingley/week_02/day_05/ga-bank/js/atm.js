
//check the document is ready because js script tags are in the header of the HTML
$(document).ready(function () {
  console.log("document is ready");

//get amount that user has put in when they click the deposit button
//add amount to 'total' balance each time deposit button is clicked

//global scope
let total = 0;
let total2 = 0;
let tempBal = 0;


const checkingDepos = function (event) {
  const amount = $('#checking-amount').val();
  //console.log(amount);
  let num = parseFloat(amount);
  total += num;
$('#checking-balance').html(`$${total}`);
if (total > 0) {
  $('#checking-balance').removeClass('zero')
}
};

$('#checking-deposit').on('click', checkingDepos);



//get amount that user has put in when they click withdrawal

//subtract amount from 'total' balance each time the withdrawal button is clicked

const checkingWithdraw = function (event) {
  const amountGone = $('#checking-amount').val();
  //console.log(amount);
  let num = parseFloat(amountGone);
  if (num <= total) {
  total = total - num;

$('#checking-balance').html(`$${total}`);
if (total === 0) {
  $('#checking-balance').addClass('zero')
  }
  }
};

$('#checking-withdraw').on('click', checkingWithdraw);

//get amount that user puts in when they click deposit on the savings accounts

const savingsDepos = function (event) {
  const amount3 = $('#savings-amount').val();
  //console.log(amount);
  let num = parseFloat(amount3);
  total2 += num;
$('#savings-balance').html(`$${total2}`);
if (total2 > 0) {
  $('#savings-balance').removeClass('zero')
}
};

$('#savings-deposit').on('click', savingsDepos);

//get amount that user puts in when they click withdrawal on the savings accounts

const savingsWithdraw = function (event) {
  const amountGone2 = $('#savings-amount').val();
  //console.log(amount);
  let num = parseFloat(amountGone2);
  if (num <= total2) {
  total2 = total2 - num;

$('#savings-balance').html(`$${total}`);
if (total2 === 0) {
  $('#savings-balance').addClass('zero')
}
}
};

$('#savings-withdraw').on('click', savingsWithdraw);



});


//if there a user tries to withdraw from checking account but the right amount is in the savings, set the checking acc to 0 and take the remainder from the savings

// if (num > total) {
//   tempBal = num - total;
//   total = 0;
// }
// if (tempBal < total2) {
//   total2 = total2 - tempBal;
// }
