const expenseAdding = (expense) => {
  let multiplier = 0;
  switch (expense.currency) {
  case 'ARS':
    multiplier = Number(expense.exchangeRates.ARS.ask);
    return Number(expense.value) * multiplier;
  case 'AUD':
    multiplier = Number(expense.exchangeRates.AUD.ask);
    return Number(expense.value) * multiplier;
  case 'BTC':
    multiplier = Number(expense.exchangeRates.BTC.ask);
    return Number(expense.value) * multiplier;
  case 'CAD':
    multiplier = Number(expense.exchangeRates.CAD.ask);
    return Number(expense.value) * multiplier;
  case 'CHF':
    multiplier = Number(expense.exchangeRates.CHF.ask);
    return Number(expense.value) * multiplier;
  case 'CNY':
    multiplier = Number(expense.exchangeRates.CNY.ask);
    return Number(expense.value) * multiplier;
  case 'DOGE':
    multiplier = Number(expense.exchangeRates.DOGE.ask);
    return Number(expense.value) * multiplier;
  case 'ETH':
    multiplier = Number(expense.exchangeRates.ETH.ask);
    return Number(expense.value) * multiplier;
  case 'EUR':
    multiplier = Number(expense.exchangeRates.EUR.ask);
    return Number(expense.value) * multiplier;
  case 'GBP':
    multiplier = Number(expense.exchangeRates.GBP.ask);
    return Number(expense.value) * multiplier;
  case 'ILS':
    multiplier = Number(expense.exchangeRates.ILS.ask);
    return Number(expense.value) * multiplier;
  case 'JPY':
    multiplier = Number(expense.exchangeRates.JPY.ask);
    return Number(expense.value) * multiplier;
  case 'LTC':
    multiplier = Number(expense.exchangeRates.LTC.ask);
    return Number(expense.value) * multiplier;
  case 'USD':
    multiplier = Number(expense.exchangeRates.USD.ask);
    return Number(expense.value) * multiplier;
  default:
    multiplier = 0;
    return Number(expense.value) * multiplier;
  }
};

// case 'XRP':
//   multiplier = Number(expense.exchangeRates.XRP.ask);
//   return Number(expense.value) * multiplier;

export default expenseAdding;
