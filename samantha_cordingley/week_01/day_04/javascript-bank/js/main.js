/*In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.
*/
/*
Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips

Don't overthink this. Shorter code is probably the answer.
*/

//create array of accounts - where each account is an object
//each object should have properties name and current balance
let accounts = [
  { name: "Jane Doe", balance: 50 },
  { name: "John Roe", balance: 100 },
  { name: "Jackie Rich", balance: 20 }
];

console.log(accounts);


//return total balance of all the accounts
const totalBalance = function (total) {
  let sum = 0;
  for (i = 0; i < accounts.length; i++) {
  sum += accounts[i]["balance"];
  }
  console.log(sum);
}

totalBalance(accounts);


//allow new account to be added to the array
let newAccount = function (newOwner, bal) {
  for (let i = 0; i < newAccount.length -1; i++) {
    accounts.push({name: newOwner, balance: bal});
  }
console.log(accounts);
}

newAccount("Jackie O", 60);
newAccount("Peter Pan", 40);


//allow withdrawal to account - return new total balance
const accWithdraw = function (person, sum) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].name === person) {
      accounts[i].balance = accounts[i].balance - sum;
      console.log(accounts[i].balance);
    }
  }
}

console.log(accWithdraw("Jane Doe", 25));


//allow deposit to account - return new total balance
const accDeposit = function (person, sum) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].name === person) {
      accounts[i].balance += sum;
      console.log(accounts[i].balance);
    }
  }
}

console.log(accDeposit("John Roe", 70));
