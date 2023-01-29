import variables from "./variables.js";
import state from "./state.js";
import { handleChange } from "./convert.js";

const { selects, success } = variables;

const renderCodeList = () => {
    selects.forEach((select) => {
        state.codes.forEach(([code]) => {
            const elem = document.createElement('option');
            elem.value = code;
            elem.innerText = code;
            select.insertAdjacentElement('beforeend', elem);
        });
        select.addEventListener('change', handleChange);
    });
};

export const fetchCodes = async () => {
    try {
        const response = await fetch(`${state.URL}/codes`);
        const data = await response.json();

        if (data.result === success) {
            state.codes = data.supported_codes;
            renderCodeList()
        }
    } catch (err) {
        console.log(err)
    }
}

fetchCodes();