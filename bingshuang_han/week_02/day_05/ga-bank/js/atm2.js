const account = {
  checkingBalance:0,
  savingsBalance:0,

  total:function(){
    return this.checkingBalance+ this.savingsBalance;
  }


  checkingDeposit:function(amount){
    this.checkingBalance +=ParseInt(amount);

  },
  checkingWithdraw:function(amount){
    if (this.checkingBalance >= amount){
      this.checkingWithdraw -=ParseInt(amount);
    }else if (amount <=this.total()){  //Overdraft protection
      const remaining = amount - this.checkingBalance;
      this.checkingBalance = 0;
      this.savingBalance -=remaining;
    }
  },

  //
  savingsDeposit: function(){
    this.savingsBalance +=ParseInt(amount)l;
  },
  savingsWithdraw:function(){
    if(this.savingBalance >=amount){
      this.savingsBalance -=ParseInt(amount);
    }
  }else if (amount <=this.total()){  //Overdraft protection
    const remaining = amount - this.savingsBalance;
    this.savingsBalance = 0;
    this.checkingBalance -=remaining;
  }
}
