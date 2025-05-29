import React from "react";
import NavBar from "../components/NavBar";
import blueStarRadius from "../assets/img/png/blueStarRadius.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      {/* !-- VERRE Gallery welcome you back -- */}
      <section>
        <NavBar />
        <div className="my_container ">
          <div className="text-center lg:mt-[100px] md:mt-[70px] sm:mt-[52px] mt-10">
            <div className="sm:flex hidden items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 ">
              <img
                className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-6 md:h-8 md:w-7 lg:h-9 lg:w-8"
                src={blueStarRadius}
                alt="Decorative star"
                loading="lazy"
              />
              <p className="text-base xs:text-lg sm:text-xl font-normal font-Helvetica text-[#2B2B2B]">
                Sign in to access your orders, customize your glass, and shop
                with ease.
              </p>
              <img
                className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-6 md:h-8 md:w-7 lg:h-9 lg:w-8"
                src={blueStarRadius}
                alt="Decorative star"
                loading="lazy"
              />
            </div>

            <h1 className="sm:block hidden text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17313A] font-Sedan mt-4 xs:mt-5 sm:mt-6 lg:mt-7  tracking-wide">
              VERRE Gallery welcome you back
            </h1>
            <div className="flex sm:hidden items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 ">
              <img
                className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-6 md:h-8 md:w-7 lg:h-9 lg:w-8"
                src={blueStarRadius}
                alt="Decorative star"
                loading="lazy"
              />
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17313A] font-Sedan mt-4 xs:mt-5 sm:mt-6 lg:mt-7  tracking-wide">
                VERRE Gallery welcome you back
              </h1>
              <img
                className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-6 md:h-8 md:w-7 lg:h-9 lg:w-8"
                src={blueStarRadius}
                alt="Decorative star"
                loading="lazy"
              />
            </div>
            <p className="text-base xs:text-lg sm:text-xl font-normal font-Helvetica text-[#2B2B2B] mt-3">
              DARE TO DREAM...WE DO THE REST
            </p>
          </div>
          <div className="xl:w-[50%] lg:w-[70%] md:w-[80%] sm:w-[90%] w-full m-auto xl:mt-[75px] lg:mt-[60px] md:mt-[48px] sm:mt-[42px] mt-[36px]">
            <form action="">
              <input
                type="email"
                name="email"
                className="border outline-0 w-full py-2 sm:pt-2 sm:pb-3 px-4 sm:px-6 text-[#6D6D6D] text-base sm:text-lg md:text-xl font-Helvetica"
                placeholder="Enter E-mail"
              />
              <input
                type="password"
                name="password"
                className="border outline-0 w-full py-2 sm:pt-2 sm:pb-3 px-4 sm:px-6 text-[#6D6D6D] text-base sm:text-lg md:text-xl font-Helvetica mt-6"
                placeholder="Enter Passwords"
              />
            </form>
            <div className="text-center xl:mt-15 lg:mt-11 md:mt-8 mt-6">
              <button className="lg:text-2xl md:text-xl text-lg font-normal font-Helvetica text-white bg-[#009DD9] py-2 sm:pt-2 sm:pb-3 px-7 sm:px-10 md:px-14">
                Log in
              </button>
              <p className="md:text-lg text-base font-noraml text-[#6D6D6D] font-Helvetica md:mt-7 mt-4">
                Don’t have an account ?{" "}
                <Link className="underline">SIGN UP</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* !-- Our Commitment to Quality & Craftsmanship -- */}
      <section className="xl:mt-[150px] lg:mt-[115px] md:mt-[85px] sm:mt-[70px] mt-14">
        <div className="bg_craftsmanship py-[60px] sm:py-[80px] md:py-[90px] lg:py-[105px]">
          <div className="my_container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center">
              <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] text-[#FAFAFA] font-Sedan font-normal leading-tight">
                Our Commitment to Quality & Craftsmanship
              </h2>
              <p className="text-lg sm:text-xl font-normal font-Helvetica text-[#FAFAFA] mt-2 sm:mt-3">
                "We believe that glass is more than just a material"
              </p>
            </div>

            {/* Quote Box Section */}
            <div
              className="w-full md:w-[80%] lg:w-[70%] xl:w-[50%] mx-auto bg-[#DFCEBC] mt-8 sm:mt-10 md:mt-12 lg:mt-[65px] 
                      py-8 sm:py-10 md:py-12 lg:py-[46px] 
                      px-6 sm:px-8 md:px-12 lg:px-[60px] xl:px-[80px]"
            >
              <p className="text-base sm:text-lg lg:text-xl font-normal font-Helvetica text-[#2B2B2B] text-center leading-relaxed">
                We believe that glass is more than just a material, it's an
                expression of artistry. Every item in our collection is
                thoughtfully designed, using high-quality, sustainable materials
                and expert techniques to achieve the perfect balance of
                durability and sophistication.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center md:justify-between justify-center flex-wrap xl:mt-[75px] lg:mt-[60px] md:mt-[48px] mt-[36px]">
          <div className="md:flex items-center xl:gap-6 lg:gap-4 gap-3 hidden">
            <img
              src={blueStarRadius}
              alt="star"
              className="w-4 h-4 lg:w-6 lg:h-6"
            />
            <Link
              to="/shop"
              className="xl:text-xl lg:text-lg text-base text-[#2B2B2B] underline font-Helvetica"
            >
              SHOP NOW
            </Link>
            <img
              src={blueStarRadius}
              alt="star"
              className="w-4 h-4 lg:w-6 lg:h-6"
            />
          </div>
          <h2 className="text-center xl:text-[46px] lg:text-[32px] md:text-[24px] sm:text-[28px] text-xl text-[#17313A] font-normal font-Sedan lg:px-4 md:px-3 ">
            experience the timeless beauty of glass
          </h2>
          <div className="md:flex items-center xl:gap-6 lg:gap-4 gap-3 hidden">
            <img
              src={blueStarRadius}
              alt="star"
              className="lg:w-6 lg:h-6 w-4 h-4"
            />
            <Link
              to="/shop"
              className="xl:text-xl lg:text-lg text-base text-[#2B2B2B] underline font-Helvetica"
            >
              SHOP NOW
            </Link>
            <img
              src={blueStarRadius}
              alt="star"
              className="lg:w-6 lg:h-6 w-4 h-4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
