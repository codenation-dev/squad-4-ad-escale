import axios from "axios";
import {
  getPets as actionGetPets,
  selectCard,
  getPetsFailed,
  getPetsSuccess
} from "./actions";
import { apiPets } from "./api";

export function getPets() {
  console.log("chegou aqui");
  return dispatch => {
    dispatch(actionGetPets());
    apiPets()
      .then(data => {
        console.log("data", data);
        dispatch(getPetsSuccess(data.data));
      })
      .catch(() => dispatch(getPetsFailed()));
  };
}
