import { initialAuthState, authActionTypes } from './../../constants';

export default (state = initialAuthState, { type, payload }) => {
    switch (type) {
        case authActionTypes.loginUser:
            const currentDate = new Date();
            return {
                ...state,
                token: payload.token,
                expireDate: new Date(currentDate.getTime() + 5*60000),
            }
        case authActionTypes.logoutUser:
            return {
                ...state,
                token: null,
                expireDate: null,
            }
        default:
            return state
    }
}