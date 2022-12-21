import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";
import LoginFailedModalReducer from "./LoginFailedModelReducer";
import AddToCartReducer from "./AddToCartReducer";

const mainReducer = combineReducers({
  loginReducer,
  LoginFailedModalReducer,
  AddToCartReducer,
});

export default mainReducer;
