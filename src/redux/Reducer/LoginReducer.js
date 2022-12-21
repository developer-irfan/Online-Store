import { LOGIN, LOGOUT } from "../Constant/ActionTypes";

const userLogined = false;

const loginReducer = (state = userLogined, action) => {
  if (action.type === LOGIN) return (state = true);
  if (action.type === LOGOUT) return (state = false);
  return state;
};
export default loginReducer;
