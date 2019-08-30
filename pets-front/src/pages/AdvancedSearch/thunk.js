import axios from "axios";

import {
    searchPet as searchPetAction,
    searchPetSuccess,
    searchPetFailed
} from './actions';

import { apiSearchPets } from "./api";

export function searchPets() {
    return dispatch => {
        dispatch(searchPet());
        apiPets()
            .then(data => {
                console.log("data", data);
                dispatch(getPetsSuccess(data.data));
            })
            .catch(() => dispatch(getPetsFailed()));
    };
}