import React from "react";
import "./Signup.css";

const SignupForm = () => {
  //return here
  return (
    <div className="col-10 col-lg-6">
      <form action="">
        <div className="md-form md-outline form-md">
          <input
            type="text"
            id="form1"
            placeholder="Your Name"
            className="form-control form-control-lg"
            style={{ fontSize: "18px", color: "grey" }}
          />
        </div>

        <div className="md-form md-outline form-md">
          <input
            type="text"
            id="form2"
            placeholder="Your Email"
            className="form-control form-control-lg"
            style={{ fontSize: "18px", color: "grey" }}
          />
        </div>

        <div className="md-form md-outline form-md">
          <input
            type="text"
            id="form3"
            placeholder="Your Password"
            className="form-control form-control-lg"
            style={{ fontSize: "18px", color: "grey" }}
          />
        </div>

        <button className="btn btn-block btn-primary btn-md">Sign up</button>
      </form>
    </div>
  );
};

export default SignupForm;
