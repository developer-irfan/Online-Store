import React from "react";

//for navigation
import { NavLink } from "react-router-dom";
import NavbarItems from "./NavbarItems";

//main navbar
const Navbar = () => {
  //
  // const [isLogin,setIsLogin] = useState(false);

  //return statemtent
  return (
    <div>
      <div className="">
        <nav
          className="mb-0 navbar navbar-expand-lg navbar-dark primary-color  blue-text pt-2 pb-2"
          id="navmain"
          style={{ color: "black" }}
        >
          <div className="container">
            <NavLink to="/" className="navbar-brand" href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/962/962649.png"
                height="30"
                alt="mdb logo"
                style={{ width: "45px", height: "45px" }}
              />
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent-333"
              aria-controls="navbarSupportedContent-333"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent-333"
            >
              <NavbarItems />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
