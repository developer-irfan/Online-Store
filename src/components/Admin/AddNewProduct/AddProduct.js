import React from "react";
import NewProductForm from "./NewProductForm";

function AddProduct() {
  return (
    <div className="pb-1">
      <div className="container my-5 pb-5">
        <section>
          <h3 className="font-weight-normal text-center dark-grey-text">
            <strong>Add New Product</strong>
          </h3>
          <hr className="w-header my-3" />
          <p className="lead text-center text-muted pt-2 mb-1">
            Enter product title, price & img to create product
          </p>

          <div className="row d-flex justify-content-center">
            <NewProductForm />
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddProduct;
