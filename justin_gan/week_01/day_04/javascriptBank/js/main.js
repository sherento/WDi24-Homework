/*
Javascript Bank
*/

let bank = [];

const sumAllAccounts = function () {
  let sum = 0;
  // iterate through accounts in bank and sum their balances
  for (let i = 0; i < bank.length; i++) {
    sum += bank[i].balance;
  }
  return sum;
}

const addAccount = function ( balance, name ) {
  // if balance is less than 0, inform user and return false
  if ( balance < 0 ) {
    console.log(`You can't have a negative balance.`);
    return false;
  } else {
    // push account to bank and return true
    const account = {
      balance: balance,
      name: name
    }
    bank.push(account);
    return true;
  }
}

const deposit = function ( amount, name ) {
  // iterate through bank until name matches name in account & add amount to balance
  for (let i = 0; i < bank.length; i++) {
    let b = bank[i];
    if ( b.name === name ) {
      b.balance += amount;
      return b.balance;
    }
  }
}

const withdraw = function ( amount, name ) {
  // iterate through bank until name matches name in account
  for (let i = 0; i < bank.length; i++) {
    let b = bank[i];
    if ( b.name === name ) {
      // if balance would be negative after withdraw, inform user and return false
      if ( b.balance - amount < 0 ) {
        console.log(`Your balance is $${ b.balance }. You don't have enough money to withdraw $${ amount }.`);
        return false;
      }
      // remove amount from balance
      else {
        b.balance -= amount;
        return b.balance;
      }
    }
  }
}

const transfer = function ( amount, transferrer, recipient ) {
  // call withdraw to take money from transferrer and deposit it in recipients account
  if ( withdraw(amount, transferrer) !== false ) {
    deposit(amount, recipient);
    return true;
  }
  // if withdraw fails, return false
  else {
    return false;
  }
}

console.log(addAccount(2000, 'Justin'));
console.log(addAccount(2050, 'Meggan'));
console.log(addAccount(-50, 'Bill'));
console.log(sumAllAccounts(bank));
console.log(addAccount(375, 'Rich'));
console.log(sumAllAccounts(bank));
console.log(deposit(25, 'Rich'));
console.log(withdraw(5000, 'Rich'));
console.log(sumAllAccounts(bank));
console.log(withdraw(100, 'Justin'));
console.log(sumAllAccounts(bank));
console.log(transfer(100, 'Justin', 'Rich'));
