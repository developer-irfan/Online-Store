import React from "react";
import ContactForm from "./ContactForm";
const Contact = () => {
  //return here
  return (
    <>
      <div className="contact_div">
        <div className="view py-3">
          <section className="text-center px-md-5 mx-md-5 dark-grey-text">
            <h3 className="font-weight-bold mb-4  pt-3">Contact Us</h3>

            <p className="text-center w-responsive mx-auto mb-3 ">
              Send your subject and query or any other related stuffs to us. We
              can contact as soon as possible.
            </p>

            <div className="container row">
              <div className="col-md-9 mb-md-0 mb-5">
                <ContactForm />
              </div>

              <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x "></i>
                    <p className=" pt-2">Ecommerce, Pakistan</p>
                  </li>
                  <li>
                    <i className="fas fa-phone fa-2x mt-4 "></i>
                    <p className=" p-2">+ 92 342 2022174</p>
                  </li>
                  <li>
                    <i className="fas fa-envelope fa-2x mt-4"></i>
                    <p className="mb-0 pt-2">developer.m.irfan@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
