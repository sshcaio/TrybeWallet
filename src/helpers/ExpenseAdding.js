const expenseAdding = (expense, coin) => {
  return (
    Number(expense.value) * expense.exchangeRates[coin].ask
  )
};

export default expenseAdding;
