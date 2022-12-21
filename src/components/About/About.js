import React from "react";
import { NavLink } from "react-router-dom";
import AboutPic from "../../assets/about.png";
import AboutSocailLinks from "./AboutSocailLinks";

function About() {
  return (
    <div>
      <div className="container my-5 py-5">
        <section className="px-md-5 mx-md-5 text-center dark-grey-text">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="font-weight-bold">Order with Discounts</h3>

              <p className="text-muted">
                “Good customer service begins at the top. If your senior people
                don’t get it, even the strongest links further down the line can
                become compromised.”
              </p>

              <NavLink
                to="/products"
                className="btn btn-purple btn-md ml-0"
                role="button"
              >
                Order now
              </NavLink>

              <hr className="my-5" />

              <AboutSocailLinks />
            </div>

            <div className="col-md-5 mb-4 mb-md-0">
              <img src={AboutPic} className="img-fluid" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
