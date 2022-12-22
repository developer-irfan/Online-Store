import React, { useState } from "react";
import ProductItems from "./ProductItems";
import Loader from "../Loader/Loader";

function Products() {
  //loader useState displayed for one second, 1000 ms = 1 second
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  //return
  return (
    <div>
      <div className="container my-5 py-5">
        <section className="text-center">
          {isLoading ? (
            <div>
              <Loader />
              <Loader />
              <Loader />
            </div>
          ) : (
            <ProductItems />
          )}
        </section>
      </div>
    </div>
  );
}

export default Products;
