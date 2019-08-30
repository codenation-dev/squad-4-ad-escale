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

/*export const registerUserService = request => {
  const REGISTER_API = "http://localhost:3000/api/v1/register";

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request.user)
  };

  return fetch(REGISTER_API, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};*/
