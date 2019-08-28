import * as types from "./types";

export function selectCard(pet) {
    return {
        type: types.SELECT_CARD,
        payload: pet
    };
}