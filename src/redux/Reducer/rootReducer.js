import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";
import LoginFailedModalReducer from "./LoginFailedModelReducer";
import AddToCartReducer from "./AddToCartReducer";
import ItemDetailReducer from "./ItemDetailReducer";
import AdminLoginReducer from "./AdminLoginReducer";

const mainReducer = combineReducers({
  loginReducer,
  LoginFailedModalReducer,
  AddToCartReducer,
  ItemDetailReducer,
  AdminLoginReducer,
});

export default mainReducer;
