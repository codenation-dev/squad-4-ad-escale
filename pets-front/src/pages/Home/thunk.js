import axios from "axios";
import {
  getPets as actionGetPets,
  selectCard,
  getPetsFailed,
  getPetsSuccess
} from "./actions";
import { apiPets } from "./api";

export function getPets() {
  return dispatch => {
    dispatch(actionGetPets());
    axios({
      url: "https://petcodes.herokuapp.com/graphql",
      method: "post",
      data: {
        query: `
          query GetPet {
              animals {
                  id
                  species
                  name
                  gender
                  size
                  insertDate
                  imageURL
                  detail
                  category
                  city
                }
            }
          `
      }
    })
      .then(result => {
        console.log("res", result.data.data.animals);
        dispatch(getPetsSuccess(result.data.data.animals));
      })
      .catch(() => dispatch(getPetsFailed()));
  };
}
