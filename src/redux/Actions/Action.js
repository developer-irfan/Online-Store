import {
  ADDTOCART,
  DELETEITEMFROMCART,
  LOGIN,
  LOGINFAILEDMODEL,
  LOGINFALIEDMODELCLOSED,
  LOGOUT,
} from "../Constant/ActionTypes";

//actions
export const userLogin = (email, password) => {
  return {
    type: LOGIN,
    payload: {
      userEmail: email,
      userPassword: password,
    },
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};

export const loginFailed = () => {
  return {
    type: LOGINFAILEDMODEL,
  };
};

export const loginFailCloseModel = () => {
  return {
    type: LOGINFALIEDMODELCLOSED,
  };
};

export const addItemToCart = (data) => {
  return {
    type: ADDTOCART,
    payload: data,
  };
};

export const deleteItemfromCart = (id) => {
  console.log(id);
  return {
    type: DELETEITEMFROMCART,
    id,
  };
};