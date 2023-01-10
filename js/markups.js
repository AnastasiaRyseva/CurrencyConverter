import state from "./state.js";
import { getFullTitle } from "./utils.js";

export const  renderResult = ({ code, amount, full }) => {
    return `<div class="result-icon">
    <img src="./images/arrow-from.svg" alt="" class="result-icon">
</div>
<div class="result-titles">
    <span class="result-titles__title">${code}</span>
    <span class="result-titles__fullname"></span>${full}</span>
</div>
<div class="result-value">
    ${amount.toFixed(2)}
</div>`
}