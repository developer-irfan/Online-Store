import {
  ADDTOCART,
  ADMINLOGIN,
  ALLPRODUCTS,
  DELETEITEMFROMCART,
  ITEMDETAILS,
  LOGIN,
  LOGINFAILEDMODEL,
  LOGINFALIEDMODELCLOSED,
  LOGOUT,
  NEWPRODUCT,
  ORDERSUBMITTED,
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

export const adminLogin = () => {
  return {
    type: ADMINLOGIN,
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
  return {
    type: DELETEITEMFROMCART,
    id,
  };
};

export const singleItem = (item, param) => {
  return {
    type: ITEMDETAILS,
    item,
  };
};

export const allProductsItems = (products) => {
  return {
    type: ALLPRODUCTS,
    products,
  };
};

export const newProduct = (productTitle, productPrice, productImage) => {
  return {
    type: NEWPRODUCT,
    newProductItem: {
      title: productTitle,
      price: productPrice,
      img: productImage,
    },
  };
};

export const orderSubmitted = () => {
  return {
    type: ORDERSUBMITTED,
  };
};
