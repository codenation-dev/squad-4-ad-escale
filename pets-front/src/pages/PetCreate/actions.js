import * as types from "./types";

export function changeType(type) {
    return {
        type: types.CHANGE_TYPE,
        payload: type
    };
}

export function changeUrlImage(url_image) {
    return {
        type: types.CHANGE_URL_IMAGE,
        payload: url_image
    };
}

export function changeSize(size) {
    return {
        type: types.CHANGE_SIZE,
        payload: size
    };
}

export function changeGender(gender) {
    return {
        type: types.CHANGE_GENDER,
        payload: gender
    };
}

export function changeCategory(category) {
    return {
        type: types.CHANGE_CATEGORY,
        payload: category
    };
}

export function changeLocalization(localization) {
    return {
        type: types.CHANGE_LOCALIZATION,
        payload: localization
    };
}

export function changeDescription(description) {
    return {
        type: types.CHANGE_DESCRIPTION,
        payload: description
    };
}

export function creatPet(pet) {
    return {
        type: types.CREATE_PET,
        payload: pet
    };
}