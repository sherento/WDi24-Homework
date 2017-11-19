const account = {
  checkingBalance:0,
  savingsBalance:0,

  checkingDeposit:function(amount){
    this.checkingBalance +=ParseInt(amount);

  },
  checkingWithdraw:function(amount){
    if (this.checkingBalance >= amount){
      this.checkingWithdraw -=ParseInt(amount);
    }
  },
  savingsDeposit: function(){
    this.savingsBalance +=ParseInt(amount)l;
  },
  savingsWithdraw:function(){
    if(this.savingBalance >=amount){
      this.savingsBalance -=ParseInt(amount);
    }
  }
}
