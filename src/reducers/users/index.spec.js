import usersReducer from './index';
import { initialUsersState, usersActionTypes } from './../../constants';

const data = [
    {
        firstName: 'aaa',
        surName: 'bbb',
    }        
];

const error = 'Error';

const actionCreator = (type, payload = {}) => ({
    type, 
    payload,
});

describe('users reducer', () => {
    it('sets loading to true when loading', () => {
        expect(usersReducer(
            initialUsersState,
            actionCreator(usersActionTypes.getUsers),
        )).toEqual({
            ...initialUsersState,
            loading: true,
        })
    });
    it('successfully loads data', () => {
        expect(usersReducer(
            initialUsersState,
            actionCreator(
                usersActionTypes.successUsers,
                {
                    data
                },
            ),
        )).toEqual({
            ...initialUsersState,
            data,
            loading: false,
        })
    });
    it('returns error if fail to load data', () => {
        expect(usersReducer(
            initialUsersState,
            actionCreator(
                usersActionTypes.errorUsers,
                {
                    error,
                },
            ),
        )).toEqual({
            ...initialUsersState,
            error,
            loading: false,
        })
    });
    it('returns error if fail to load data', () => {
        expect(usersReducer(
            initialUsersState,
            actionCreator(
                usersActionTypes.clearUsers,
            ),
        )).toEqual({
            ...initialUsersState,
            data: [],
        })
    });
})