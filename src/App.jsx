import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import SearchItem from "./component/SearchItem";
import ProductDetails from "./component/ProductDetails";
import ErrorPage from "./component/ErrorPage";
import { items } from "./component/Data";
import ProductImage from "./component/ProductImage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [data, setData] = useState([...items]);

  const [cart, setCart] = useState([]);

  const addToCart = (id, title, price, description, imgsrc) => {
    const obj = { id, title, price, description, imgsrc };
    setCart([...cart, obj]);
    toast.success("Item added to cart", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path="." element={<ErrorPage />} />
          <Route
            path="/"
            element={
              <Product
                cart={cart}
                setCart={setCart}
                items={data}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart}/>}
          />
          <Route
            path="/search/:term"
            element={<SearchItem addToCart={addToCart}/>}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/image/:id" element={<ProductImage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
