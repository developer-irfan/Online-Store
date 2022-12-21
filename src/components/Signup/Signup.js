import React from "react";
import SignupForm from "./SignupForm";

function Signup() {
  return (
    <div className="pb-1">
      <div className="container my-5 pb-5">
        <section>
          <h3 className="font-weight-normal text-center dark-grey-text">
            <strong>Create Account</strong>
          </h3>
          <hr className="w-header my-3" />
          <p className="lead text-center text-muted pt-2 mb-1">
            Create account to order your favourites!
          </p>

          <div className="row d-flex justify-content-center">
            <SignupForm />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Signup;
