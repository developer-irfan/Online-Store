import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adminLogin, loginFailed, userLogin } from "../../redux/Actions/Action";
import { useForm } from "react-hook-form";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  //useform
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  //navigate
  const navigate = useNavigate();

  //form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //use dispatch
  const dispatch = useDispatch();

  //

  //handle submit
  const onSubmit = (form, e) => {
    e.preventDefault();
    if (email === "irfan@gmail.com" && password === "irfan") {
      dispatch(userLogin(email, password));
      navigate("/products");
    }
    if (email === "admin@gmail.com" && password === "admin") {
      dispatch(adminLogin());
      navigate("/available-products");
    }
    dispatch(loginFailed());
    setEmail("");
    setPassword("");
  };

  //return here
  return (
    <div className="col-10 col-lg-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md-form md-outline form-md">
          <input
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{1,}$/,
            })}
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="form2"
            placeholder="Your Email"
            className="form-control form-control-lg"
            style={{ fontSize: "18px", color: "grey" }}
          />

          {errors.email && errors.email.type === "required" && (
            <p
              className="text-danger font-italic"
              style={{
                fontSize: "13px",
                paddingTop: "5px",
              }}
            >
              Email Required
            </p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p
              className="text-danger font-italic"
              style={{
                fontSize: "13px",
                paddingTop: "5px",
              }}
            >
              Invalid Email Adress
            </p>
          )}
        </div>

        <div className="md-form md-outline form-md">
          <input
            {...register("password", {
              required: true,
              minLength: 4,
              maxLength: 8,
              className: "is-invalid",
            })}
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="form3"
            placeholder="Your Password"
            className="form-control form-control-lg"
            style={{ fontSize: "18px", color: "grey" }}
          />
          {errors.password && errors.password.type === "required" && (
            <p
              className="text-danger"
              style={{
                fontSize: "13px",
                paddingTop: "5px",
              }}
            >
              Password is Required
            </p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p
              className="text-danger"
              style={{
                fontSize: "13px",
                paddingTop: "5px",
              }}
            >
              Atleast 4 characters
            </p>
          )}
          {errors.password && errors.password.type === "maxLength" && (
            <p
              className="text-danger"
              style={{
                fontSize: "13px",
                paddingTop: "5px",
              }}
            >
              No more than 8 characters
            </p>
          )}
        </div>

        <button type="submit" className="btn btn-block btn-primary btn-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
