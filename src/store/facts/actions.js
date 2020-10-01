import { randomFactAPI } from '../../api';

export const FACT_SET_FACT = "FACT_SET_FACT"
export function setFact(payload) {
    return {
        type: FACT_SET_FACT,
        payload
    }
}

export function fetchFact() {
    return function(dispatch) {
        randomFactAPI.get().then( resp => dispatch(setFact(resp.data)) )
    }
}