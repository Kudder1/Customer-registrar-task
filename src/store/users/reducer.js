import {USERS_ADD_USER, USERS_SET_USERS} from './actions';
const initialState = [];

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case USERS_ADD_USER:
            return [...state, payload]
        case USERS_SET_USERS:
            return payload
        default:
            return state
    }
}