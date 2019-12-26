import { html } from "../dependencies/lit-html.js";
import Goal from "../models/Goal.js";

const AddGoal = addGoal => html`
  <h2>Add a new Goal</h2>
  <form
    class="add-goal"
    @submit=${e => {
      e.preventDefault();
      const {
        name: { value: name },
        date: { value: date },
        currentAmount: { value: currentAmount },
        desiredAmount: { value: desiredAmount }
      } = e.target;
      if (name.length > 0 && date && desiredAmount) {
        addGoal(
          new Goal(
            name,
            new Date(),
            new Date(date),
            Number(currentAmount),
            Number(desiredAmount)
          )
        );
        e.target.reset();
      }
    }}
  >
    <div class="form control">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="name" />
    </div>
    <div class="form control">
      <label for="date">Goal date</label>
      <input
        type="date"
        id="date"
        min=${new Date().toISOString().split("T")[0]}
      />
    </div>
    <div class="form control">
      <label for="currentAmount">Current Amount</label>
      <input type="number" id="currentAmount" min="0" placeholder="$ 0.00" />
    </div>
    <div class="form control">
      <label for="desiredAmount">Goal Amount</label>
      <input type="number" id="desiredAmount" min="0" placeholder="$ 100.00" />
    </div>
    <button type="submit">Add</button>
  </form>
`;

export default AddGoal;
