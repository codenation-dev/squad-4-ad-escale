import * as types from './types'

const INITIAL_STATE = {
    isLogged: false,
    username: "",
    password: ""
};

export default function reducer(stateStore = INITIAL_STATE, action) {
    switch (action.type) {
        case types.CHANGE_USERNAME: {
            return {
                ...stateStore,
                username: action.payload
            }
        }
        case types.CHANGE_PASSWORD: {
            return {
                ...stateStore,
                password: action.payload
            }
        }
        case types.GET_PASSWORD: {
            return {
                ...stateStore
            }
        }
        case types.LOGIN: {
            return {
                ...stateStore,
                isLogged: action.payload
            }
        }
        case types.LOGIN_SUCCESS: {
            return {
                ...stateStore,
                isLogged: action.payload,
                tryLogin: true
            }
        }
        case types.LOGIN_FAILED: {
            return {
                ...stateStore,
                isLogged: false,
                tryLogin: true,
                message: "Falha ao realizar login"
            }
        }
        default:
            return stateStore;
    }
}
