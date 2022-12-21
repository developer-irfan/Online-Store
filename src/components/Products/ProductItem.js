import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItemToCart } from "../../redux/Actions/Action";

function ProductItem(props) {
  //dispatch
  const dispatch = useDispatch();

  //
  const addToCart = () => {
    dispatch(addItemToCart({ ...props.fullItem, amount: 1 }));
  };

  //return
  return (
    <>
      <div className="col-lg-4 col-md-6 mb-4 py-4">
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
        <NavLink
          to={`/products/${props.id}`}
          type="button"
          className="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect"
        >
          Details
        </NavLink>
      </div>
    </>
  );
}

export default ProductItem;
