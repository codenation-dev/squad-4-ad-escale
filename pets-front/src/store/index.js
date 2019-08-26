import reducer from '../pages/Login/reducer';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;