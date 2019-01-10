import { usersActionTypes } from '../../constants/';

export const USERS_SUCCESS = payload => ({
    type: usersActionTypes.usersSuccess,
    payload
});