import axios from "axios";

import {
    searchPet as searchPetAction,
    searchPetSuccess,
    searchPetFailed
} from './actions';

import { apiSearchPets } from "./api";

export function searchPets(search) {
    return dispatch => {
        dispatch(searchPetAction());
        apiSearchPets(search)
            .then(data => {
                console.log("retorno da api", data);
                if(data.data.sucess)
                    dispatch(searchPetSuccess(data.data.animals));
            })
            .catch(() => dispatch(searchPetFailed()));
    };
}