import { ADDTOCART, DELETEITEMFROMCART } from "../Constant/ActionTypes";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const AddToCartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADDTOCART:
      const updateTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      // console.log(existingCartItemIndex);

      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      return {
        items: updatedItems,
        totalAmount: updateTotalAmount,
      };

    case DELETEITEMFROMCART:
      const findExistingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[findExistingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let getUpdatedItems;
      if (existingItem.amount === 1) {
        getUpdatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        getUpdatedItems = [...state.items];
        getUpdatedItems[findExistingCartItemIndex] = updatedItem;
      }

      return {
        items: getUpdatedItems,
        totalAmount: updatedTotalAmount,
      };

    default:
      return state;
  }
};
export default AddToCartReducer;
