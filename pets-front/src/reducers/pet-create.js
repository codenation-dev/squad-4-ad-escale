import * as types from '../pages/PetCreate/types'

const INITIAL_STATE = {
    type: 0,
    urlImage: "",
    size: 0,
    gender: 0,
    category: 0,
    localization: "",
    description :"",
    isCreated: false
};


export default function reducer(stateStore = INITIAL_STATE, action) {
    switch (action.type) {
        case types.CHANGE_TYPE: {
            return {
                ...stateStore,
                type: action.payload
            }
        }
        case types.CHANGE_URL_IMAGE: {
            return {
                ...stateStore,
                urlImage: action.payload
            }
        }
        case types.CHANGE_SIZE: {
            return {
                ...stateStore,
                size: action.payload
            }
        }
        case types.CHANGE_GENDER: {
            return {
                ...stateStore,
                gender: action.payload
            }
        }
        case types.CHANGE_CATEGORY: {
            return {
                ...stateStore,
                category: action.payload
            }
        }
        case types.CHANGE_LOCALIZATION: {
            return {
                ...stateStore,
                localization: action.payload
            }
        }
        case types.CHANGE_DESCRIPTION: {
            return {
                ...stateStore,
                description: action.payload
            }
        }
        case types.CREATE_PET: {
            return {
                ...stateStore,
                isCreated: action.payload
            }
        }
        default:
            return stateStore;

        
    }

}

