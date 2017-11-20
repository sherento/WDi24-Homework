
//******************************************************************************************
$(document).ready(function(){
  //************ create object to save the account information. saving and checking.
     const account = {
       checking:0,
       saving:0,
       depositC:function(amount){
        this.checking +=amount;
      },
       withdrawC:function(amount){
         this.checking-=amount;
      },
       depostS:function(amount){
         this.saving +=amount;
       },
       withdrawS:function(amount){
         this.saving -=amount;
       },
       overdraftC:function (amount){
         if ( (this.saving + this.checking) >= amount){
          this.saving = this.checking + this.saving - amount;
          this.checking = 0;
         }
         else {
           $('#fun').fadeIn(3000);
           $('#fun').fadeOut(1000);
           alert( "YOU HAVE INSUFFICIANT BALANCE TO DO THIS WITHDRAW!");
           //$('#fun').css("display",block);




         }
       },
       overdraftS:function(amount){
         if( ( this.saving + this.checking) >= amount){
           this.checking = this.saving + this.checking - amount;
           this.saving = 0;
         }
         else {
           $('#fun').fadeIn(3000);
           $('#fun').fadeOut(1000);
           alert( "YOU HAVE INSUFFICIANT BALANCE TO DO THIS WITHDRAW!");
         }
      }
    }
//if the checking account deposit button was clicked. the money will add to the checking account
    $('#checking-deposit').click(function(){
         if ($('#checking-amount').val() !=''){                                    // if deposit value ===" ", change the "" into 0 instead of NaN
           amount  =  parseInt( $('#checking-amount').val());

         }
         else {
           amount = 0;
         }

        //read the date from input text

        account.depositC(amount);                                                     //add amount into checking account
        if (account.checking > 0 ) {
         $('#checking-balance').css("background-color","#E3E3E3");                        // if the value is not 0, the background-color change to grey
        }
        $('#checking-balance').text (account.checking);
        //show the balance on the display
        // console.log(account.checking);
    })
    //  if the checking account withdraw button was clicked. the money will withdraw from the checking account . condition will apply later
   $('#checking-withdraw').click(function(){
      amount = parseInt( $('#checking-amount').val());
      // read the data from input text
      //if checking balance > amount , withdraw from checking account.
      if (account.checking >= amount){
        account.withdrawC(amount);      //withdraw from the account
        $('#checking-balance').text (account.checking);
        // display the checking balance on the diaplay.
        // console.log(account.checking);
        if (account.checking ===0 ) {
          $('#checking-balance').css('background-color', 'red');
        }

      }
      else{
        console.log('the overdraftC was called,saving is'+ account.saving)
        account.overdraftC (amount);
        if (account.checking ===0 ) {
          $('#checking-balance').css('background-color', 'red');
        }
        if (account.saving === 0 ){
          $('#savings-balance').css('background-color', 'red');
        }
        $('#checking-balance').text (account.checking);
        $('#savings-balance').text( account.saving);

      }
   })

//**************if the saving account deposit button was clicked. the money will go
$('#savings-deposit').click(function(){
    if ($('#savings-amount').val() !=''){
      amount =parseInt( $('#savings-amount').val());
      console.log(" input is 0");
    }
    else{
      amount = 0;
    }

    // console.log(amount);
    account.depostS(amount);
    // console.log(account.saving);
    $('#savings-balance').text( account.saving);
    if (account.saving > 0){
      $('#savings-balance').css('background-color', '#E3E3E3');
    }
})
//**************if the saving account withdraw button was clicked . the money will withdraw, conditions apply


$('#savings-withdraw').click(function(){
  amount = parseInt( $('#savings-amount').val() );
  if (account.saving >= amount){
    account.withdrawS(amount);
  //withdraw from the account saving
    if ( account.saving === 0 ){
      $('#savings-balance').css('background-color', 'red');
    }
    $('#savings-balance').text (account.saving);
    // display the checking balance on the diaplay.
    // console.log(account.saving +"saving");

  }
  else{
    // console.log('the overdraftS was called, checking account is ' + account.checking);
    account.overdraftS (amount);
    if (account.saving === 0 ){
      $('#savings-balance').css('background-color', 'red');
    }
    if (account.checking ===0 ) {
      $('#checking-balance').css('background-color', 'red');
    }
    $('#checking-balance').text (account.checking);
    $('#savings-balance').text( account.saving);
  }
  })
})

//****************************************** class way**********************************
// save all the data in DOM, and retrieve the data later when doing the accounting.



const checkForZero = function (){
  $('.zero').removeClass('zero');             // remove from css is more common way
  const checkBalance = + ($('#checking-balance').text().slice(1));
  if (0 ===checkingBalance){
    $('.zero').addClass('zero');
  }
}

// $('input:button').on('click',checkForZero);


$(document).ready(function(){
  checkForZero();

  $('#checking-deposit').on('click',function(){
    const amount = + ( $('#checking-amount').val());
    const balance = + ($('#checking-balance').text().slice(1)); //skip the "$"

    $('#checking-balance').text('$'+(amount+balance));
  })

$('#checking-withdraw').on('click',function(){
  const amount = + ( $('#checking-amount').val());
  const balance = + ($('#checking-balance').text().slice(1)); //skip the "$"

  //retrieve other balance
  // if amount <=balance
  //else
  const otherBalance = +($('#savings-balance').text().slice(1));


  const  newBalance = balance -amount;
  if (newBalance > =0 ){
    $('#checking-balance').text('$'+(newBalance));
    checkForZero();
  }
  else if ( amount <=balance +newBalance){
    const remaining = amount - balance;  // how much do we need from other account
    $('#checking-balance').text('0');
    $('#savings-balance').text(remaining);

  }

})




  $('#savings-deposit').on('click',function(){
    const amount = + ( $('#savings-amount').val());
    const balance = + ($('#savings-balance').text().slice(1)); //skip the "$"

    $('#savings-balance').text('$'+(amount+balance));
  })


  $('#savings-withdraw').on('click',function(){
    const amount = + ( $('#savings-amount').val());
    const balance = + ($('#savings-balance').text().slice(1)); //skip the "$"
    const  newBalance = balance -amount;
    if (newBalance > 0 ){
      $('#savings-balance').text('$'+(newBalance));
      checkForZero();
    }
    checkForZero();

})
