import * as types from "./types";

export function selectCard(pet) {
  return {
    type: types.SELECT_CARD,
    payload: pet
  };
}

export function changeSearch(searchText) {
  return {
    type: types.CHANGE_SEARCH,
    payload: searchText

  };
}


export function getPets() {
  return {
    type: types.GET_PETS
  };
}

export function getPetsSuccess(pets) {
  return {
    type: types.SUCCESS_GET_PETS,
    payload: pets
  };
}

export function getPetsFailed() {
  return {
    type: types.FAILED_GET_PETS
  };
}
