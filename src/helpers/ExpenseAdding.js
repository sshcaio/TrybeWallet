const expenseAdding = (expense, coin) => (
  Number(expense.value) * expense.exchangeRates[coin].ask
);

export default expenseAdding;
