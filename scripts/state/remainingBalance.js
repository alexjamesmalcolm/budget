const key = "remainingBalance";

const getRemainingBalance = () => Number(sessionStorage.getItem(key));

const updateRemainingBalance = callback => changedBalanced => {
  sessionStorage.setItem(key, changedBalanced);
  callback();
};

export { getRemainingBalance, updateRemainingBalance };
