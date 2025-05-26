import React from "react";
import NavBar from "../components/NavBar";

const About = () => {
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
                <p className="sm:text-xl text-lg font-Helvetica font-normal text-white leading-[30px] md:mt-4 mt-3 w-[72%] m-auto">
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
    </>
  );
};

export default About;
