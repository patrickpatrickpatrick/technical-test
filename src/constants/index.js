export const initialAuthState = {
    expireDate: null,
    token: null,
};

export const authActionTypes = {
    loginUser: 'LOGIN_USER',
    loginError: 'LOGIN_ERROR',
    loginSuccess: 'LOGIN_SUCCESS',
    logoutUser: 'LOGOUT_USER', 
}