import React, { useRef, useState } from "react";
import NavBar from "../components/NavBar";
import { productData3, testimonialData } from "../components/utils/Helper";
import Testimonials from "../components/cards/Testimonials";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BasinProduct from "../components/cards/BasinProduct";
import blueStarRadius from "../assets/img/png/blueStarRadius.png";
import BlueButton from "../components/button/BlueButton";
import smallBasin1 from "../assets/img/svg/smallBasin1.svg";
import smallBasin2 from "../assets/img/svg/smallBasin2.svg";
import smallBasin3 from "../assets/img/svg/smallBasin3.svg";
import smallBasin4 from "../assets/img/svg/smallBasin4.svg";
import smallBasinDrow from "../assets/img/svg/smallBasinDrow.svg";
import ratingStar from "../assets/img/png/ratingStar.png";
import colorImg from "../assets/img/png/colorImg.png";
import ProductAccrodion from "../components/accordion/ProductAccrodion";
import Accordion from "../components/accordion/Accordion";
import rightArrowImg from "../assets/img/png/rightArrowImg.png";

const Product = () => {
  const images = [
    smallBasin1,
    smallBasin2,
    smallBasin3,
    smallBasin4,
    smallBasinDrow,
  ];
  const sliderRef4 = useRef(null);
  const sliderRef5 = useRef(null);

  const [isActive, setIsActive] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

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

  //  ----------------- button ----------------
  const shopBtn = `text-base sm:text-lg md:text-xl py-2 sm:py-3 md:py-4 px-4 md:px-6 inline-block `;
  const buyBtn = `w-full py-2 sm:text-lg text-base font-semibold lg:mt-9 sm:mt-4 mt-3 `;
  const parentCss = `xl:w-[70%] lg:w-[80%] sm:w-[90%] w-full m-auto`;

  // ---------------- img on click --------------------

  const handleClick = (index) => {
    setSelectedImage(images[index]);
    setIsActive(index);
  };
  return (
    <>
      <section>
        <NavBar />
        <div className="mt-[100px]">
          <div className="my_container">
            <div className="flex justify-between flex-wrap">
              <div className="w-7/12 px-4">
                <div className="flex justify-between gap-7">
                  <div className="w-2/12 flex flex-col gap-2">
                    {images.map((img, index) => (
                      <div key={index}>
                        <img
                          src={img}
                          alt={`basin${index}`}
                          onClick={() => handleClick(index)}
                          className={`w-20 h-24 p-1 object-contain cursor-pointer
                      ${
                        isActive === index
                          ? "border-1 border-black rounded-md"
                          : ""
                      }`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="w-10/12">
                    <img
                      src={selectedImage}
                      alt="bigProduct"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <ProductAccrodion />
                </div>
              </div>

              <div className="w-5/12 px-4">
                <div>
                  <p className="text-3xl font-semibold text-[#17313A] w-[90%] font-Helvetica">
                    ROUND Basin - on small pedestal with wrought iron support
                  </p>
                  <p className="text-xl text-[#6D6D6D] font-Helvetica mt-2">
                    LAS1O1
                  </p>
                  <div className="flex justify-between items-center mt-8">
                    <p className="text-3xl font-semibold text-[#2B2B2B] font-Helvetica">
                      $ 5,495.00
                    </p>
                    <div className="flex justify-between gap-3 items-center">
                      <img className="w-45" src={ratingStar} alt="ratingStar" />
                      <p className="text-[#2B2B2B] text-2xl font-normal font-Helvetica">
                        6.8k
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#6D6D6D] mt-12 pt-10">
                    <h2 className="text-2xl font-normal font-Helvetica text-[#2B2B2B]">
                      Description:
                    </h2>
                    <p className="text-lg font-normal font-Helvetica text-[#6D6D6D] mt-3">
                      3/4’’ (18mm) thick
                    </p>
                    <p className="text-lg font-normal font-Helvetica text-[#6D6D6D]">
                      Round basin on small pedestal
                    </p>
                    <p className="text-lg font-normal font-Helvetica text-[#6D6D6D]">
                      with wrought iron support
                    </p>
                  </div>
                  <div className="mt-10">
                    <h2 className="text-2xl font-normal font-Helvetica text-[#2B2B2B]">
                      Trim finish:
                    </h2>
                    <p className="text-lg font-normal font-Helvetica text-[#6D6D6D] mt-3">
                      Gold – Chrome – Brushed nickel – Satin
                    </p>
                    <p className="text-lg font-normal font-Helvetica text-[#6D6D6D]">
                      gold Copper un-plated to paint
                    </p>
                  </div>
                  <div className="mt-10">
                    <h2 className="text-2xl font-normal font-Helvetica text-[#2B2B2B]">
                      Standards:
                    </h2>
                    <p className="text-lg font-normal font-Helvetica text-[#6D6D6D] mt-3">
                      # can CGSB 12.1 – M96
                    </p>
                    <p className="text-lg font-normal font-Helvetica text-[#6D6D6D]">
                      # ansi 297.1 – 1984
                    </p>
                    <p className="text-lg font-normal font-Helvetica text-[#6D6D6D]">
                      # cps 16-CE1201C11
                    </p>
                  </div>
                  <div className="border-t border-[#6D6D6D] mt-10 pt-8">
                    <h2 className="text-2xl font-normal font-Helvetica text-[#2B2B2B]">
                      Select Color:
                    </h2>
                    <img
                      className="w-[80%] mt-4"
                      src={colorImg}
                      alt="colorImg"
                    />
                    <div>
                      <button className="w-full py-2 border border-[#2B2B2B] sm:text-xl text-base font-normal font-Helvetica text-[sm:mt-4 mt-3] mt-10">
                        ADD TO CART
                      </button>
                    </div>
                    <div>
                      <BlueButton btnText="BUY NOW" style={buyBtn} />
                    </div>
                  </div>

                  <div className="bg-[#F8F8F8] py-10 px-12 flex iteam-center justify-between mt-14">
                    <div className="flex iteam-center gap-2">
                      <div>
                        <img src={blueStarRadius} alt="blueStarRadius" />
                      </div>
                      <div>
                        <p className="text-4xl font-normal font-Sedan text-[#17313A]">
                          INSPIRATION
                        </p>
                        <p className="text-[#6D6D6D] text-base font-Helvetica font-normal">
                          Personalize your decor - Start designing
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        className="w-15"
                        src={rightArrowImg}
                        alt="rightArrowImg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* !-- Product Reviews -- */}
      <section className="xl:mt-[150px] lg:mt-[115px] md:mt-[85px] sm:mt-[70px] mt-14">
        <div className="my_container">
          <div className="text-center xl:mb-12 lg:mb-9 mb-6">
            <h1 className="text-5xl font-Sedan font-normal text-[#17313A]">
              Product Reviews
            </h1>
          </div>
          <div className="testimonal_slider1">
            <div className="flex flex-wrap lg:justify-between justify-center xxl:w-[85%] xl:w-full m-auto">
              {testimonialData.map((item, index) => (
                <Testimonials key={index} testi={item} />
              ))}
            </div>
          </div>
          <div className="testimonal_slider2">
            <Slider ref={sliderRef4} {...testimonialSlider}>
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
                onClick={() => sliderRef4.current?.slickPrev()}
                className="text-[#17313A] md:pt-5 sm:pt-3 pt-1 md:pb-5 sm:pb-4 pb-2 md:px-7 sm:px-6 px-[14px] border border-[#17313A] rounded-[50%] cursor-pointer"
              >
                <span className="text-3xl">{"<"}</span>
              </button>
              <button
                onClick={() => sliderRef4.current?.slickNext()}
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

      {/* !-- You May Also Like -- */}
      <section className="xl:mt-[150px] lg:mt-[115px] md:mt-[85px] sm:mt-[70px] mt-14">
        <div className="my_container">
          <div className="flex items-center sm:flex-row flex-col justify-between lg:mb-[64px] md:mb-[54px] sm:mb-[46px] mb-[38px]">
            <p className="xl:text-[65px] lg:text-[52px] md:text-[44px] sm:text-4xl text-3xl font-normal font-Sedan text-[#17313A]">
              You May Also Like
            </p>
            <Link
              to=""
              className="md:text-2xl sm:text-xl text-base  font-normal text-[#2B2B2B] font-Helvetica flex sm:gap-5 gap-3 sm:mt-0 mt-3 items-center"
            >
              <span className="underline underline-offset-8">VIEW ALL</span>
              <span className="text">{">"}</span>
            </Link>
          </div>

          <Slider ref={sliderRef5} {...cardSliderSettings}>
            {productData3.map((item, index) => (
              <div key={index} className="px-4 h-full">
                <div className="h-full flex ">
                  <BasinProduct mapData={item} />
                </div>
              </div>
            ))}
          </Slider>

          <div className="flex items-center justify-center md:gap-7 gap-5 lg:mt-[75px] md:mt-[60px] sm:mt-[44px] mt-[30px]">
            <button
              onClick={() => sliderRef5.current?.slickPrev()}
              className="text-[#17313A] md:py-5 sm:py-4 py-2 md:px-7 sm:px-6 px-4 border border-[#17313A] rounded-[50%] cursor-pointer"
            >
              <span className="text-3xl">{"<"}</span>
            </button>
            <button
              onClick={() => sliderRef5.current?.slickNext()}
              className="text-[#17313A] md:py-5 sm:py-4 py-2 md:px-7 sm:px-6 px-4 border border-[#17313A] rounded-[50%] cursor-pointer"
            >
              <span className="text-3xl">{">"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* !-- view products */}
      <section className="xl:mt-[150px] lg:mt-[115px] md:mt-[85px] sm:mt-[70px] mt-14">
        <div className="my_container">
          <div className="flex flex-col md:flex-row justify-between ">
            {/* Left column - Basin (full width on mobile, 7/12 on larger screens) */}
            <div className="w-full md:w-7/12 px-3 sm:px-3">
              <div className="productBasin h-[300px] md:h-full ">
                <div className="flex flex-col justify-end p-5 md:p-7 lg:p-9 h-full">
                  <p className="text-white text-xl md:text-[22px] lg:text-[26px] font-Sedan">
                    BASIN
                  </p>
                  <div className="md:mt-5 sm:mt-4 mt-3">
                    <BlueButton btnText="VIEW PRODUCTS" style={shopBtn} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right column (full width on mobile, 5/12 on larger screens) */}
            <div className="w-full md:w-5/12 px-3 sm:px-3">
              {/* Top item in right column - Pedestal */}
              <div className="pedestalBasin h-[200px] sm:h-[250px] md:h-full mb-4 sm:mb-7">
                <div className="h-full flex flex-col justify-end p-5 md:p-7 lg:p-9">
                  <p className="text-white text-xl md:text-[22px] lg:text-[26px] font-Sedan">
                    PEDESTAL
                  </p>
                  <div className="md:mt-5 sm:mt-4 mt-3">
                    <BlueButton btnText="VIEW PRODUCTS" style={shopBtn} />
                  </div>
                </div>
              </div>

              {/* Bottom item in right column - Undermount */}
              <div className="undermountImg h-[200px] sm:h-[250px] md:h-full">
                <div className="h-full flex flex-col justify-end p-5 md:p-7 lg:p-9">
                  <p className="text-white text-xl md:text-[22px] lg:text-[26px] font-Sedan">
                    UNDERMOUNT
                  </p>
                  <div className="md:mt-5 sm:mt-4 mt-3">
                    <BlueButton btnText="VIEW PRODUCTS" style={shopBtn} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* !-- Find Answers to Common Questions -- */}
      <section className="mt-14 sm:mt-[70px] md:mt-[85px] lg:mt-[115px] xl:mt-[150px]">
        <div className="my_container">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-5">
              <img
                className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-6 md:h-8 md:w-7 lg:h-9 lg:w-8"
                src={blueStarRadius}
                alt="Decorative star"
                loading="lazy"
              />
              <p className="text-base xs:text-lg sm:text-xl font-normal font-Helvetica text-[#2B2B2B]">
                Find Answers to Common Questions
              </p>
              <img
                className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-6 md:h-8 md:w-7 lg:h-9 lg:w-8"
                src={blueStarRadius}
                alt="Decorative star"
                loading="lazy"
              />
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17313A] font-Sedan mt-4 xs:mt-5 sm:mt-6 lg:mt-7 uppercase tracking-wide">
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </div>

          <div className=" mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-[100px]">
            <Accordion accordionStyle={parentCss} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
