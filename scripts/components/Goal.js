import { html } from "../dependencies/lit-html.js";
import Goal from "../models/Goal.js";
import round from "../utils/round.js";

const GoalTemplate = (goal = new Goal(), removeGoal = () => {}) => {
  return html`
    <section>
      <h2>${goal.name}</h2>
      <p>Percent done: ${round(goal.percentDone)}%</p>
      <p>At a rate of $${round(goal.idealAmountPerFortnight)} every 2 weeks.</p>
      <p>
        You have ${Math.floor(goal.daysBetweenCurrentAndEnd)} days left to meet
        this goal
      </p>
      <button @click=${removeGoal}>Remove Goal</button>
    </section>
  `;
};

export default GoalTemplate;
