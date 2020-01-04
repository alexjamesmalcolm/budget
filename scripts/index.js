import { render as r } from "./dependencies/lit-html.js";
import AddGoal from "./components/AddGoal.js";
import Goals from "./components/Goals.js";
import Budget from "./components/Budget.js";
import { getGoals, removeGoal, addGoal, updateGoal } from "./state/goals.js";
import {
  getRemainingBalance,
  updateRemainingBalance
} from "./state/remainingBalance.js";

const render = () => {
  console.log("Render", new Date().toISOString());
  const goals = getGoals();
  r(
    Budget(goals, getRemainingBalance(), updateRemainingBalance(render)),
    document.querySelector("#budget")
  );
  r(
    Goals(goals, removeGoal(render), updateGoal(render)),
    document.querySelector("#goals")
  );
  r(AddGoal(addGoal(render)), document.querySelector("#add-goal"));
};

render();
