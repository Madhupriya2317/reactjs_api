import { combineReducers } from "redux";
import counterReducer from "./count/counterReducer";
import cartReducer from "./cartid/cartReducer";

export default combineReducers({
    counterReducer,
    cartReducer
})