import * as types from "./types";

export function changeUsername(username) {
    return {
        type: types.CHANGE_USERNAME,
        payload: username
    };
}

export function changePassword(password) {
    return {
        type: types.CHANGE_PASSWORD,
        payload: password
    };
}

export function getPassword() {
    return {
        type: types.GET_PASSWORD
    };
}

export function getUsername() {
    return {
        type: types.GET_USERNAME
    };
}

export function login(isLogged) {
    return {
        type: types.LOGIN,
        payload: isLogged
    };
}

export function loginSuccess(isLogged) {
    return {
        type: types.LOGIN_SUCCESS,
        payload: isLogged
    };
}

export function loginFailed() {
    return {
        type: types.LOGIN_FAILED
    };
}