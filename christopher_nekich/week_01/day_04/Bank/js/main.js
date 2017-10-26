bank = {
  accounts: [],
  moneyCount: function(){
    let total = 0;
    for (var i = 0; i < bank.accounts.length; i++) {
      total += bank.accounts[i].accountBalance;
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
  } // withdraw function
}; // bank object

console.log(bank.addAccount('Willy', 12));
console.log(bank.deposit('Willy', 500));
console.log(bank.withdraw('Willy', 25));
console.log(bank.withdraw('Willy', 1000));
console.log(bank.addAccount('James', 20))
console.log(bank.moneyCount());
