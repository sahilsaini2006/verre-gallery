import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navbarLogo from "../assets/img/svg/navbarLogo.svg";
import searchIcon from "../assets/img/svg/searchIcon.svg";
import downArrow from "../assets/img/svg/downArrow.svg";
import userIcon from "../assets/img/svg/UserIcon.svg";
import cartIcon from "../assets/img/svg/CartIcon.svg";
import usaFlag from "../assets/img/svg/USAflag.svg";
import cartRoundBasin from "../assets/img/png/cartRoundbasin.png";
import cartHalfBasin from "../assets/img/png/cartHalfbasin.png";
import dotsImg from "../assets/img/png/dots.png";
import BlueButton from "./button/BlueButton";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);


  // -------------- button- styleing ----------------
  const buyBtn = `w-full py-2 sm:text-lg text-base font-semibold sm:mt-4 mt-3`;

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-[#44444466] backdrop-blur-sm z-30 pointer-events-auto"
          style={{ marginTop: "your-navbar-height" }} 
          onClick={() => setIsCartOpen(false)}
        />
      )}
      <nav className="relative z-40">
        <div className="bg-[#B1EAFF] sm:py-6 py-4">
          <div className="my_container ">
            <div className="flex items-center justify-between  ">
              <div className="sm:w-11/12 w-10/12 px-3">
                <div className="hidden_screen">
                  <div className="flex items-center justify-center">
                    <span className="text-xl cursor-pointer text-[#2B2B2B]">
                      {"<"}
                    </span>
                    <p className="lg:text-xl  text-lg font-normal text-[#2B2B2B] lg:px-8 md:gap-6 px-4 font-Helvetica">
                      Exclusive Deals on all Glass Basins Collections –{" "}
                      <a href="#" className="underline font-medium">
                        Don’t Miss Out!
                      </a>
                    </p>
                    <span className="text-xl cursor-pointer text-[#2B2B2B]">
                      {">"}
                    </span>
                  </div>
                </div>

                <div className="block_screen overflow-hidden whitespace-nowrap">
                  <div className="animate-marquee inline-block">
                    <span className="text-xl cursor-pointer text-[#2B2B2B]">
                      {"<"}
                    </span>
                    <p className="sm:text-xl text-lg *: font-normal text-[#2B2B2B] md:px-8 px-4 font-Helvetica inline">
                      Exclusive Deals on all Glass Basins Collections –{" "}
                      <a href="#" className="underline font-medium">
                        Don’t Miss Out!
                      </a>
                    </p>
                    <span className="text-xl cursor-pointer text-[#2B2B2B]">
                      {">"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="sm:w-1/12 w-2/12 px-1">
                <div className="flex items-center justify-end ml-4">
                  <img
                    src={usaFlag}
                    alt="UK Flag"
                    className="sm:w-10 w-50 h-5 "
                  />
                  <span className="text-black text-xs ml-1">▼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="my_container md:py-6 sm:py-4 py-2">
            <div className="flex items-center justify-between flex-wrap">
              <div className="md:w-3/12 w-2/12">
                <ul className="flex items-center lg:gap-7 sm:gap-5 gap-3">
                  <li className="block md:hidden md:mb-0 mb-2">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="cursor-pointer"
                    >
                      {isMenuOpen ? (
                        <span className="text-3xl font-bold absolute top-5 left-35 z-99">
                          ×{" "}
                        </span>
                      ) : (
                        <span className="md:text-4xl text-3xl">≡</span>
                      )}
                    </button>
                  </li>
                  {/* Search and Desktop Links */}
                  <li>
                    <Link>
                      <img
                        className="lg:w-7 md:w-6 w-5"
                        src={searchIcon}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="md:block hidden">
                    <Link className="lg:text-xl text-lg font-normal" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="md:block hidden">
                    <Link
                      to="/Shop"
                      className="flex items-center gap-3 lg:text-xl text-lg font-normal"
                    >
                      Shop <img src={downArrow} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="md:w-6/12 w-7/12 px-3">
                <Link>
                  <img src={navbarLogo} alt="navbarLogo" />
                </Link>
              </div>

              <div className="md:w-3/12 w-2/12">
                <ul className="flex items-center justify-end lg:gap-5 gap-4">
                  <li className="md:block hidden">
                    <Link
                      to="/about"
                      className="lg:text-xl text-lg font-normal"
                    >
                      About
                    </Link>
                  </li>
                  <li className="md:block hidden">
                    <Link
                      to="/contact"
                      className="lg:text-xl text-lg font-normal"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/login-in">
                      <img className="md:w-7 w-5" src={userIcon} alt="" />
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => setIsCartOpen(true)}>
                      <img className="md:w-7 w-5" src={cartIcon} alt="cart" />
                    </button>
                  </li>
                </ul>
              </div>

              {/* Slide-in Mobile Menu */}
              <div
                className={`fixed top-0 left-0 h-full w-[200px] bg-white shadow-md z-50 transform transition-transform duration-500 ease-in-out ${
                  isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } md:hidden`}
              >
                <ul className="flex flex-col items-start h-full justify-center p-6 gap-5 text-lg font-medium">
                  <li>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Shop"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2"
                    >
                      Shop <span>{">"}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/About" onClick={() => setIsMenuOpen(false)}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact" onClick={() => setIsMenuOpen(false)}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {isCartOpen && (
                <div className="fixed bottom-0 right-0 w-[90%] sm:w-[420px] bg-white z-50 shadow-xl transition-transform duration-500 ease-in-out translate-x-0 custom_vh">
                  {/* Header */}
                  <div className="flex items-center justify-between sm:p-4 p-2 border-b">
                    <h2 className="sm:text-xl text-lg font-[600] font-Helvetica">
                      My Cart
                    </h2>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="text-2xl font-light"
                    >
                      ×
                    </button>
                  </div>

                  <div className="flex flex-col justify-between xl:min-h-[70vh] md:min-h-[60vh] min-h-[70vh]">
                    <div className="pt-4 pb-2 px-4">
                      <div className="flex items-start sm:gap-4 gap-2 border-b pb-4">
                        <img
                          src={cartRoundBasin}
                          alt="item"
                          className="sm:w-[100px] w-[75px] h-[75px] sm:h-[100px] "
                        />
                        <div className="flex-1">
                          <p className="font-bold sm:text-base text-sm text-[#2B2B2B] font-Helvetica">
                            ROUND Basin - on small pedestal with iron support
                          </p>
                          <p className="sm:text-sm text-[12px]   text-[#6D6D6D] mt-2 font-Helvetica">
                            LAS101
                          </p>
                          <div className="flex items-center mt-3 gap-3">
                            <button className="border border-gray-300 px-[10px] py-[2px] sm:text-sm text-[12px] ">
                              −
                            </button>
                            <span className="sm:text-sm text-[12px] ">1</span>
                            <button className="border border-gray-300 px-[10px] py-[2px] sm:text-sm text-[12px] ">
                              +
                            </button>
                            <button className="ml-auto text-[#999] underline text-[13px]">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Suggestions */}
                      <div className="sm:pt-6 pt-4">
                        <div className="flex items-center justify-between mb-3">
                          <p className="uppercase sm:text-base text-sm text-[#6D6D6D] font-Helvetica">
                            ADD MORE ITEMS
                          </p>
                          <div>
                            <img className="w-14" src={dotsImg} alt="" />
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <img
                            src={cartHalfBasin}
                            alt="suggest"
                            className="w-[100px] h-[104px]"
                          />
                          <div className="flex-1">
                            <p className="font-bold sm:text-base text-sm text-[#2B2B2B] font-Helvetica">
                              Round vessel 3 levels
                            </p>
                            <p className="sm:text-sm text-[12px] text-[#6D6D6D] mt-2 font-Helvetica">
                              LAS533
                            </p>
                            <button className="text-sm text-[#2B2B2B] underline sm:mt-3 mt-2">
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="sm:mb-6 mb-4 ">
                      <div className="md:px-9 sm:px-7 px-4">
                        <button className="w-full border border-black py-2 sm:text-lg text-base font-medium px-4">
                          CONTINUE SHOPPING
                        </button>
                      </div>
                      <div className="border-t md:px-9 sm:px-7 px-4 sm:pt-4 pt-3 sm:mt-5 mt-3">
                        <p className="text-sm text-[#999]">
                          *Taxes and shipping calculated at checkout
                        </p>
                     
                        <BlueButton btnText="BUY NOW" style={buyBtn} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
