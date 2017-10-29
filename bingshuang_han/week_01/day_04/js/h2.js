/*
JavaScript Bank

In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.
Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
Tips

Don't overthink this. Shorter code is probably the answer.
Bonus

    Ensure that the accounts cannot have negative values.
    Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
*/
//***********************************************************************************************
// first version I will redo this if I have time during the weekend
//**************************************************************************************************
//Declare account object, it has useName aand currentBalance as keys. deposit and withdraw as method.
function Account (name,balance){
  this.userName = "";
  this.currentBalance = 0;
}
Account.prototype.deposit = function ( amount){
  this.currentBalance += Number(amount);
  console.log(`Client ${this.userName} deposit: ${amount}, new balance is ${this.currentBalance}`);
}

Account.prototype.withdraw = function (amount){
  if (this.currentBalance > Number(amount) ){
    this.currentBalance -= Number(amount);
    console.log(` Client ${this.userName} withdraw ${amount} , new balance is ${this.currentBalance}`);
  }
  else
  console.log(`Sorry ${this.userName}, you have insufficient money to withdraw! ` );
}

//Declare global varibal bank []
let bank = new Array();

//********************************************************************************
//global function for creat new account
const creatNewAccount = function( ){
  let a = prompt("Creat a New Account: client Name:");
  let b = prompt ("Start balance :");
  let c = new Account(a,b);
  c.userName = a;
  c.currentBalance = Number( b) ;
  bank.push(c);
  console.log(`Your account ${a} has been created, and the current Balance is $ ${b}`);
}

// global function for deposit***************************************************
const deposit = function ( ){
  let userName = prompt("Deposit -Netbank client name:");
  let amount = prompt ("Amount for deposit:");
  let match = false;
  // match will return true if the bank found the user name other will be false;
  for (let i= 0; i< bank.length;i++){
    if (bank[i].userName === userName){
      bank[i].deposit( Number(amount));
      c = true;
      return;
    }
  }
  if (!match){
    console.log(`Sorry,Your account is not exit`);
  }
}

//global function for withdraw ************************************************
const withdraw = function (){
  let userName = prompt ("Withdraw - Netbank client name:");
  let amount = prompt ("Amount for withdraw:");
  let match = false;
  // match will return true if the bank found the user name other will be false;
  for (let i= 0; i< bank.length;i++){
    if (bank[i].userName === userName){
        bank[i].withdraw ( Number (amount));
        match = true ;
      }
    }
    if (!match){
    console.log(`Sorry, Client ${userName} is not exist.`);
    }
}



//Global function for transaction between two clients***************************
const accountTransfer = function (){
  let checkA = false;                                                     //true if client A exist
  let checkB = false;                                                     //true if client B exist
  let i= 0 ;                                                              // index of client A
  let j= 0 ;                                                              //index of client B
  let userA = prompt("Transaction from , Client name:");
  let amount = prompt ("Transfer amount :");
  let userB = prompt ("Transaction to , Client name:");
  for ( i= 0; i< bank.length; i++){
    if (bank[i].userName === userA){
      checkA = true;
      break;
    }
  }
   if (!checkA){
   console.log(` ${userA} is not exist !`);
   return;
 }
  for ( j= 0 ; j< bank.length; j++){
    if ( bank[j].userName === userB ){
      checkB = true;
      break;
    }
  }
  if (!checkB) {
    console.log(`${userB} is not exist!`);
    return;
  }
  //check if user A have sufficient money to do this transaction////////////////////////
  if (bank[i].currentBalance >= Number(amount)) {
      bank[i].currentBalance -= Number(amount);
      bank[j].currentBalance += Number(amount);
      console.log(` Transaction finished. ${userA} 's current balance : ${bank[i].currentBalance}' and ${userB}'s current balance :${bank[j].currentBalance}.' `)
  }
  else {
    console.log(`${bank[j].userName} You have insufficient balance to do this transaction!`);
  }
}

//global function for calculate all the balance of the bank********************
const sumOfBalance = function (){
  let sum = 0;
  for ( let i=0; i<bank.length; i++){
    sum += bank[i].currentBalance ;
  }
  console.log( `The total balance of the bank is ${sum} $`);
}


//For test /////////////////////////////////////////////////////////////////////////////////////////////
// creatNewAccount();
// console.log(bank);

// deposit();
// withdraw();
// accountTransfer();
//*********************************************************************************************************
