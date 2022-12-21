import { legacy_createStore } from "redux";
import mainReducer from "./Reducer/rootReducer";

//store creation
const store = legacy_createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
