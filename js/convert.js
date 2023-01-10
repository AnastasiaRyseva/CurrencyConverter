import { renderResult } from './markups.js'
import state from "./state.js";
import { getFullTitle } from "./utils.js"
import variebles from "./variebles.js";

const { success, resultFrom, resultTo, formResults } = variebles;


export const handleChange = ({ target: { value, name } }) => {
    state.pair = {
        ...state.pair,
        [name] : value,
    };
};

export const handleInput = async ( { target: { value, name } }) => {
    state[name] = Number(value);
}

const insertResults = ({ 
    base_code: baseCode,
    target_code: targetCode,
    conversion_rate: rate,
    conversion_result: result,
    time_last_update_utc: time,
}) => {
    const from = {
        code: baseCode,
        amount: state.amount,
        full: getFullTitle(state.codes, baseCode),
    }
    const to = {
        code: targetCode,
        amount: result,
        full: getFullTitle(state.codes, targetCode),
    }
    resultFrom.innerHTML = renderResult(from);
    resultTo.innerHTML = renderResult(to);

    //formResults.classList.add('show')
}

export const handleSubmit =  async (e) => {
    e.preventDefault();

    const { URL, amount, pair: { from, to } } = state;

    state.loading = true;

    if(!amount || !from || !to) return;

    try {
        const response = await fetch(`${URL}/pair/${from}/${to}/${amount}`);
        const data = await response.json();

        if(data.result === success) insertResults(data);
        state.loading = false;
    } catch(err) {
        console.log(err)
    }
}