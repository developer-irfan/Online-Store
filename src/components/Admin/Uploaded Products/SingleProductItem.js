import React from "react";

function SingleProductItem(props) {
  return (
    <>
      <div className="card col-4 m-1">
        <div className="row align-items-center">
          <div className="col-6 px-0 py-2">
            <img src={props.img} alt="product-img" className="img-fluid" />
          </div>
          <div className="col-6">
            <strong>{props.title}</strong>
            <h6 className="h6-responsive font-weight-bold dark-grey-text">
              <strong>${props.price}</strong>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProductItem;
