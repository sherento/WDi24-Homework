
// AUD to GBP = 0.58 GBP to 1 AUD

const AUDtoGBPrate = 0.585;
const GBPtoAUDrate = 1 / AUDtoGBPrate;

const dollarAmount = 10;
const poundAmount = 10;

const dollarsToPounds = function (amount, rate) {
  console.log( `$${ Number(amount).toFixed(2) } is £${ Number(amount * rate).toFixed(2) }.` );
  return amount * rate;
};

const poundsToDollars = function (amount, rate) {
  console.log( `£${ Number(amount).toFixed(2) } is $${ Number(amount * rate).toFixed(2) }.` );
  return amount * rate;
};

dollarsToPounds( dollarAmount, AUDtoGBPrate );
poundsToDollars( poundAmount, GBPtoAUDrate );
