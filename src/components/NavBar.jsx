import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarLogo from "../assets/img/svg/navbarLogo.svg";
import searchIcon from "../assets/img/svg/searchIcon.svg";
import downArrow from "../assets/img/svg/downArrow.svg";
import userIcon from "../assets/img/svg/UserIcon.svg";
import cartIcon from "../assets/img/svg/CartIcon.svg";
import usaFlag from "../assets/img/svg/USAflag.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav>
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
        <div className="my_container md:py-6 sm:py-4 py-2">
          <div className="flex items-center justify-between flex-wrap">
            <div className="md:w-3/12 w-2/12">
              <ul className="flex items-center lg:gap-7 sm:gap-5 gap-3">
                <li className="block md:hidden md:mb-0 mb-2">
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer">
                    {isMenuOpen ? (
                      <span className="text-3xl font-bold absolute top-5 left-35 z-99">× </span>
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
                  <Link className="lg:text-xl text-lg font-normal">Home</Link>
                </li>
                <li className="md:block hidden">
                  <Link
                    to="/shop"
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
                  <Link className="lg:text-xl text-lg font-normal">About</Link>
                </li>
                <li className="md:block hidden">
                  <Link className="lg:text-xl text-lg font-normal">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link>
                    <img className="md:w-7 w-5" src={userIcon} alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img className="md:w-7 w-5" src={cartIcon} alt="" />
                  </Link>
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
                    to="/shop"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    Shop <span>{'>'}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
