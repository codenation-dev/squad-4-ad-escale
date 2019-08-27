import * as types from "./types";

export function changeUsername(username) {
  return {
    type: types.CHANGE_USERNAME,
    payload: username
  };
}

export function changeTelephone(telephone) {
  return {
    type: types.CHANGE_TELEPHONE,
    payload: telephone
  };
}

export function changeEmail(email) {
  return {
    type: types.CHANGE_EMAIL,
    payload: email
  };
}

export function changePassword(password) {
  return {
    type: types.CHANGE_PASSWORD,
    payload: password
  };
}

export function register(isLogged) {
  return {
    type: types.REGISTER,
    payload: isLogged
  };
}

export function registerSuccess(isLogged) {
  return {
    type: types.REGISTER_SUCCESS,
    payload: isLogged
  };
}
export function registerFailed() {
  return {
    type: types.REGISTER_FAILED
  };
}
