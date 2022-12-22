import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemfromCart } from "../../redux/Actions/Action";

const Cart = () => {
  //getting cart items
  const cartItems = useSelector((state) => state.AddToCartReducer);
  //   console.log(cartItems);

  //dispatch
  const dispatch = useDispatch();

  //return
  return (
    <>
      {cartItems.items.map((item) => {
        return (
          <tr key={item.id}>
            <th scope="row">
              <img src={item.img} alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
              <h5 className="mt-3">
                <strong>{item.title}</strong>
              </h5>
            </td>
            <td></td>
            <td></td>
            <td>${item.price}</td>
            <td>
              <input
                type="number"
                // onChange={handleCartInput}
                value={item.amount}
                aria-label="Search"
                className="form-control"
                style={{ width: "100px" }}
                disabled
              />
            </td>
            <td className="font-weight-bold">
              <strong>${item.price}</strong>
            </td>
            <td>
              <button
                type="button"
                onClick={() => dispatch(deleteItemfromCart(item.id))}
                className="btn btn-sm btn-primary"
                data-toggle="tooltip"
                data-placement="top"
                title="Remove item"
              >
                X
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Cart;
