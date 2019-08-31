import * as types from "../pages/Register/types";

const INITIAL_STATE = {
  isLogged: false,
  username: "",
  telephone: "",
  email: "",
  password: "",
  success: false
};

export default function reducer(stateStore = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CHANGE_USERNAME: {
      return {
        ...stateStore,
        username: action.payload
      };
    }
    case types.CHANGE_TELEPHONE: {
      return {
        ...stateStore,
        telephone: action.payload
      };
    }
    case types.CHANGE_EMAIL: {
      return {
        ...stateStore,
        email: action.payload
      };
    }
    case types.REGISTER: {
      return {
        ...stateStore,
        isLogged: action.payload
      };
    }
    case types.REGISTER_SUCCESS: {
      return {
        ...stateStore,
        success: action.payload,
        tryLogin: true
      };
    }
    case types.REGISTER_FAILED: {
      return {
        ...stateStore,
        isLogged: false,
        tryLogin: true,
        message: "Falha ao realizar cadastro"
      };
    }
    default:
      return stateStore;
  }
}
