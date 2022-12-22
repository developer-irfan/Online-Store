import React from "react";
import ProductLoader from "./ProductLoader";

function Loader() {
  return (
    <div className="row">
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
    </div>
  );
}

export default Loader;
