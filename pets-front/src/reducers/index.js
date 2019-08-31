import { combineReducers } from "redux";

import login from "./login";
import register from "./register";
import petCreate from "./pet-create";
import petCard from "./pet-card";
import advancedSearch from './advanced-search';

export default combineReducers({
  login,
  register,
  petCreate,
  pet: petCard,
  advancedSearch
});
