import React from "react";
import ProductItems from "./ProductItems";

function Products() {
  return (
    <div>
      <div className="container my-5 py-5">
        <section className="text-center">
          <ProductItems />
        </section>
      </div>
    </div>
  );
}

export default Products;
