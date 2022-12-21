import React from "react";
import ProductItem from "./ProductItem";

const allProducts = [
  {
    id: 1,
    title: "Samsung CT-567",
    price: 399,
    img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg",
  },
  {
    id: 2,
    title: "Dell V-964i",
    price: 1199,
    img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg",
  },
  {
    id: 3,
    title: "Dell TC-67",
    price: 200,
    img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/15.jpg",
  },
  {
    id: 4,
    title: "HP headfone F4",
    price: 112,
    img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/16.jpg",
  },
  {
    id: 5,
    title: "Dell headfone",
    price: 88,
    img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/10.jpg",
  },
  {
    id: 6,
    title: "Digital V9",
    price: 499,
    img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/9.jpg",
  },
];

function ProductItems() {
  return (
    <div className="row">
      {allProducts.map((item) => {
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
}

export default ProductItems;
