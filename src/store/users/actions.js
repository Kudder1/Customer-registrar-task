import { userAPI } from '../../api';

export const USERS_ADD_USER = "USERS_ADD_USER";
export function addUser (user) {
    return function(dispatch) {
        userAPI.post('users', user).then((resp) =>
            dispatch({
                type: USERS_ADD_USER,
                payload: resp.data
            })
        )
    }
}

export const USERS_SET_USERS = "USERS_SET_USERS";
export function setUsers(payload) {
    return {
        type: USERS_SET_USERS,
        payload
    }
}

export function fetchUsers() {
    return function(dispatch) {
        userAPI.get('users').then(resp => dispatch( setUsers(resp.data)) )
    }
}