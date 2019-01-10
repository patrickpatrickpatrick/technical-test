import { initialUsersState, usersActionTypes } from './../../constants';

export default (state = initialUsersState, { type, payload }) => {
    switch (type) {
        case usersActionTypes.usersSuccess:
            return {
                ...state,
                token: payload.token,
            }
        case usersActionTypes.logoutUser:
            return {
                ...state,
                token: null,
                expireDate: null,
            }
        default:
            return state
    }
}