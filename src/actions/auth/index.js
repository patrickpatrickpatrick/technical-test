import { usersActionTypes } from '../../constants/';

export const SUCCESS_USERS = payload => ({
    type: usersActionTypes.successUsers,
    payload
});