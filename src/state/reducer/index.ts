import { combineReducers } from "redux";
import authReducer from "./auth";

const store = combineReducers({
  auth: authReducer,
});

export default store;
