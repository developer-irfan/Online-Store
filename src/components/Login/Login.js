import React from "react";
import Modal from "../../UI/Modal";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

function Login() {
  //
  const isUserLoginFailed = useSelector(
    (state) => state.LoginFailedModalReducer
  );

  return (
    <div className="pb-1" style={{ height: "73.2vh" }}>
      <div className="container my-5 pb-5">
        <section>
          <h3 className="font-weight-normal text-center dark-grey-text">
            <strong>Login Here🔑</strong>
          </h3>
          <hr className="w-header my-3" />
          <p className="lead text-center text-muted pt-2 mb-1">
            Login to your account here!
          </p>
          {isUserLoginFailed && <Modal />}

          <div className="row d-flex justify-content-center">
            <LoginForm />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
