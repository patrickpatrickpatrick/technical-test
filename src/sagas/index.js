import { takeLatest, put, call } from 'redux-saga/effects';
import { apiRequest } from './../utils';
import { usersSuccessAction, usersErrorAction }  from './../actions/users';
import { loginSuccessAction, loginErrorAction }  from './../actions/auth';


const url = `https://reqres.in/api/`

function* fetchUsers() {
    const apiRequestOutcome = yield call(
        apiRequest,
        url,
        `users`,
        {},
        usersSuccessAction,
        usersErrorAction
    )

    yield put(apiRequestOutcome);
}