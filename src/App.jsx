import React from "react";
import "./App.css";

// import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Home />
      <Footer/>
    </>
  );
}

export default App;
