import { html } from "../dependencies/lit-html.js";
import Goal from "../models/Goal.js";
import round from "../utils/round.js";
import ProgressBar from "./ProgressBar.js";

const GoalTemplate = (
  goal = new Goal(),
  removeGoal = () => {},
  updateGoal = (updatedGoal = new Goal()) => {}
) => {
  return html`
    <section>
      <h2>${goal.name}</h2>
      <form
        @submit=${e => {
          e.preventDefault();
          const {
            currentAmount: { value: currentAmount }
          } = e.target;
          goal.currentAmount = currentAmount;
          updateGoal(goal);
        }}
      >
        <label for="currentAmount">Current Amount</label>
        <span>$</span
        ><input name="currentAmount" value=${goal.currentAmount} /><button
          type="submit"
        >
          Update
        </button>
      </form>
      <div class="progress-bar-grid">
        <p>${goal.startDate.toLocaleDateString()}</p>
        ${ProgressBar(
          goal.percentDone,
          `$${goal.currentAmount}`,
          `${round(goal.percentDone)}%`
        )}
        <p>$${goal.desiredAmount}</p>
        <p>${goal.endDate.toLocaleDateString()}</p>
      </div>
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
