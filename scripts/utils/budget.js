import { round, allocateResources } from "../utils.js";
import Goal from "../models/Goal.js/index.js";

const budget = (remainingBalance, goals = [new Goal()]) => {
  const behindTotal = goals
    .map(({ behindAmount }) => Math.max(0, behindAmount))
    .reduce((a, b) => a + b);
  // Two scenarios
  if (remainingBalance <= behindTotal) {
    // 1. Not enough money to catch up on what I'm behind on
    const behindAmounts = allocateResources(
      remainingBalance,
      goals
        .map(({ name, behindAmount }) => ({ name, amount: behindAmount }))
        .filter(({ amount }) => amount > 0)
    ).map(({ name, amount }) => ({ name, amount: round(amount) }));
    return behindAmounts;
  } else {
    // 2. Enough money to catch up
    const behindAmounts = allocateResources(
      behindTotal,
      goals
        .map(({ name, behindAmount }) => ({ name, amount: behindAmount }))
        .filter(({ amount }) => amount > 0)
    );
    const fortnightAmounts = allocateResources(
      remainingBalance - behindTotal,
      goals
        .map(({ name, idealAmountPerFortnight }) => ({
          name,
          amount: idealAmountPerFortnight
        }))
        .filter(({ amount }) => amount > 0)
    );
    return fortnightAmounts
      .concat(behindAmounts)
      .reduce((accumulator, currentValue) => {
        const hasCurrentGoal = accumulator.some(
          ({ name }) => name === currentValue.name
        );
        if (!hasCurrentGoal) {
          return accumulator.concat([currentValue]);
        } else {
          return accumulator.map(({ name, amount }) =>
            name === currentValue.name
              ? { name, amount: amount + currentValue.amount }
              : { name, amount }
          );
        }
      }, [])
      .map(({ name, amount }) => ({ name, amount: round(amount) }));
  }
};

export default budget;
