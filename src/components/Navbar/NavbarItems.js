import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/Actions/Action";

const NavbarItems = () => {
  //dispatch
  const dispatch = useDispatch();

  //handleLogout
  const handleLogout = () => {
    dispatch(userLogout());
  };

  //
  const hasLogin = useSelector((state) => state.loginReducer);

  //has admin login
  const hasAdminLogin = useSelector((state) => state.AdminLoginReducer);

  //
  const cartResult = useSelector((state) => state.AddToCartReducer);

  //total length of carts
  const getTotalCartItemLength = cartResult.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  //return here
  return (
    <>
      <ul className="navbar-nav mr-auto">
        {!hasAdminLogin && (
          <>
            <li className="nav-item">
              <NavLink exact="true" to="/" className="nav-link pl-xl-5 pl-lg-2">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/about"
                className="nav-link pl-xl-4 pl-lg-4"
              >
                About
              </NavLink>
            </li>
          </>
        )}

        {hasLogin && (
          <li className="nav-item">
            <NavLink
              exact="true"
              to="/products"
              className="nav-link pl-xl-4 pl-lg-4"
            >
              Products
            </NavLink>
          </li>
        )}

        {hasAdminLogin && (
          <>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/available-products"
                className="nav-link pl-xl-4 pl-lg-4"
              >
                Uploaded Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/add-product"
                className="nav-link  pl-xl-4 pl-lg-4"
              >
                Add Product
              </NavLink>
            </li>
          </>
        )}

        {!hasAdminLogin && (
          <li className="nav-item">
            <NavLink
              exact="true"
              to="/contact"
              className="nav-link pl-xl-4 pl-lg-4"
            >
              Contact
            </NavLink>
          </li>
        )}
      </ul>
      <ul className="navbar-nav ml-auto nav-flex-icons">
        {!hasLogin && !hasAdminLogin && (
          <>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/create-account"
                className="nav-link  pl-xl-4 pl-lg-4"
                style={{ fontWeight: "bold" }}
              >
                Signup
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact="true"
                to="/login"
                className="nav-link  pl-xl-4 pl-lg-4"
              >
                Login
              </NavLink>
            </li>
          </>
        )}

        {hasAdminLogin && (
          <>
            <li className="nav-item" onClick={handleLogout}>
              <NavLink
                exact="true"
                to="/"
                className="nav-link  pl-xl-4 pl-lg-4"
              >
                Logout
              </NavLink>
            </li>
          </>
        )}

        {hasLogin && (
          <>
            <li className="nav-item" onClick={handleLogout}>
              <NavLink
                exact="true"
                to="/"
                className="nav-link  pl-xl-4 pl-lg-4"
              >
                Logout
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/complete-order"
                className="nav-link  pl-xl-4 pl-lg-4"
              >
                <i class="fas fa-shopping-cart ml-3"></i>{" "}
                <span
                  style={{
                    backgroundColor: "orange",
                    borderRadius: "50%",
                    paddingLeft: "6px",
                    paddingRight: "6px",
                    paddingTop: "1px",
                    paddingBottom: "1px",
                  }}
                >
                  {getTotalCartItemLength}
                </span>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default NavbarItems;
