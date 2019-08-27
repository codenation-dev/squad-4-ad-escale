import {
    getUsername,
    getPassword,
    login as loginAction,
    loginSuccess,
    loginFailed
} from "./actions";
import { apiLogin } from "./api";

export function login(username, password) {
    return (dispatch) => {
        dispatch(loginAction());
        apiLogin(username, password)
            .then(data => {
                console.log(data.data[0]);
                dispatch(loginSuccess(data.data[0].isLogged));
            })
            .catch(() => dispatch(loginFailed()));
    };
}
