import { html } from "../dependencies/lit-html.js";
import round from "../utils/round.js";

const ProgressBar = (percent, leftLabel, rightLabel) => html`
  <div class="progress-bar container">
    <div class="progress-bar filler" style="width: ${round(percent)}%;">
      <p class="progress-bar label left-label">${leftLabel}</p>
    </div>
    <p class="progress-bar label right-label">${rightLabel}</p>
  </div>
`;

export default ProgressBar;
