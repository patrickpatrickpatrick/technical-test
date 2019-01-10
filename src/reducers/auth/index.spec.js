import authReducer from './index';
import { initialAuthState, authActionTypes } from './../../constants';

const userCreds = {
    token: '123',
};

const actionCreator = (type, payload = {}) => ({
    type, 
    payload,
});

const currentDate = new Date();
const expireDate = new Date(currentDate.getTime() + 5*60000);

describe('auth reducer', () => {
    it('logs in the user', () => {
        const result = authReducer(initialAuthState, actionCreator(
            authActionTypes.loginSuccess,
            userCreds,
        ));
        
        expect(result.token).toEqual(userCreds.token);
        expect(result.expireDate.getMinutes() - expireDate.getMinutes()).toEqual(0);
    })
    it('logs out the user', () => {
        const loggedInAuthState = {
            ...initialAuthState,
            token: userCreds.token
        }

        expect(authReducer(loggedInAuthState, actionCreator(
            authActionTypes.logoutUser,
            userCreds,
        ))).toEqual({
            token: null,
            expireDate: null,
        })
    })    
});