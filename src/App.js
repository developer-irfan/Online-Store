import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ProductPage from "./Pages/ProductPage";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

//
import { useSelector } from "react-redux";
import ProductDetails from "./components/Products/ProductsDetails/ProductDetails";
import CartItems from "./components/Cart/CartItems";
import UploadedProducts from "./components/Admin/Uploaded Products/UploadedProducts";
import AddProduct from "./components/Admin/AddNewProduct/AddProduct";

const App = () => {
  //state
  const hasLogin = useSelector((state) => state.loginReducer);

  //admin state
  const hasAdminLogin = useSelector((state) => state.AdminLoginReducer);

  //logined routes

  //return
  return (
    <>
      <Navbar />
      <Routes>
        {hasLogin && (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/complete-order" element={<CartItems />} />
          </>
        )}

        {!hasLogin && (
          <>
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/create-account" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </>
        )}

        {hasAdminLogin && (
          <>
            <Route path="/available-products" element={<UploadedProducts />} />
            <Route path="/add-product" element={<AddProduct />} />
          </>
        )}

        {!hasAdminLogin && (
          <>
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/create-account" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
