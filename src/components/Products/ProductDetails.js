import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  //id
  const { id } = useParams();
  console.log(id);

  //return statement
  return (
    <div>
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
                      <ul className="fa-ul mb-2 text-muted font-weight-light">
                        <li className="mb-2">
                          <span className="fa-li">
                            <i className="fas fa-check green-text"></i>
                          </span>
                          Built in GPS
                        </li>
                        <li className="mb-2">
                          <span className="fa-li">
                            <i className="fas fa-check green-text"></i>
                          </span>
                          Heart Rate Sensor
                        </li>
                      </ul>
                      <div className="d-flex justify-content-between ml-3">
                        <button class="btn btn-sm btn-primary btn-rounded">
                          <i
                            class="fas fa-cart-plus mr-2"
                            aria-hidden="true"
                          ></i>{" "}
                          Add to cart
                        </button>
                        <div className="text-center">
                          <h4 className="mb-0">$399</h4>
                          <small className="grey-text">
                            + $10 shipping fees
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        id="carousel-thumb"
                        className="carousel slide carousel-thumbnails"
                        data-ride="carousel"
                      >
                        <div
                          className="carousel-inner text-center text-md-left"
                          role="listbox"
                        >
                          <div className="carousel-item active">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/17.jpg"
                              alt="First slide"
                              className="img-fluid"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/18.jpg"
                              alt="Second slide"
                              className="img-fluid"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/19.jpg"
                              alt="Third slide"
                              className="img-fluid"
                            />
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
                          ></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carousel-thumb"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
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
