import React from "react";
import "./Footer.css";
//
const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <div>
        <section className="px-md-5  py-1  text-center white-text elegant-color z-depth-1 footer">
          <h3 className="pt-2 pb-2" style={{ fontSize: "16px" }}>
            Copyright &copy; <i className="fas fa-heart red-text mx-1"></i> by
            Storest
          </h3>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
