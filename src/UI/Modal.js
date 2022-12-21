import React from "react";
import LoginFailedModal from "./LoginFailedModal";
import "./Modal.css";

function Modal() {
  return (
    <div className="">
      <div
        className="modal-dialog modal-sm login_failed_model"
        role="document"
        style={{ position: "absolute", top: "35%", left: "40%", zIndex: "1" }}
      >
        <div className="backdrop"></div>
        <div className="modal-content">
          <LoginFailedModal title="Incorrect Credentials" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
