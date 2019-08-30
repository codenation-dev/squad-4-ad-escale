import { combineReducers } from "redux";

import login from "./login";
import register from "./register";
import petCreate from "./pet-create";
import petCard from "./pet-card";
import myPets from "./my-pets";

export default combineReducers({
  login,
  register,
  petCreate,
  pet: petCard,
  myPets
});
