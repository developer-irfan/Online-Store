import React from "react";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  //
  const navigate = useNavigate();

  const toProduct = () => {
    navigate("/products");
  };

  return <Header navigateToProducts={toProduct} />;
};

export default HomePage;
