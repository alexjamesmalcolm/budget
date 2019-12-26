import { render as r } from "../dependencies/lit-html.js";
import AddGoal from "../components/AddGoal.js";
import Goals from "../components/Goals.js";
import Goal from "../scripts/Goal.js";

window.Goal = Goal;

const getGoals = () => {
  const serializedGoals = localStorage.getItem("goals") || "[]";
  return JSON.parse(serializedGoals).map(serializedGoal =>
    Goal.deserialize(serializedGoal)
  );
};
const putGoals = goals => {
  localStorage.setItem(
    "goals",
    JSON.stringify(goals.map(goal => goal.serialize()))
  );
  render();
};

const addGoal = (goal = new Goal()) => {
  const goals = getGoals();
  if (!goals.some(({ name }) => goal.name === name)) {
    putGoals(goals.concat([goal]));
  }
};
const removeGoal = name => {
  const goals = getGoals();
  putGoals(goals.filter(goal => goal.name !== name));
};

const handleNewGoal = goal => {
  addGoal(goal);
};

const render = () => {
  console.log("Render", new Date().toISOString());
  r(Goals(getGoals(), removeGoal), document.querySelector("#goals"));
  r(AddGoal(handleNewGoal), document.querySelector("#add-goal"));
};

render();
