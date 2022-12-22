import React from "react";

function NewProductForm() {
  return (
    <>
      <div className="col-6">
        <form action="">
          <div className="md-form md-outline form-md">
            <input
              type="text"
              id="form1"
              placeholder="Product Title"
              className="form-control form-control-lg"
              style={{ fontSize: "18px", color: "grey" }}
            />
          </div>

          <div className="md-form md-outline form-md">
            <input
              type="number"
              id="form2"
              placeholder="Price"
              className="form-control form-control-lg"
              style={{ fontSize: "18px", color: "grey" }}
            />
          </div>

          <div className="md-form md-outline form-md">
            <input
              type="text"
              id="form3"
              placeholder="Paste Product Image"
              className="form-control form-control-lg"
              style={{ fontSize: "18px", color: "grey" }}
            />
          </div>

          <button className="btn btn-block btn-primary btn-md">
            Add product
          </button>
        </form>
      </div>
    </>
  );
}

export default NewProductForm;
