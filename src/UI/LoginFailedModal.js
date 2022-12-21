import React from "react";
import { useDispatch } from "react-redux";
import { loginFailCloseModel } from "../redux/Actions/Action";

const LoginFailedModal = (props) => {
  //dispatch
  const dispatch = useDispatch();

  //close model
  const closeModel = () => {
    dispatch(loginFailCloseModel());
  };

  //return
  return (
    <>
      <div className="modal-header">
        <h4
          className="modal-title w-100"
          id="myModalLabel"
          style={{ fontSize: "16px" }}
        >
          {props.title}
        </h4>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={closeModel}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          data-dismiss="modal"
          onClick={closeModel}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default LoginFailedModal;
