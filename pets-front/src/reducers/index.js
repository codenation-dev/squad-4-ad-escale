import { combineReducers } from "redux";

import login from "./login";
import register from "./register";
import petCreate from "./pet-create";
import petCard from "./pet-card";
<<<<<<< HEAD
import advancedSearch from './advanced-search';
=======
import myPets from "./my-pets";
>>>>>>> ac64d44ebba9feeaa10d7bfd578ca7631e56f15d

export default combineReducers({
  login,
  register,
  petCreate,
  pet: petCard,
<<<<<<< HEAD
  advancedSearch
=======
  myPets
>>>>>>> ac64d44ebba9feeaa10d7bfd578ca7631e56f15d
});
