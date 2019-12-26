import { html } from "../dependencies/lit-html.js";
import budget from "../utils/budget.js";

const Budget = (goals, remainingBalance = 0, updateBalance = () => {}) => {
  console.log(budget(remainingBalance, goals));
  return html`
    <section>
      <label>Balance to put towards savings:</label>
      <input
        @change=${e => updateBalance(e.target.value)}
        value=${remainingBalance}
      />
    </section>
  `;
};

export default Budget;
