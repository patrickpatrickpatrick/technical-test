import { authActionTypes } from '../../constants/';

export const loginSuccessAction = payload => ({
    type: authActionTypes.loginSuccess,
    payload
});

export const loginErrorAction = payload => ({
    type: authActionTypes.loginError,
    payload
});