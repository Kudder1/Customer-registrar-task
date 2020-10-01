import { FACT_SET_FACT } from './actions';
const initialState = []

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case FACT_SET_FACT:
            return payload
        default:
            return state
    }
}