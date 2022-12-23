import React from "react";
import { useSelector } from "react-redux";
import SingleProductItem from "./SingleProductItem";

function UploadedProducts() {
  const products = useSelector((state) => state.AllProductsReducer);

  //return
  return (
    <div>
      <div className="container my-5 ">
        <section>
          <div className="mb-4">
            <div className="row justify-content-center gx-5">
              {products.map((product) => {
                return (
                  <SingleProductItem
                    key={product.id}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UploadedProducts;
