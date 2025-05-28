import React from "react";
import NavBar from "../components/NavBar";
import blueStarRadius from "../assets/img/png/blueStarRadius.png";
import rightArrowImg from "../assets/img/png/rightArrowImg.png"

const Contact = () => {
  return (
    <>
      {/* Need assistance? */}
      <section>
        <NavBar />
        <div className="mt-[90px]">
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
              <div className="flex items-center w-[75%] m-auto justify-between flex-wrap mt-[75px]">
                <div className="w-6/12 px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border outline-0 w-full pt-2 pb-3 px-6 text-[#6D6D6D] text-xl font-Helvetica"
                  />
                </div>
                <div className="w-6/12 px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="border outline-0 w-full pt-2 pb-3 px-6 text-[#6D6D6D] text-xl font-Helvetica"
                  />
                </div>
                <div className="w-full px-3 mt-6">
                  <input
                    type="text"
                    name="text"
                    placeholder="Subject"
                    className="border outline-0 w-full pt-2 pb-3 px-6 text-[#6D6D6D] text-xl font-Helvetica"
                  />
                </div>
                <div className="w-full px-3 mt-6">
                  <textarea
                    name=""
                    id=""
                    placeholder="Message"
                    className="border outline-0 w-full pt-2 pb-3 px-6 text-[#6D6D6D] text-xl font-Helvetica"
                  ></textarea>
                </div>
              </div>
              <div className="text-center mt-13">
                <button
                  type="submit"
                  className="text-2xl font-Helvetica text-white bg-[#009DD9] pt-[10px] pb-[8px] px-[50px] inline-block"
                >
                  SEND YOUR MESSAGE
                </button>
                <p className="text-base font-normal font-Helvetica text-[#6D6D6D] mt-3">
                  If you have any questions, you can take a look at our FAQ’s.
                  Another request? Our team is at your disposal to answer it.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="lg:mt-[100px] md:mt-[70px] sm:mt-[52px] mt-10">
        <div className="my_container">
          <div className="flex justify-between">
            <div className="w-6/12 px-4">
              <div className="flex items-center justify-between bg-[#F8F8F8] px-7 py-6">
                <div className="flex items-center gap-5">
                  <img className="h-7 w-7" src={blueStarRadius} alt="" />
                  <div>
                    <p className="text-5xl font-Sedan text-[#17313A]">
                      Returns & Refunds
                    </p>
                    <p className="text-sm font-Helvetica text-[#6D6D6D] mt-2">
                      Understand Our Easy & Transparent Return and Refund Policy
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="h-17 w-17"
                    src={rightArrowImg}
                    alt="rightArrowImg"
                  />
                </div>
              </div>
            </div>

            <div className="w-6/12 px-4">
              <div className="flex items-center justify-between bg-[#F8F8F8] px-7 py-6">
                <div className="flex items-center gap-5">
                  <img className="h-7 w-7" src={blueStarRadius} alt="" />
                  <div>
                    <p className="text-5xl font-Sedan text-[#17313A]">
                      Shipping Policy
                    </p>
                    <p className="text-sm font-Helvetica text-[#6D6D6D] mt-2">
                      Get the Details on Our Reliable & Efficient Shipping
                      Policy
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    className="h-17 w-17"
                    src={rightArrowImg}
                    alt="rightArrowImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
