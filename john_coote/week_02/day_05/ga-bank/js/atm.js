console.log("waiting...");


let balance = {
  checking: 0,
  savings: 0
};

let deposit = function (string1, string2) {

  num1 = +string2; // thr transaction amount
  balance[string1] = balance[string1] + num1

  display (string1, balance[string1]);
}

let withdraw = function (string1, string2) {

  num1 = +string2; // thr transaction amount
  if (string1 === 'savings') {string0 = 'checking'};
  if (string1 === 'checking') {string0 = 'savings'};

  if (balance.checking + balance.savings -  num1 < 0) {
    console.log('insufficient funds');
    return
  }

  if (balance[string1] - num1 >= 0) {
    balance[string1] = balance[string1] - num1
  } else {
    // take from both acocunts
    remainder = (0 - balance[string1] + num1)
    balance[string1] = 0
    balance[string0] = balance[string0] - remainder;
  }

  //send to display
  display (string1, balance[string1]);
  display (string0, balance[string0]);

}

let display = function (accType, accBalance) {
  $("#"+ accType + "-balance").text("$" + accBalance)
  //<div class="balance" id="checking-balance">$0</div>
  // #E3E3E3  // red
  if (accBalance === 0) {
    $("#"+ accType + "-balance").css('background-color', 'red');
  } else {
    $("#"+ accType + "-balance").css('background-color', '#E3E3E3');
  }

}

$('#savings-deposit').on('click', function () {
  deposit('savings', $('#savings-amount').val());
})

$('#checking-deposit').on('click', function() {
  deposit('checking', $('#checking-amount').val());
})

$('#savings-withdraw').on('click', function () {
  withdraw('savings', $('#savings-amount').val());
})

$('#checking-withdraw').on('click', function () {
  withdraw('checking', $('#checking-amount').val());
})
