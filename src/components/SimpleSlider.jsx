import React from "react";
import Slider from "react-slick";

import NavBar from "./NavBar";
import "../Slider.css";
import BlueButton from "./button/BlueButton";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
  };

  // ------------------ shopBtn ------------------
  const shopBtn = ` md:text-[26px] sm:text-xl text-lg md:py-3 py-2 lg:px-[65px] md:px-[50px] sm:px-[42px] px-9`;

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <Slider {...settings}>
          <div className="bg_homeImg !flex flex-col justify-end custom_vh pb-[85px]">
            <div className="my_container ">
              <div className=" text-center">
                <p className="lg:text-[50px] sm:text-[38px] text-[26px] font-normal text-[#FAFAFA] font-Sedan uppercase lg:leading-[67px] sm:leading-[44px] leading-[36px] lg:w-[75%] md:w-[80%] sm:w-[90%] w-full m-auto">
                  Introducing Our Newest Glass Creations!
                </p>
                <p className="lg:text-2xl sm:text-xl text-lg font-Helvetica font-normal text-white md:mt-4 mt-3">
                  Elevate your space with our latest collection of premium glass
                  basins
                </p>
                <div className="lg:mt-[46px] sm:mt-[32px] mt-5">
                  <BlueButton btnText="SHOP NOW" style={shopBtn} />
                </div>

                <p className="lg:text-2xl sm:text-xl text-lg font-Helvetica font-normal text-white md:mt-[32px] sm:mt-[26px] mt-5">
                  NEW IN
                </p>
              </div>
            </div>
          </div>
          <div className="bg_homeImg !flex flex-col justify-end custom_vh pb-[85px]">
            <div className="my_container ">
              <div className=" text-center">
                <p className="lg:text-[50px] sm:text-[38px] text-[26px] font-normal text-[#FAFAFA] font-Sedan uppercase lg:leading-[67px] sm:leading-[44px] leading-[36px] lg:w-[75%] md:w-[80%] sm:w-[90%] w-full m-auto">
                  Introducing Our Newest Glass Creations!
                </p>
                <p className="lg:text-2xl sm:text-xl text-lg font-Helvetica font-normal text-white md:mt-4 mt-3">
                  Elevate your space with our latest collection of premium glass
                  basins
                </p>
                <div className="lg:mt-[46px] sm:mt-[32px] mt-5">
                  <BlueButton btnText="SHOP NOW" style={shopBtn} />
                </div>

                <p className="lg:text-2xl sm:text-xl text-lg font-Helvetica font-normal text-white md:mt-[32px] sm:mt-[26px] mt-5">
                  NEW IN
                </p>
              </div>
            </div>
          </div>
          <div className="bg_homeImg !flex flex-col justify-end custom_vh pb-[85px]">
            <div className="my_container ">
              <div className=" text-center">
                <p className="lg:text-[50px] sm:text-[38px] text-[26px] font-normal text-[#FAFAFA] font-Sedan uppercase lg:leading-[67px] sm:leading-[44px] leading-[36px] lg:w-[75%] md:w-[80%] sm:w-[90%] w-full m-auto">
                  Introducing Our Newest Glass Creations!
                </p>
                <p className="lg:text-2xl sm:text-xl text-lg font-Helvetica font-normal text-white md:mt-4 mt-3">
                  Elevate your space with our latest collection of premium glass
                  basins
                </p>
                <div className="lg:mt-[46px] sm:mt-[32px] mt-5">
                  <BlueButton btnText="SHOP NOW" style={shopBtn} />
                </div>

                <p className="lg:text-2xl sm:text-xl text-lg font-Helvetica font-normal text-white md:mt-[32px] sm:mt-[26px] mt-5">
                  NEW IN
                </p>
              </div>
            </div>
          </div>
          <div className="bg_homeImg !flex flex-col justify-end custom_vh pb-[85px]">
            <div className="my_container ">
              <div className=" text-center">
                <p className="lg:text-[50px] sm:text-[38px] text-[26px] font-normal text-[#FAFAFA] font-Sedan uppercase lg:leading-[67px] sm:leading-[44px] leading-[36px] lg:w-[75%] md:w-[80%] sm:w-[90%] w-full m-auto">
                  Introducing Our Newest Glass Creations!
                </p>
                <p className="lg:text-2xl sm:text-xl text-lg font-Helvetica font-normal text-white md:mt-4 mt-3">
                  Elevate your space with our latest collection of premium glass
                  basins
                </p>
                <div className="lg:mt-[46px] sm:mt-[32px] mt-5">
                  <BlueButton btnText="SHOP NOW" style={shopBtn} />
                </div>

                <p className="lg:text-2xl sm:text-xl text-lg font-Helvetica font-normal text-white md:mt-[32px] sm:mt-[26px] mt-5">
                  NEW IN
                </p>
              </div>
            </div>
          </div>
          <div className="bg_homeImg !flex flex-col justify-end custom_vh pb-[85px]">
            <div className="my_container ">
              <div className=" text-center">
                <p className="lg:text-[50px] sm:text-[38px] text-[26px] font-normal text-[#FAFAFA] font-Sedan uppercase lg:leading-[67px] sm:leading-[44px] leading-[36px] lg:w-[75%] md:w-[80%] sm:w-[90%] w-full m-auto">
                  Introducing Our Newest Glass Creations!
                </p>
                <p className="lg:text-2xl sm:text-xl text-lg font-Helvetica font-normal text-white md:mt-4 mt-3">
                  Elevate your space with our latest collection of premium glass
                  basins
                </p>
                <div className="lg:mt-[46px] sm:mt-[32px] mt-5">
                  <BlueButton btnText="SHOP NOW" style={shopBtn} />
                </div>

                <p className="lg:text-2xl sm:text-xl text-lg font-Helvetica font-normal text-white md:mt-[32px] sm:mt-[26px] mt-5">
                  NEW IN
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
