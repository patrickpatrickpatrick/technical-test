import authReducer from './index';
import { initialAuthState, authActionTypes } from './../../constants';

const userCredsGenerator = date => ({
    token: '123',
    date,
});

const actionCreator = (type, payload = {}) => ({
    type, 
    payload,
});

const currentDate = new Date();
const expireDate = new Date(currentDate.getTime() + 5*60000);

describe('auth reducer', () => {
    it('logs in the user', () => {
        const result = authReducer(initialAuthState, actionCreator(
            authActionTypes.loginUser,
            userCredsGenerator(currentDate)
        ));
        expect(result.token).toEqual('123');
        expect(result.expireDate.getMinutes() - expireDate.getMinutes()).toEqual(0);
    })
    it('logs out the user', () => {
        expect(authReducer(initialAuthState, actionCreator(
            authActionTypes.logoutUser,
            userCredsGenerator(currentDate)
        ))).toEqual({
            token: null,
            expireDate: null,
        })
    })    
});