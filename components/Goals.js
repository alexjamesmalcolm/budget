import { html } from "../dependencies/lit-html.js";
import Goal from "./Goal.js";

const Goals = (goals, removeGoal) => html`
  ${goals.map(goal => Goal(goal, () => removeGoal(goal.name)))}
`;

export default Goals;
