import {combineReducers} from "redux";
import saveLater from './saveLater';
import userReducer from './userReducer';

export default combineReducers({
    saveLater,
    userReducer,
})

