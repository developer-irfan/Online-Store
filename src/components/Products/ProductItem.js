import React from "react";
import { useDispatch } from "react-redux";
// import { NavLink } from "react-router-dom";
import { addItemToCart, singleItem } from "../../redux/Actions/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function ProductItem(props) {
  //dispatch
  const dispatch = useDispatch();

  //navigate
  const navigate = useNavigate();

  //
  const addToCart = () => {
    dispatch(addItemToCart({ ...props.fullItem, amount: 1 }));
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

  //handleItemDetails
  const handleItemDetails = () => {
    dispatch(singleItem(props.fullItem));
    navigate(`/products/${props.fullItem.id}`);
  };

  //return
  return (
    <>
      <div className="col-lg-4 col-md-6 mb-4 py-4">
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
        <img src={props.img} className="img-fluid" alt="" />

        <p className="mb-1 font-weight-bold black-text">{props.title}</p>

        <p className="mb-1">
          <small className="mr-1">
            <s>$599</s>
          </small>
          <strong>{props.price}</strong>
        </p>

        <span className="badge blue darken-1 mb-2">New</span>

        <div className="amber-text fa-xs mb-1">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>

        <button
          type="button"
          onClick={addToCart}
          className="btn btn-black btn-rounded btn-sm px-3"
        >
          Add to Cart
        </button>
        <button
          type="button"
          onClick={handleItemDetails}
          className="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect"
        >
          Details
        </button>
      </div>
    </>
  );
}

export default ProductItem;
