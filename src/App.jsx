import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login-in" element={<Login />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
