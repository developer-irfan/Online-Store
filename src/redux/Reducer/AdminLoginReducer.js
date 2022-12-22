import { ADMINLOGIN, LOGOUT } from "../Constant/ActionTypes";

const adminLogined = false;
const AdminLoginReducer = (state = adminLogined, action) => {
  if (action.type === ADMINLOGIN) return (state = true);
  if (action.type === LOGOUT) return (state = false);
  return state;
};

export default AdminLoginReducer;
