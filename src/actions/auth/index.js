import { authActionTypes } from '../../constants/';

export const LOGIN_SUCCESS = payload => ({
    type: authActionTypes.loginSuccess,
    payload
});