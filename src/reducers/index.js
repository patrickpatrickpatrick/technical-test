import authReducer from './auth';
import usersReducer from './users';
import { combineReducers } from 'redux';

export default combineReducers({
    authReducer,
    usersReducer
});