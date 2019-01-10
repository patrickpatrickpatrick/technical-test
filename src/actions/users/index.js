import { usersActionTypes } from '../../constants/';

export const usersSuccessAction = payload => ({
    type: usersActionTypes.successUsers,
    payload
});

export const usersErrorAction = payload => ({
    type: usersActionTypes.errorUsers,
    payload
});