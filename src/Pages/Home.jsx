import React, { useRef } from "react";
import SimpleSlider from "../components/SimpleSlider";
import {
  productData,
  productData2,
  testimonialData,
} from "../components/Helper";
import { Link } from "react-router-dom";
import BasinProduct from "../components/BasinProduct";
import blueStarRadius from "../assets/img/png/blueStarRadius.png";
import Slider from "react-slick";
import timelessGlasswork from "../assets/img/png/timelessGlasswork.png";
import creativoBasin from "../assets/img/png/creativoBasin.png";
import renaissanceBasin from "../assets/img/png/renaissanceBasin.png";
import accessoriesBasin from "../assets/img/png/accessoriesBasin.png";
import customBasin from "../assets/img/png/customBasin.png";
import featuredImg from "../assets/img/png/featuredIMg.png";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);

  const cardSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const testimonialSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/*!-- Hero Section -- */}
      <SimpleSlider />

      {/* !-- Shop Bestsellers -- */}
      <section className="lg:mt-[100px] md:mt-[70px] sm:mt-[52px] mt-10">
        <div className="my_container">
          <div className="flex items-center sm:flex-row flex-col justify-between lg:mb-[64px] md:mb-[54px] sm:mb-[46px] mb-[38px]">
            <p className="xl:text-[65px] lg:text-[52px] md:text-[44px] sm:text-4xl text-3xl font-normal font-Sedan text-[#17313A]">
              Shop Bestsellers
            </p>
            <Link
              to=""
              className="md:text-2xl sm:text-xl text-base  font-normal text-[#2B2B2B] font-Helvetica flex sm:gap-5 gap-3 sm:mt-0 mt-3 items-center"
            >
              <span className="underline underline-offset-8">VIEW ALL</span>
              <span className="text">{">"}</span>
            </Link>
          </div>

          <Slider ref={sliderRef} {...cardSliderSettings}>
            {productData.map((item, index) => (
              <div key={index} className="px-4 h-full">
                <div className="h-full flex ">
                  <BasinProduct mapData={item} />
                </div>
              </div>
            ))}
          </Slider>

          <div className="flex items-center justify-center md:gap-7 gap-5 lg:mt-[75px] md:mt-[60px] sm:mt-[44px] mt-[30px]">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="text-[#17313A] md:py-5 sm:py-4 py-2 md:px-7 sm:px-6 px-4 border border-[#17313A] rounded-[50%] cursor-pointer"
            >
              <span className="text-3xl">{"<"}</span>
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="text-[#17313A] md:py-5 sm:py-4 py-2 md:px-7 sm:px-6 px-4 border border-[#17313A] rounded-[50%] cursor-pointer"
            >
              <span className="text-3xl">{">"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* !-- Dare to Dream Section -- */}
      <section>
        <div className="lg:mt-[120px] md:mt-[85px] sm:mt-[75px] mt-[48px]">
          <div className="my_container">
            <div className="flex items-center md:justify-between justify-center flex-wrap">
              <div className="md:flex items-center xl:gap-6 md:gap-4 gap-4 hidden">
                <img
                  src={blueStarRadius}
                  alt="star"
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
                <Link
                  to="/shop"
                  className="xl:text-xl md:text-lg text-base text-[#2B2B2B] underline font-Helvetica"
                >
                  SHOP NOW
                </Link>
                <img
                  src={blueStarRadius}
                  alt="star"
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
              </div>
              <h2 className="text-center xl:text-5xl lg:text-[32px] md:text-[20px] text-2xl text-[#17313A] font-normal font-Sedan lg:px-4 md:px-3 ">
                DARE TO DREAM, WE DO THE REST
              </h2>
              <div className="md:flex items-center xl:gap-6 md:gap-4 gap-4 hidden">
                <img
                  src={blueStarRadius}
                  alt="star"
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
                <Link
                  to="/shop"
                  className="xl:text-xl md:text-lg text-base text-[#2B2B2B] underline font-Helvetica"
                >
                  SHOP NOW
                </Link>
                <img
                  src={blueStarRadius}
                  alt="star"
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-between lg:mt-[85px] md:mt-[75px] sm:mt-[48px] mt-8">
            {/* Basin */}
            <div className="w-full sm:w-[48%] lg:w-[32%] xl:w-[20%] min-h-[320px]">
              <div className="basinImg h-full flex flex-col justify-end p-6 md:p-8 lg:p-9">
                <p className="text-white text-2xl md:text-[26px] font-Sedan">
                  BASIN
                </p>
                <div className="mt-4 md:mt-5">
                  <Link className="text-lg md:text-xl text-white bg-[#009DD9] py-3 md:py-4 px-6 md:px-7 inline-block border border-[#009DD9] hover:bg-white hover:text-[#009DD9] transition-all duration-300">
                    VIEW PRODUCTS
                  </Link>
                </div>
              </div>
            </div>

            {/* Pedestal */}
            <div className="w-full sm:w-[48%] lg:w-[32%] xl:w-[20%] min-h-[320px]">
              <div className="pedestalImg h-full flex flex-col justify-end p-6 md:p-8 lg:p-9">
                <p className="text-white text-2xl md:text-[26px] font-Sedan">
                  PEDESTAL
                </p>
                <div className="mt-4 md:mt-5">
                  <Link className="text-lg md:text-xl text-white bg-[#009DD9] py-3 md:py-4 px-6 md:px-7 inline-block border border-[#009DD9] hover:bg-white hover:text-[#009DD9] transition-all duration-300">
                    VIEW PRODUCTS
                  </Link>
                </div>
              </div>
            </div>

            {/* Undermount */}
            <div className="w-full sm:w-[48%] lg:w-[32%] xl:w-[20%] min-h-[320px]">
              <div className="undermountImg h-full flex flex-col justify-end p-6 md:p-8 lg:p-9">
                <p className="text-white text-2xl md:text-[26px] font-Sedan">
                  UNDERMOUNT
                </p>
                <div className="mt-4 md:mt-5">
                  <Link className="text-lg md:text-xl text-white bg-[#009DD9] py-3 md:py-4 px-6 md:px-7 inline-block border border-[#009DD9] hover:bg-white hover:text-[#009DD9] transition-all duration-300">
                    VIEW PRODUCTS
                  </Link>
                </div>
              </div>
            </div>

            {/* Drop-in */}
            <div className="w-full sm:w-[48%] lg:w-[32%] xl:w-[20%] min-h-[320px]">
              <div className="dropInImg h-full flex flex-col justify-end p-6 md:p-8 lg:p-9">
                <p className="text-white text-2xl md:text-[26px] font-Sedan">
                  DROP-IN
                </p>
                <div className="mt-4 md:mt-5">
                  <Link className="text-lg md:text-xl text-white bg-[#009DD9] py-3 md:py-4 px-6 md:px-7 inline-block border border-[#009DD9] hover:bg-white hover:text-[#009DD9] transition-all duration-300">
                    VIEW PRODUCTS
                  </Link>
                </div>
              </div>
            </div>

            {/* Custom */}
            <div className="w-full sm:w-[48%] lg:w-[32%] xl:w-[20%] min-h-[320px]">
              <div className="customImg h-full flex flex-col justify-end p-6 md:p-8 lg:p-9">
                <p className="text-white text-2xl md:text-[26px] font-Sedan">
                  CUSTOM
                </p>
                <div className="mt-4 md:mt-5">
                  <Link className="text-lg md:text-xl text-white bg-[#009DD9] py-3 md:py-4 px-6 md:px-7 inline-block border border-[#009DD9] hover:bg-white hover:text-[#009DD9] transition-all duration-300">
                    VIEW PRODUCTS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* !-- TIMELESS GLASSWORKS -- */}
      <section className="xl:mt-[150px] lg:mt-[115px] md:mt-[85px] sm:mt-[70px] mt-14">
        <div className="my_container">
          <div className="flex items-center lg:justify-between justify-center flex-wrap lg:flex-row flex-col-reverse">
            <div className="w-full lg:w-[45%] lg:mt-0 mt-9 px-4 sm:px-6 lg:px-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  className="h-7 w-6 sm:h-8 sm:w-7 lg:h-9 lg:w-8"
                  src={blueStarRadius}
                  alt="blueStarRadius"
                />
                <p className="text-lg sm:text-xl font-normal font-Helvetica text-[#2B2B2B]">
                  TIMELESS GLASSWORKS
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17313A] font-Sedan mt-5 lg:mt-7">
                Artistry in Glass, Elevating Your Spaces
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-normal text-[#2B2B2B] font-Helvetica mt-5 sm:mt-6 lg:mt-7">
                We specialize in creating exquisite glass basins and accessories
                for bathroom that blend artistry with functionality. Whether
                you're looking for a sleek modern touch or a unique handcrafted
                masterpiece, our commitment to precision and excellence ensures
                that every product reflects sophistication and elegance.
              </p>

              <div className="mt-8 sm:mt-9 lg:mt-10">
                <Link className="inline-block text-lg sm:text-xl lg:text-2xl font-normal text-white bg-[#009DD9] py-2 sm:py-2.5 lg:py-3 px-8 sm:px-12 lg:px-20 border border-[#009DD9] hover:bg-white hover:text-[#009DD9] duration-500 font-Helvetica text-center">
                  ABOUT US
                </Link>
              </div>
            </div>

            <div className="lg:w-6/12 md:w-10/12 sm:w-11/12 w-full px-3">
              <div className="w-full">
                <img
                  className="w-full"
                  src={timelessGlasswork}
                  alt="timelessGlasswork"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* !-- New Arrivals -- */}
      <section className="lg:mt-[100px] md:mt-[70px] sm:mt-[52px] mt-10">
        <div className="my_container">
          <div className="flex items-center sm:flex-row flex-col justify-between lg:mb-[64px] md:mb-[54px] sm:mb-[46px] mb-[38px]">
            <p className="xl:text-[65px] lg:text-[52px] md:text-[44px] sm:text-4xl text-3xl font-normal font-Sedan text-[#17313A]">
              New Arrivals
            </p>
            <Link
              to=""
              className="md:text-2xl sm:text-xl text-base  font-normal text-[#2B2B2B] font-Helvetica flex sm:gap-5 gap-3 sm:mt-0 mt-3 items-center"
            >
              <span className="underline underline-offset-8">VIEW ALL</span>
              <span className="text">{">"}</span>
            </Link>
          </div>

          <Slider ref={sliderRef2} {...cardSliderSettings}>
            {productData2.map((item, index) => (
              <div key={index} className="px-4 h-full">
                <div className="h-full flex ">
                  <BasinProduct mapData={item} />
                </div>
              </div>
            ))}
          </Slider>

          <div className="flex items-center justify-center md:gap-7 gap-5 lg:mt-[75px] md:mt-[60px] sm:mt-[44px] mt-[30px]">
            <button
              onClick={() => sliderRef2.current?.slickPrev()}
              className="text-[#17313A] md:py-5 sm:py-4 py-2 md:px-7 sm:px-6 px-4 border border-[#17313A] rounded-[50%] cursor-pointer"
            >
              <span className="text-3xl">{"<"}</span>
            </button>
            <button
              onClick={() => sliderRef2.current?.slickNext()}
              className="text-[#17313A] md:py-5 sm:py-4 py-2 md:px-7 sm:px-6 px-4 border border-[#17313A] rounded-[50%] cursor-pointer"
            >
              <span className="text-3xl">{">"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* !-- OUR CATALOGUES --  */}
      <section className=" mt-[50px] *:sm:mt-[75px] md:mt-[100px] lg:mt-[150px] xl:mt-[175px]">
        <div className="my_container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
            {/* Left Column - Image Cards */}
            <div className="w-full lg:w-4/12 px-0 sm:px-3">
              <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
                <div className="relative">
                  <img
                    src={creativoBasin}
                    alt="creativoBasin"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-[15px] sm:bottom-[20px] md:bottom-[30px] left-[15px] sm:left-[25px] md:left-[35px] text-[#FAFAFA] text-left">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.2] sm:leading-[40px] lg:leading-[50px] font-Sedan">
                      CREATIVO
                    </h3>
                    <p className="text-lg sm:text-xl lg:text-[26px] font-Sedan">
                      BASINS COLLECTION
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={accessoriesBasin}
                    alt="accessoriesBasin"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-[15px] sm:bottom-[20px] md:bottom-[30px] left-[15px] sm:left-[25px] md:left-[35px] text-[#FAFAFA] text-left">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.2] sm:leading-[40px] lg:leading-[50px] font-Sedan">
                      ACCESSORIES
                    </h3>
                    <p className="text-lg sm:text-xl lg:text-[26px] font-Sedan">
                      COLLECTION
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column - Content */}
            <div className="w-full lg:w-4/12 px-0 sm:px-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5">
                  <img
                    className="h-7 w-6 sm:h-8 sm:w-7 lg:h-9 lg:w-8"
                    src={blueStarRadius}
                    alt="blueStarRadius"
                  />
                  <p className="text-lg sm:text-xl font-normal font-Helvetica text-[#2B2B2B]">
                    OUR CATALOGUES
                  </p>
                  <img
                    className="h-7 w-6 sm:h-8 sm:w-7 lg:h-9 lg:w-8"
                    src={blueStarRadius}
                    alt="blueStarRadius"
                  />
                </div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-normal font-Sedan text-[#17313A] mt-5 sm:mt-6 lg:mt-7 w-full sm:w-[95%] mx-auto">
                  The Regal Work Of Glass Masterpieces
                </p>
                <p className="text-base sm:text-lg lg:text-xl font-normal text-[#2B2B2B] mt-5 sm:mt-6 lg:mt-7 w-full sm:w-[93%] mx-auto">
                  Indulge in the finest selection of luxurious glass basins and
                  accessories and more. Crafted for elegance, designed for
                  royalty.
                </p>
                <div className="mt-6 sm:mt-7 lg:mt-8">
                  <Link className="inline-block text-lg sm:text-xl lg:text-2xl font-normal text-white bg-[#009DD9] py-2 sm:py-2.5 lg:py-3 px-8 sm:px-12 lg:px-14 border border-[#009DD9] hover:bg-white hover:text-[#009DD9] duration-500 font-Helvetica">
                    EXPLORE
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Image Cards */}
            <div className="w-full lg:w-4/12 px-0 sm:px-3">
              <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
                <div className="relative">
                  <img
                    src={renaissanceBasin}
                    alt="renaissanceBasin"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-[15px] sm:bottom-[20px] md:bottom-[30px] left-[15px] sm:left-[25px] md:left-[35px] text-[#FAFAFA] text-left">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.2] sm:leading-[40px] lg:leading-[50px] font-Sedan uppercase">
                      renaissance
                    </h3>
                    <p className="text-lg sm:text-xl lg:text-[26px] font-Sedan">
                      BASINS COLLECTION
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={customBasin}
                    alt="customBasin"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-[15px] sm:bottom-[20px] md:bottom-[30px] left-[15px] sm:left-[25px] md:left-[35px] text-[#FAFAFA] text-left">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.2] sm:leading-[40px] lg:leading-[50px] font-Sedan">
                      CUSTOM
                    </h3>
                    <p className="text-lg sm:text-xl lg:text-[26px] font-Sedan">
                      COLLECTION
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* !-- products */}
      <section>
        <div className="productImg py-[40px] md:py-[60px] xl:py-[80px] mt-[80px] md:mt-[120px] xl:mt-[175px]">
          <div className="my_container px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-0">
              <div className="w-full md:w-6/12 lg:w-6/12 px-0 lg:px-3 md:text-start text-center">
                <p className="text-2xl sm:text-3xl xl:text-4xl font-Sedan font-normal text-[#FAFAFA]">
                  Featured Product
                </p>
                <p className=" text-sm sm:text-base md:text-lg xl:text-xl font-normal text-[#FAFAFA] mt-1 sm:mt-2 font-Helvetica">
                  "Elegant Basin & Countertop Glassworks – Crafted for Style &
                  Durability"
                </p>
                <div className="mt-6 sm:mt-8 xl:mt-10">
                  <img
                    className="w-full h-auto"
                    src={featuredImg}
                    alt="featuredImg"
                  />
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-5/12">
                <div className="flex items-center justify-center flex-col text-center lg:text-left">
                  <p className="text-3xl sm:text-4xl md:text-[44px] xl:text-[60px] text-[#FAFAFA] font-Sedan font-normal leading-[1.2] sm:leading-[50px] xl:leading-[70px]">
                    PURE transition
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl font-normal font-Helvetica text-[#FAFAFA] underline mt-2 sm:mt-3">
                    VERRE Gallery
                  </p>
                  <div className="mt-4 sm:mt-5 xl:mt-6">
                    <Link className="text-base sm:text-lg md:text-xl xl:text-2xl font-normal font-Helvetica bg-[#FAFAFA] text-[#17313A] hover:bg-[#17313A] hover:text-[#FAFAFA] duration-500 py-2 sm:py-2.5 xl:py-3 px-8 sm:px-12 xl:px-15 inline-block">
                      EXPLORE ALL
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* !-- Hear from Our Satisfied Customers -- */}
      <section className="xl:mt-[150px] lg:mt-[115px] md:mt-[85px] sm:mt-[70px] mt-14">
        <div className="my_container">
          <div className="text-center xl:mb-12 lg:mb-9 mb-6">
            <p className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-normal font-Sedan text-[#17313A]">
              Hear from Our Satisfied Customers
            </p>
          </div>
          <div className="testimonal_slider1">
            <div className="flex flex-wrap lg:justify-between justify-center xxl:w-[85%] xl:w-full m-auto">
              {testimonialData.map((item, index) => (
                <Testimonials key={index} testi={item} />
              ))}
            </div>
          </div>
          <div className="testimonal_slider2">
            <Slider ref={sliderRef3} {...testimonialSlider}>
              {testimonialData.map((item, index) => (
                <div key={index} className="px-2 ">
                  <div className="flex justify-between">
                    <Testimonials testi={item} />
                  </div>
                </div>
              ))}
            </Slider>
            <div className="flex items-center justify-center md:gap-7 gap-5  mt-5">
              <button
                onClick={() => sliderRef3.current?.slickPrev()}
                className="text-[#17313A] md:pt-5 sm:pt-3 pt-1 md:pb-5 sm:pb-4 pb-2 md:px-7 sm:px-6 px-[14px] border border-[#17313A] rounded-[50%] cursor-pointer"
              >
                <span className="text-3xl">{"<"}</span>
              </button>
              <button
                onClick={() => sliderRef3.current?.slickNext()}
                className="text-[#17313A] md:pt-5 sm:pt-3 pt-1 md:pb-5 sm:pb-4 pb-2 md:px-7 sm:px-6 px-[14px] border border-[#17313A] rounded-[50%] cursor-pointer"
              >
                <span className="text-3xl">{">"}</span>
              </button>
            </div>
          </div>
          <div className="xl:mt-[57px] lg:mt-[48px] md:mt-10 mt-7 text-center">
            <Link
              to="#"
              className="text-base sm:text-lg md:text-2xl font-normal font-['Helvetica'] text-[#009DD9] bg-white 
        hover:text-white hover:bg-[#009DD9] border border-[#009DD9] 
        py-3 px-10 md:px-24 duration-500 inline-block"
            >
              VIEW ALL
            </Link>
          </div>
        </div>
      </section>

      {/* !-- Perfectly controlled glass -- */}
      <section className="xl:mt-[150px] lg:mt-[115px] md:mt-[85px] sm:mt-[70px] mt-14">
        <div className="my_container bg-[#F8F8F8] md:py-[45px] py-8 ">
          <div className="flex items-center flex-wrap justify-between lg:px-8 md:px-6 sm:px-4 px-0">
            <div className="lg:w-8/12 w-full ">
              <div className="flex md:gap-5 gap-3">
                <div>
                  <img src={blueStarRadius} alt="blueStarRadius" />
                </div>
                <div>
                  <p className="lg:text-4xl md:text-3xl sm:text-2xl text-[19px] font-normal md:leading-100% sm:leading-[30px] leading-[25px] font-Sedan text-[#17313A]">
                    Perfectly controlled glass fusing and thermoforming
                  </p>
                  <p className="md:text-lg sm:text-base text-sm font-normal font-Helvetica text-[#6D6D6D] sm:mt-4 mt-3">
                    Consistency in manufacturing for more than twenty years,
                    Proven protective packaging !
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-4/12 w-full lg:mt-0 mt-6">
              <div className=" lg:text-end text-center">
                <Link className="md:text-xl sm:text-lg text-base font-normal text-white bg-[#009DD9] py-3 lg:px-12 sm:px-9 px-7  border border-[#009DD9] hover:bg-white hover:text-[#009DD9] duration-500 font-Helvetica inline-block">
                  MEET OUR EXPERTS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* !-- SUBSCRIBE TO OUR E-MAILS -- */}
      <section className="xl:mt-[150px] lg:mt-[115px] md:mt-[85px] sm:mt-[70px] mt-14">
        <div className="my_container">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <img
              className="h-7 w-6 sm:h-8 sm:w-7 md:h-9 md:w-8"
              src={blueStarRadius}
              alt="blueStarRadius"
            />
            <p className="text-lg sm:text-xl font-normal font-Helvetica text-[#2B2B2B]">
              SUBSCRIBE TO OUR E-MAILS
            </p>
            <img
              className="h-7 w-6 sm:h-8 sm:w-7 md:h-9 md:w-8"
              src={blueStarRadius}
              alt="blueStarRadius"
            />
          </div>

          <div className="flex flex-col items-center justify-center mt-5 sm:mt-7">
            <p className=" text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-Sedan text-[#17313A] leading-[1.1] sm:leading-[60px] text-center">
              OUR NEWSLETTER
            </p>
            <p className="text-base sm:text-lg md:text-xl font-normal text-[#2B2B2B] font-Helvetica mt-3 sm:mt-5 text-center px-4 sm:px-0">
              Be the first to know about new collections and exclusive offers.
            </p>

            <div className="w-full sm:w-5/6 md:w-[65%] mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-9 md:mt-12 lg:mt-15 xl:mt-[75px] px-4 sm:px-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="pt-2 pb-1 sm:pt-3 sm:pb-2 px-4 sm:px-6 md:px-8 border-2 border-[#17313A] text-[#6D6D6D] text-base sm:text-lg md:text-xl font-normal font-Helvetica w-full"
              />
              <button
                type="submit"
                className="text-lg sm:text-xl md:text-2xl font-normal text-white bg-[#009DD9] py-2 sm:pt-3 sm:pb-2 px-6 sm:px-10 md:px-14 border-2 border-[#009DD9] hover:bg-white hover:text-[#009DD9] duration-500 font-Helvetica w-full sm:w-auto text-center"
              >
                SUBSCRIBE
              </button>
            </div>

            <div className="w-full sm:w-5/6 md:w-[70%] mx-auto text-xs sm:text-sm md:text-base font-normal font-Helvetica text-[#6D6D6D] mt-3 sm:mt-4 md:mt-5 px-4 sm:px-0 text-center">
              *By clicking 'SUBSCRIBE' you agree that you have read and
              understood Verre Gallery's{" "}
              <span className="underline">Privacy Policy</span>.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
