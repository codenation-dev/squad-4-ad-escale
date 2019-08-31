import * as types from "./types";

export function changeCategory(category) {
    return {
        type: types.CHANGE_CATEGORY,
        payload: category
    };
}

export function changeType(type) {
    return {
        type: types.CHANGE_TYPE,
        payload: type
    };
}

export function changeGender(gender) {
    return {
        type: types.CHANGE_GENDER,
        payload: gender
    };
}

export function changeSize(size) {
    return {
        type: types.CHANGE_SIZE,
        payload: size
    };
}

export function changeLocalization(localization) {
    return {
        type: types.CHANGE_LOCALIZATION,
        payload: localization
    };
}

export function changeStartDate(date) {
    return {
        type: types.CHANGE_START_DATE,
        payload: date
    };
}

export function changeEndDate(date) {
    return {
        type: types.CHANGE_END_DATE,
        payload: date
    };
}

export function searchPet(pet) {
    return {
        type: types.SEARCH_PET,
        payload: pet
    };
}

export function searchPetSuccess(pets) {
    return {
        type: types.SEARCH_PET_SUCCESS,
        payload: pets
    };
}

export function searchPetFailed() {
    return {
        type: types.SEARCH_PET_FAILED
    };
}

