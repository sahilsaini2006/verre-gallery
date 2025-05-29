import React from "react";
import NavBar from "../components/NavBar";
import blueStarRadius from "../assets/img/png/blueStarRadius.png";
import rightArrowImg from "../assets/img/png/rightArrowImg.png";
import Accordion from "../components/accordion/accordion";

const Contact = () => {
  return (
    <>
      {/* Need assistance? */}
      <section>
        <NavBar />
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="my_container">
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17313A] font-Sedan mt-5 lg:mt-7 uppercase">
                We are here to help
              </h1>
            </div>

            <form action="">
              <div className="flex items-center w-full md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 m-auto justify-between flex-wrap mt-8 sm:mt-10 md:mt-12 lg:mt-[75px]">
                <div className="w-full sm:w-6/12 px-2 sm:px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border outline-0 w-full py-2 sm:pt-2 sm:pb-3 px-4 sm:px-6 text-[#6D6D6D] text-base sm:text-lg md:text-xl font-Helvetica"
                  />
                </div>
                <div className="w-full sm:w-6/12 px-2 sm:px-3 mt-4 sm:mt-0">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="border outline-0 w-full py-2 sm:pt-2 sm:pb-3 px-4 sm:px-6 text-[#6D6D6D] text-base sm:text-lg md:text-xl font-Helvetica"
                  />
                </div>
                <div className="w-full px-2 sm:px-3 mt-4 sm:mt-6">
                  <input
                    type="text"
                    name="text"
                    placeholder="Subject"
                    className="border outline-0 w-full py-2 sm:pt-2 sm:pb-3 px-4 sm:px-6 text-[#6D6D6D] text-base sm:text-lg md:text-xl font-Helvetica"
                  />
                </div>
                <div className="w-full px-2 sm:px-3 mt-4 sm:mt-6">
                  <textarea
                    name=""
                    id=""
                    placeholder="Message"
                    className="border outline-0 w-full py-2 sm:pt-2 sm:pb-3 px-4 sm:px-6 text-[#6D6D6D] text-base sm:text-lg md:text-xl font-Helvetica h-32 sm:h-40"
                  ></textarea>
                </div>
              </div>

              <div className="text-center mt-8 sm:mt-10 md:mt-12">
                <button
                  type="submit"
                  className="text-lg sm:text-xl md:text-2xl font-Helvetica text-white bg-[#009DD9] py-2 sm:pt-[10px] sm:pb-[8px] px-8 sm:px-10 md:px-12 lg:px-[50px] inline-block"
                >
                  SEND YOUR MESSAGE
                </button>
                <p className="text-sm sm:text-base font-normal font-Helvetica text-[#6D6D6D] mt-2 sm:mt-3  px-4">
                  If you have any questions, you can take a look at our FAQ's.
                  Another request? Our team is at your disposal to answer it.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="mt-10 sm:mt-[52px] md:mt-[70px] lg:mt-[100px]">
        <div className="my_container">
          <div className="flex flex-col sm:flex-row justify-between lg:gap-0 gap-4 flex-wrap">
            {/* First Card */}
            <div className="w-full lg:w-6/12 px-2 sm:px-3">
              <div className="flex items-center justify-between bg-[#F8F8F8] px-4 sm:px-7 py-4 sm:py-6">
                <div className="flex items-center gap-3 sm:gap-5">
                  <img
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                    src={blueStarRadius}
                    alt=""
                  />
                  <div>
                    <p className="text-xl sm:text-3xl md:text-4xl xl:text-5xl font-Sedan text-[#17313A]">
                      Returns & Refunds
                    </p>
                    <p className="text-xs sm:text-sm font-Helvetica text-[#6D6D6D] mt-1 sm:mt-2">
                      Understand Our Easy & Transparent Return and Refund Policy
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="h-10 w-12 sm:h-14 sm:w-14 md:h-17 md:w-17"
                    src={rightArrowImg}
                    alt="rightArrowImg"
                  />
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="w-full lg:w-6/12 px-2 sm:px-3">
              <div className="flex items-center justify-between bg-[#F8F8F8] px-4 sm:px-7 py-4 sm:py-6">
                <div className="flex items-center gap-3 sm:gap-5">
                  <img
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                    src={blueStarRadius}
                    alt=""
                  />
                  <div>
                    <p className="text-xl sm:text-3xl md:text-4xl xl:text-5xl font-Sedan text-[#17313A]">
                      Shipping Policy
                    </p>
                    <p className="text-xs sm:text-sm font-Helvetica text-[#6D6D6D] mt-1 sm:mt-2">
                      Get the Details on Our Reliable & Efficient Shipping
                      Policy
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="h-10 w-12 sm:h-14 sm:w-14 md:h-17 md:w-17"
                    src={rightArrowImg}
                    alt="rightArrowImg"
                  />
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

            {/* Main Heading */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17313A] font-Sedan mt-4 xs:mt-5 sm:mt-6 lg:mt-7 uppercase tracking-wide">
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </div>

          {/* Accordion Container */}
          <div className=" mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-[100px]">
            <Accordion />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
