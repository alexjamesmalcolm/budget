import { html } from "../dependencies/lit-html.js";
import round from "../utils/round.js";

const ProgressBar = percent => html`
  <div class="progress-bar container">
    <div class="progress-bar filler" style="width: ${round(percent)}%;"></div>
  </div>
`;

export default ProgressBar;
