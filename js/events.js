import { fetchCodes } from "././index.js";
import { handleInput, handleSubmit } from "./convert.js";
import variebles from "./variebles.js";

const { amountInput, form } = variebles;

fetchCodes();

amountInput.addEventListener('keyup', handleInput);
form.addEventListener('submit', handleSubmit);