import { combineReducers } from 'redux'

import login from './login'
import petCreate from './pet-create'

export default combineReducers({
  login,
  petCreate
})