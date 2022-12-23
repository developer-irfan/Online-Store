import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { newProduct } from "../../../redux/Actions/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewProductForm = () => {
  //
  const [isValid, setIsValid] = useState(false);

  //dispatch
  const dispatch = useDispatch();

  //
  const titleInput = useRef();
  const priceInput = useRef();
  const imgInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    const title = titleInput.current.value;
    const price = priceInput.current.value;
    const image = imgInput.current.value;

    if (
      title.trim("").length === 0 &&
      price.trim("").length === 0 &&
      image.trim("").length === 0
    ) {
      setIsValid(true);
      return;
    }
    //

    //
    dispatch(newProduct(title, price, image));

    toast("Product Added to Product List!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    //
    titleInput.current.value = "";
    priceInput.current.value = "";
    imgInput.current.value = "";

    console.log(title, price, image);
  };

  //return
  return (
    <>
      <div className="col-6">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <form onSubmit={handleSubmit}>
          <div className="md-form md-outline form-md">
            <input
              type="text"
              ref={titleInput}
              id="form1"
              placeholder="Product Title"
              className="form-control form-control-lg"
              style={{ fontSize: "18px", color: "grey" }}
            />
            {isValid && (
              <p className="pt-3" style={{ color: "red" }}>
                Please Enter Title
              </p>
            )}
          </div>

          <div className="md-form md-outline form-md">
            <input
              type="number"
              ref={priceInput}
              id="form2"
              placeholder="Price"
              className="form-control form-control-lg"
              style={{ fontSize: "18px", color: "grey" }}
            />
            {isValid && (
              <p className="pt-3" style={{ color: "red" }}>
                Please Enter Price
              </p>
            )}
          </div>

          <div className="md-form md-outline form-md">
            <input
              type="text"
              ref={imgInput}
              id="form3"
              placeholder="Paste Product Image"
              className="form-control form-control-lg"
              style={{ fontSize: "18px", color: "grey" }}
            />
            {isValid && (
              <p className="pt-3" style={{ color: "red" }}>
                Please Enter Image Link
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-block btn-primary btn-md">
            Add product
          </button>
        </form>
      </div>
    </>
  );
};

export default NewProductForm;
