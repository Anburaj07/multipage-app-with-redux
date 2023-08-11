import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";

const rootReducer=combineReducers({authReducer,cartReducer})
export const store=legacy_createStore(rootReducer);