import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

//
const ProductItems = () => {
  const products = useSelector((state) => state.AllProductsReducer);

  //return
  return (
    <div className="row">
      {products.map((item) => {
        return (
          <ProductItem
            key={item.id}
            fullItem={item}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
          />
        );
      })}
    </div>
  );
};

export default ProductItems;
