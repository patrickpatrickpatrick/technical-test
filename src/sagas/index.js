import { takeLatest, put, call, all } from 'redux-saga/effects';
import { apiRequest } from './../utils';
import { usersSuccessAction, usersErrorAction }  from './../actions/users';
import { loginSuccessAction, loginErrorAction }  from './../actions/auth';
import { authActionTypes, usersActionTypes } from './../constants';


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

function* actionWatcher() {
    yield takeLatest(usersActionTypes.getUsers, fetchUsers)
}
export default function* rootSaga() {
   yield all([
       actionWatcher(),
   ]);
}