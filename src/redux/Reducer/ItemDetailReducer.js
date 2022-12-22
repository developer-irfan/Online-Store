import { ITEMDETAILS } from "../Constant/ActionTypes";

const initialState = {};
const ItemDetailReducer = (state = initialState, action) => {
  if (action.type === ITEMDETAILS) {
    // console.log(action.item);
    return action.item;
  }
  return state;
};

export default ItemDetailReducer;
