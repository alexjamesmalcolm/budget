import Goal from "../models/Goal.js";

const getGoals = () => {
  const serializedGoals = localStorage.getItem("goals") || "[]";
  return JSON.parse(serializedGoals).map(serializedGoal =>
    Goal.deserialize(serializedGoal)
  );
};
const putGoals = callback => goals => {
  localStorage.setItem(
    "goals",
    JSON.stringify(goals.map(goal => goal.serialize()))
  );
  callback();
};

const addGoal = callback => (goal = new Goal()) => {
  const goals = getGoals();
  if (!goals.some(({ name }) => goal.name === name)) {
    putGoals(callback)(goals.concat([goal]));
  }
};
const removeGoal = callback => name => {
  const goals = getGoals();
  putGoals(callback)(goals.filter(goal => goal.name !== name));
};

export { getGoals, addGoal, removeGoal };
