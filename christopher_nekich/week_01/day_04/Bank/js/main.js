bank = {
  accounts: [],
  moneyCount: function(){
    let total = 0;
    for (var i = 0; i < bank.accounts.length; i++) {
      total += bank.accounts[i].accountBalance;
    };
    return total;
  },
  addAccount: function(name, balance){
    bank.accounts.push({
      accountName: name,
      accountBalance: balance
    });
    console.log(`Account added for ${name}. Opening balance: $${balance}`)
  },
  deposit: function(name, deposit){
    for (var i = 0; i < bank.accounts.length; i++) {
      if(bank.accounts[i].accountName === name){        // finds appropriate account
        bank.accounts[i].accountBalance += deposit;     // adds deposit to existing balance
        console.log(`$${deposit} deposited. Current balance for ${name} is $${bank.accounts[i].accountBalance}`)
      }; // name finder if conditional
    }; // for loop
  },  // withdraw function
  withdraw: function(name, withdrawal){
    for (var i = 0; i < bank.accounts.length; i++) {    // finds appropriate account
      if(bank.accounts[i].accountName === name){
        if(withdrawal < bank.accounts[i].accountBalance){   // makes sure accounts cannot be negative
          bank.accounts[i].accountBalance -= withdrawal;    // withdraws amount from existing balance
          console.log(`$${withdrawal} withdrawn. Current balance for ${name} is $${bank.accounts[i].accountBalance}`);
        }else{
          console.log('Insufficient funds available in account for that withdrawal amount');
        }; //positive balance if else
      }; // name finder if conditional
    }; // for loop
  } // withdraw function
}; // bank object

console.log(bank.addAccount('Willy', 12))
