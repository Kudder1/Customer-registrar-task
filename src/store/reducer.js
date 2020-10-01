import { combineReducers } from 'redux';
import users from './users/reducer';
import facts from './facts/reducer'

export default combineReducers ({
    users,
    facts
})