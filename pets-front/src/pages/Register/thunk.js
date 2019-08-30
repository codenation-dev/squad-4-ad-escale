import {
  register as registerAction,
  registerSuccess,
  registerFailed
} from "./actions";
import { apiRegister } from "./api";

export function register(parameters) {
  return dispatch => {
    dispatch(registerAction());
    apiRegister(parameters)
      .then(data => {
        console.log(data.data[0]);
        dispatch(registerSuccess(data.data));
      })
      .catch(() => dispatch(registerFailed()));
  };
}
