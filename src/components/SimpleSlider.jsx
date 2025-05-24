import React from "react";
import Slider from "react-slick";

import NavBar from "./NavBar";
import "../Slider.css";

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
                  <button className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-normal font-Helvetica text-white bg-[#009DD9] md:py-[19px] py-3 md:px-[78px] sm:px-[60px] px-[40px] inline-block  cursor-pointer">
                    SHOP NOW
                  </button>
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
                  <button className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-normal font-Helvetica text-white bg-[#009DD9] md:py-[19px] py-3 md:px-[78px] sm:px-[60px] px-[40px] inline-block  cursor-pointer">
                    SHOP NOW
                  </button>
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
                  <button className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-normal font-Helvetica text-white bg-[#009DD9] md:py-[19px] py-3 md:px-[78px] sm:px-[60px] px-[40px] inline-block  cursor-pointer">
                    SHOP NOW
                  </button>
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
                  <button className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-normal font-Helvetica text-white bg-[#009DD9] md:py-[19px] py-3 md:px-[78px] sm:px-[60px] px-[40px] inline-block  cursor-pointer">
                    SHOP NOW
                  </button>
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
                  <button className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-normal font-Helvetica text-white bg-[#009DD9] md:py-[19px] py-3 md:px-[78px] sm:px-[60px] px-[40px] inline-block  cursor-pointer">
                    SHOP NOW
                  </button>
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
