import * as types from "../pages/AdvancedSearch/types";

const INITIAL_STATE = {
    category: 0,
    type: 0,
    gender: 0,
    size: 0,
    localization: "",
    startDate: "",
    endDate: ""
};

export default function reducer(stateStore = INITIAL_STATE, action) {
    switch (action.type) {
        case types.CHANGE_CATEGORY: {
            return {
                ...stateStore,
                category: action.payload
            }
        }
        case types.CHANGE_TYPE: {
            return {
                ...stateStore,
                type: action.payload
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
        case types.CHANGE_LOCALIZATION: {
            return {
                ...stateStore,
                localization: action.payload
            }
        }
        case types.CHANGE_START_DATE: {
            return {
                ...stateStore,
                startDate: action.payload
            }
        }
        case types.CHANGE_END_DATE: {
            return {
                ...stateStore,
                endDate: action.payload
            }
        }
        case types.SEARCH_PET: {
            return {
                ...stateStore,
                isSearched: action.payload
            }
        }
        default:
            return stateStore;
    }
}