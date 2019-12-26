const allocateResources = (
  remainingBalance = 0,
  amounts = [{ name: "", amount: 0 }]
) => {
  const totalAmount = amounts
    .map(({ amount }) => amount)
    .reduce((a, b) => a + b);
  return amounts.map(({ name, amount }) => ({
    name,
    amount: (remainingBalance * amount) / totalAmount
  }));
};

export default allocateResources;
