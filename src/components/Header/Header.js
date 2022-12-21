import React from "react";
import HeaderPic from "../../assets/header.png";

const Header = (props) => {
  //return
  return (
    <div>
      <header>
        <div className="view " style={{ height: "100vh" }}>
          <div className="mask">
            <div className="container mt-5">
              <div className="row align-items-center h-100 pl-lg-5 pr-lg-5">
                <div className="col-md-6">
                  <h1 className="mb-2">
                    Order
                    <span className="text-warning">
                      <strong> Best quality</strong>
                    </span>
                    <br />
                    <span className="cyan-text">
                      <strong> Assets</strong>
                    </span>{" "}
                    near you.
                  </h1>
                  <p className="mb-4 dark-grey-text">
                    “Customers don’t expect you to be perfect. They do expect
                    you to fix things when they go wrong.”
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-rounded btn-md ml-md-0"
                    onClick={props.navigateToProducts}
                  >
                    Order now
                  </button>
                </div>

                <div className="col-md-6">
                  <img src={HeaderPic} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
