export const initialAuthState = {
    expireDate: null,
    token: null,
};

export const authActionTypes = {
    loginUser: 'LOGIN_USER',
    loginError: 'LOGIN_ERROR',
    loginSuccess: 'LOGIN_SUCCESS',
    logoutUser: 'LOGOUT_USER', 
};

export const usersActionTypes = {
    getUsers: 'GET_USERS',
    errorUsers: 'ERROR_USERS',
    successUsers: 'SUCCESS_USERS',
    clearUsers: 'CLEAR_USERS', 
};

export const initialUsersState = {
    data: [],
    error: null,
    loading: false,
};