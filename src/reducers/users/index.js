import { initialUsersState, usersActionTypes } from './../../constants';

export default (state = initialUsersState, { type, payload }) => {
    switch (type) {
        case usersActionTypes.getUsers:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case usersActionTypes.successUsers:
            return {
                ...state,
                data: payload.data,
                loading: false,
                error: null,
            }
        case usersActionTypes.errorUsers:
            return {
                ...state,
                loading: false,
                error: payload.error,
            }            
        case usersActionTypes.clearUsers:
            return {
                ...state,
                data: [],
                error: null,
            }
        default:
            return state
    }
}