import { USER_LOGGED_IN } from '../actionTypes/userTypes';

const initialStore = {
    loggedIn: null,
}
export default function userReducer(state = initialStore, payload) {
    const { type, value } = payload;
    switch (type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                loggedIn: value,
            }
        default:
            return state;
    }
}