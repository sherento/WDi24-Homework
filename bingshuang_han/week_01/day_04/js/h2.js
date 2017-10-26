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
function Account (name,balance){
  this.userName = name;
  this.currentBalance = balance;
}
Account.prototype.deposit = function ( amount){
  this.currentBalance += amount;
  console.log(`Deposit: ${amount}, new balance is ${this.currentBalance}`);
}

Account.prototype.withdraw = function (amount){
  if (this.currentBalance > amount){
    this.currentBalance -= amount;
    console.log(` ${this.userName} withdraw ${amount} , new balance is ${this.currentBalance}`);
  }
  else
  console.log(`Sorry ${this.userName}, you have insufficient money to withdraw! ` );

}

const a = new Account ('Alice', 100);
const b = new Account ('Bing', 0 );
let numofBanlance = 0;
let bank = [];

bank.push(a);
bank.push(b);
//Account.prototype.createAccount=function ()

const sumOfBalance = function (){
  for (let i= 0;i<bank.length;i++){
    let c = bank[i];
    numofBanlance +=c.currentBalance;
  }
  console.log(`The total balance of the bank is ${numofBanlance}`);
}

a.withdraw (20);
b.withdraw (20);
sumOfBalance();
