import {
  LOGINFAILEDMODEL,
  LOGINFALIEDMODELCLOSED,
} from "../Constant/ActionTypes";

//
const isLoginFailed = false;

const LoginFailedModalReducer = (state = isLoginFailed, action) => {
  if (action.type === LOGINFAILEDMODEL) return (state = true);
  if (action.type === LOGINFALIEDMODELCLOSED) return (state = false);
  return state;
};

export default LoginFailedModalReducer;
