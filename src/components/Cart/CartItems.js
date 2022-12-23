import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const CartItems = () => {
  //dispatch
  const totalPrice = useSelector((state) => state.AddToCartReducer);

  const cartHasItems = totalPrice.items.length > 0;

  //return
  return (
    <div>
      {cartHasItems && (
        <div className="container my-5 py-3  rounded">
          <section className="dark-grey-text">
            <div className="table-responsive">
              <table className="table product-table mb-0">
                <thead className="mdb-color lighten-5">
                  <tr>
                    <th></th>
                    <th className="font-weight-bold">
                      <strong>Product</strong>
                    </th>
                    <th className="font-weight-bold">
                      <strong></strong>
                    </th>
                    <th></th>
                    <th className="font-weight-bold">
                      <strong>Price</strong>
                    </th>
                    <th className="font-weight-bold">
                      <strong>QTY</strong>
                    </th>
                    <th className="font-weight-bold">
                      <strong>Amount</strong>
                    </th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  <Cart />

                  <tr>
                    <td colspan="3"></td>
                    <td>
                      <h4 className="mt-2">
                        <strong>Total</strong>
                      </h4>
                    </td>
                    <td className="text-right">
                      <h4 className="mt-2">
                        <strong>${totalPrice.totalAmount}</strong>
                      </h4>
                    </td>
                    <td colspan="3" className="text-right">
                      <button
                        type="button"
                        className="btn btn-md btn-primary btn-rounded"
                      >
                        Submit Order
                        <i className="fas fa-angle-right right"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}

      {!cartHasItems && (
        <div style={{ height: "80.8vh" }}>
          <h5 className="text-center" style={{ paddingTop: "200px" }}>
            Cart is empty 📃. Please Order something!!
          </h5>
        </div>
      )}
    </div>
  );
};

export default CartItems;
