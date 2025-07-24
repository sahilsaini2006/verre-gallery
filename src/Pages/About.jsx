import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import timelessGlasswork from "../assets/img/png/timelessGlasswork.png";
import blueStarRadius from "../assets/img/png/blueStarRadius.png";
import glassImg1 from "../assets/img/png/glassImg1.png";
import glassImg2 from "../assets/img/png/glassImg2.png";
import { Link } from "react-router-dom";
import { testimonialData } from "../components/utils/Helper";
import Testimonials from "../components/cards/Testimonials";
import Slider from "react-slick";
import BlueButton from "../components/button/BlueButton";

const About = () => {
  const sliderRef3 = useRef(null);

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

  const viewAllBtn = `text-lg sm:text-xl lg:text-2xl py-2 sm:py-2.5 lg:py-3 px-8 sm:px-12 md:px-16 lg:px-20 inline-block`;
  const meetOurExpertsBtn = `md:text-xl sm:text-lg text-base py-3 lg:px-12 sm:px-9 px-7 inline-block`;
  const subscribeBtn = `text-lg sm:text-xl md:text-2xl py-2 sm:pt-3 sm:pb-2 px-6 sm:px-10 md:px-14 inline-block w-full sm:w-auto text-center`;

  return (
    <>
      {/* !-- header section -- */}
      <header>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <div className="bg_aboutImg !flex flex-col justify-center custom_vh ">
            <div className="my_container ">
              <div className=" text-center">
                <p className="lg:text-[50px] sm:text-[38px] text-[26px] font-normal text-[#FAFAFA] font-Sedan uppercase lg:leading-[67px] sm:leading-[44px] leading-[36px]">
                  ABOUT RENAISSANCE GLASSWORKS INC
                </p>
                <p className="lg:text-xl md:text-lg sm:text-base text-sm font-Helvetica font-normal text-white md:leading-[30px] sm:leading-6 leading-5 md:mt-4 mt-3 xl:w-[72%] lg:w-[85%] w-full  m-auto">
                  Our offer is distinguished by the design, production and
                  selling of high-end, high-quality products at competitive
                  prices, enriched by a high content of recycled material, 100%
                  reusable/transformable/recyclable and timeless: Offering added
                  value and peace of mind for our customers, while building a
                  bond of trust based on our values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* !-- TIMELESS GLASSWORKS -- */}
      <section className="xl:mt-[150px] lg:mt-[115px] md:mt-[85px] sm:mt-[70px] mt-14">
        <div className="my_container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-full lg:w-[74%] gap-4 md:gap-5 lg:gap-6">
              <img
                className="w-8 sm:w-11 md:w-14 lg:w-16 mt-2 sm:mt-3"
                src={blueStarRadius}
                alt="blueStarRadius"
              />
              <h1 className="text-xl sm:text-[26px] md:text-[34px] lg:text-[42px] xl:text-[50px] text-[#17313A] font-Sedan leading-[1.2] text-center">
                We Are A Canadian Brand, and all our products are manufactured
                in Canada
              </h1>
              <img
                className="w-8 sm:w-11 md:w-14 lg:w-16 mt-2 sm:mt-3"
                src={blueStarRadius}
                alt="blueStarRadius"
              />
            </div>

            <p className=" text-base sm:text-lg lg:text-xl font-normal font-Helvetica text-[#2B2B2B] mt-6 sm:mt-7 w-full lg:w-[75%] text-center">
              RENAISSANCE GLASSWORKS has been creating and selling its glass
              products around the world for 25 years now. Our striking, stylish
              wash basins, often mounted on an elegant glass column, and our
              textured glass accessories and custom countertops and back
              splashes are among our best-selling creations.
            </p>
          </div>

          {/* Content Section */}
          <div className="flex items-center lg:justify-between justify-center flex-wrap lg:flex-row flex-col-reverse xl:mt-[150px] lg:mt-[115px] md:mt-[85px] sm:mt-[70px] mt-14">
            <div className="w-full lg:w-[45%] lg:mt-0 mt-9 px-4 sm:px-6 lg:px-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  className="h-7 w-6 sm:h-8 sm:w-7 lg:h-9 lg:w-8"
                  src={blueStarRadius}
                  alt="blueStarRadius"
                />
                <p className="text-base sm:text-lg md:text-xl font-normal font-Helvetica text-[#2B2B2B]">
                  TIMELESS GLASSWORKS
                </p>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#17313A] font-Sedan mt-5 lg:mt-7">
                Artistry in Glass, Elevating Your Spaces
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-normal text-[#2B2B2B] font-Helvetica mt-5 sm:mt-6 lg:mt-7">
                We specialize in creating exquisite glass basins and accessories
                for bathroom that blend artistry with functionality. Whether
                you're looking for a sleek modern touch or a unique handcrafted
                masterpiece, our commitment to precision and excellence ensures
                that every product reflects sophistication and elegance.
              </p>
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

      {/* !-- OUR STORY -- */}
      <section className="xl:mt-[150px] lg:mt-[115px] md:mt-[85px] sm:mt-[70px] mt-14">
        <div className="my_container">
          <div className="flex items-end lg:justify-between justify-center flex-wrap lg:flex-row flex-col ">
            <div className="lg:w-6/12 md:w-10/12 sm:w-11/12 w-full px-3">
              <div className="w-full flex items-end justify-between">
                <div className="w-7/12 px-2">
                  <img className="w-full" src={glassImg1} alt="glassImg1" />
                </div>
                <div className="w-5/12 px-2">
                  <img className="w-full" src={glassImg2} alt="glassImg2" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] lg:mt-0 mt-9 px-4 sm:px-6 lg:px-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  className="h-7 w-6 sm:h-8 sm:w-7 lg:h-9 lg:w-8"
                  src={blueStarRadius}
                  alt="blueStarRadius"
                />
                <p className="text-base sm:text-lg md:text-xl font-normal font-Helvetica text-[#2B2B2B]">
                  OUR STORY
                </p>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#17313A] font-Sedan mt-3 sm:mt-5 lg:mt-7">
                A Passion for Glass, A Legacy of Artistry
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-normal text-[#2B2B2B] font-Helvetica mt-3 sm:mt-5 lg:mt-7">
                Verre Gallery was founded to bring finely crafted glass art to
                those who appreciate elegance and quality. We work with skilled
                artisans and innovative designers to curate collections that
                reflect both classic and modern sensibilities, ensuring that
                every piece tells a unique story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* !-- Our Commitment to Quality & Craftsmanship -- */}

      <section className="xl:mt-[170px] lg:mt-[135px] md:mt-[105px] sm:mt-[80px] mt-[60px] ">
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
      </section>

      {/* !-- Why Choose Verre Gallery -- */}
      {/* <section className="xl:mt-[150px] lg:mt-[115px] md:mt-[85px] sm:mt-[70px] mt-14">
        <div className="my_container">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <img src={blueStarRadius} alt="" />
              <p className="lg:text-[50px] sm:text-[38px] text-[26px] font-normal leading-[70px] text-[#17313A] font-Sedan">
                Why Choose Verre Gallery
              </p>
              <img src={blueStarRadius} alt="" />
            </div>
            <p className="text-xl font-normal font-Helvetica text-[#2B2B2B] mt-3">
              At Verre Gallery, we invite you to explore the world of fine
              glassware and discover pieces that bring elegance to your home,
              and lifestyle.
            </p>
          </div>

          <div className="flex justify-between mt-[85px]">
            <div className="w-6/12 px-4">
              <div className="flex items-center gap-5">
                <div>
                  <img src={innovation} alt="innovation" />
                </div>
                <div>
                  <p className="text-4xl font-normal text-[#17313A] leading-[50px] font-Sedan">
                    Innovation and new products
                  </p>
                  <p className="text-lg font-normal text-[#2B2B2B] font-Helvetica">
                    We offer the largest choice of wash basins with a wide
                    variety of unique accessories for the bathroom.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-[70px]">
                <div>
                  <img src={timeLessImg} alt="timeLessImg" />
                </div>
                <div>
                  <p className="text-4xl font-normal text-[#17313A] leading-[50px] font-Sedan">
                    Timeless & Antibacterial Designs
                  </p>
                  <p className="text-lg font-normal text-[#2B2B2B] font-Helvetica">
                    We offer the largest choice of wash basins with a wide
                    variety of unique accessories for the bathroom.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-6/12 px-4">
              <div className="flex items-center gap-5">
                <div>
                  <img className="w-[70px]" src={foreverImg} alt="foreverImg" />
                </div>
                <div>
                  <p className="text-4xl font-normal text-[#17313A] leading-[50px] font-Sedan">
                    Forever environment friendly
                  </p>
                  <p className="text-lg font-normal text-[#2B2B2B] font-Helvetica">
                    No chemicals, We prioritize eco-friendly practices and
                    responsible sourcing.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-[70px]">
                <div>
                  <img
                    className="w-[105px] h-[70px]"
                    src={porousGlass}
                    alt="porousGlass"
                  />
                </div>
                <div>
                  <p className="text-4xl font-normal text-[#17313A] leading-[50px] font-Sedan">
                    Non-porous glass
                  </p>
                  <p className="text-lg font-normal text-[#2B2B2B] font-Helvetica">
                    Our thermo formed glass is impervious to fingerprints and
                    water marks, compared to standard translucent glass. Just
                    try it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
            <div className="xl:mt-[57px] lg:mt-[48px] md:mt-10 mt-7 text-center">
              <BlueButton btnText="VIEW ALL" style={viewAllBtn} />
            </div>
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
                <BlueButton
                  btnText="MEET OUR EXPERTS"
                  style={meetOurExpertsBtn}
                />
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
              <BlueButton
                type="submit"
                btnText="SUBSCRIBE"
                style={subscribeBtn}
              />
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

export default About;
