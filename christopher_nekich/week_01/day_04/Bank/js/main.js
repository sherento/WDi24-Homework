bank = {
  accounts: [],
  showBalance: function(name){
    for (var i = 0; i < bank.accounts.length; i++) {
      if(bank.accounts[i].accountName === name){
        return (`${name} currently has $${bank.accounts[i].accountBalance} in their account.`)
      }
    };
    return (`This bank holds $${total} in total.`);
  },
  addAccount: function(name, balance){
    bank.accounts.push({
      accountName: name,
      accountBalance: balance
    });
    return (`Account added for ${name}. Opening balance: $${balance}`);
  },
  deposit: function(name, deposit){
    for (var i = 0; i < bank.accounts.length; i++) {
      if(bank.accounts[i].accountName === name){        // finds appropriate account
        bank.accounts[i].accountBalance += deposit;     // adds deposit to existing balance
        return (`$${deposit} deposited. Current balance for ${name} is $${bank.accounts[i].accountBalance}`)
      }; // name finder if conditional
    }; // for loop
  },  // withdraw function
  withdraw: function(name, withdrawal){
    for (var i = 0; i < bank.accounts.length; i++) {    // finds appropriate account
      if(bank.accounts[i].accountName === name){
        if(withdrawal < bank.accounts[i].accountBalance){   // makes sure accounts cannot be negative
          bank.accounts[i].accountBalance -= withdrawal;    // withdraws amount from existing balance
          return (`$${withdrawal} withdrawn. Current balance for ${name} is $${bank.accounts[i].accountBalance}`);
        }else{
          return (`$${bank.accounts[i].accountBalance} available in account. Unable to withdraw $${withdrawal}`);
        }; //positive balance if else
      }; // name finder if conditional
    }; // for loop
  }, // withdraw function
  transfer: function(fromAcc, toAcc, amount){
    let fromAccount;
    let toAccount;
    for (var i = 0; i < bank.accounts.length; i++) {
      if(bank.accounts[i].accountName === fromAcc){
        fromAccount = bank.accounts[i];
      }else if(bank.accounts[i].accountName === toAcc){
        toAccount = bank.accounts[i];
      };
    };
    fromAccount.accountBalance -= amount;
    toAccount.accountBalance += amount;
    return (`${fromAccount.accountName} has transferred $${amount} to ${toAccount.accountName}.`)
  } // transfer function
}; // bank object

console.log(bank.addAccount('Willy', 12));
console.log(bank.deposit('Willy', 500));
console.log(bank.withdraw('Willy', 25));
console.log(bank.withdraw('Willy', 1000));
console.log(bank.addAccount('James', 20));
console.log(bank.showBalance('Willy'));
console.log(bank.transfer('Willy', 'James', 240));
console.log(bank.showBalance('James'));
