import { html } from "../dependencies/lit-html.js";
import budget from "../utils/budget.js";

const Budget = (goals, remainingBalance = 0, updateBalance = () => {}) => {
  return html`
    <section>
      <label>Balance to put towards savings:</label>
      <input
        @change=${e => updateBalance(e.target.value)}
        value=${remainingBalance}
      />
      ${budget(remainingBalance, goals).map(
        ({ name, amount }) =>
          html`
            <p>Put $${amount} towards ${name}</p>
          `
      )}
    </section>
  `;
};

export default Budget;
