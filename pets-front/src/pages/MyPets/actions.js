import * as types from "./types";

export function getMyPets() {
  return {
    type: types.GET_MY_PETS
  };
}

export function selectCard(myPets) {
  return {
    type: types.SELECT_CARD,
    payload: myPets
  };
}

export function getMyPetsSuccess(myPets) {
  return {
    type: types.SUCCESS_GET_MY_PETS,
    payload: myPets
  };
}

export function getMyPetsFailed() {
  return {
    type: types.FAILED_GET_MY_PETS
  };
}
