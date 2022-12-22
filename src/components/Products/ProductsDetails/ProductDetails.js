import React from "react";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../redux/Actions/Action";
import ProductDetailsSlider from "./ProductDetailsSlider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//product details
const ProductDetails = () => {
  //dispatch
  const dispatch = useDispatch();

  //
  const itemDetails = useSelector((state) => state.ItemDetailReducer);

  //add to cart
  const addToCart = () => {
    dispatch(addItemToCart({ ...itemDetails, amount: 1 }));
    toast("🛒 Item Added, Checkout Cart", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  //return statement
  return (
    <div className="product-details">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container mt-5">
        <section className="mb-2">
          <h3 className="text-center font-weight-bold mb-2">Product Details</h3>
          <div className="row">
            <div className="col-md-12">
              <div>
                <div className="card-body">
                  <div className="row h-100 d-flex align-items-center">
                    <div className="col-lg-6">
                      <p className="text-muted font-weight-light ml-3 mb-2">
                        Products with quality and discount
                      </p>
                      <h4 className="text-muted font-weight-light ml-3 mb-2">
                        {itemDetails.title}
                      </h4>
                      <ul className="fa-ul mb-2 text-muted font-weight-light">
                        <li className="mb-2">
                          <span className="fa-li">
                            <i className="fas fa-check green-text"></i>
                          </span>
                          Discount involved
                        </li>
                      </ul>
                      <div className="d-flex justify-content-between ml-3">
                        <button
                          class="btn btn-sm btn-primary btn-rounded"
                          onClick={addToCart}
                        >
                          <i
                            class="fas fa-cart-plus mr-2"
                            aria-hidden="true"
                          ></i>{" "}
                          Add to cart
                        </button>
                        <div className="text-center">
                          <h4 className="mb-0">${itemDetails.price}</h4>
                        </div>
                      </div>
                    </div>
                    <ProductDetailsSlider image={itemDetails.img} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
