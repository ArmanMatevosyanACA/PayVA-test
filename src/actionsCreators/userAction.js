import { USER_LOGGED_IN } from '../actionTypes/userTypes';

export function userLoggedIn(value) {
    return {
        type: USER_LOGGED_IN,
        value,
    }
}