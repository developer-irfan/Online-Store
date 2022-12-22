import React from "react";

function ProductDetailsSlider(props) {
  return (
    <div className="col-lg-6">
      <div
        id="carousel-thumb"
        className="carousel slide carousel-thumbnails"
        data-ride="carousel"
      >
        <div className="carousel-inner text-center text-md-left" role="listbox">
          <div className="carousel-item active">
            <img src={props.image} alt="First slide" className="img-fluid" />
          </div>
          <div className="carousel-item">
            <img src={props.image} alt="Second slide" className="img-fluid" />
          </div>
          <div className="carousel-item">
            <img src={props.image} alt="Third slide" className="img-fluid" />
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carousel-thumb"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ backgroundColor: "black" }}
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next black-text"
          href="#carousel-thumb"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ backgroundColor: "black" }}
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default ProductDetailsSlider;
