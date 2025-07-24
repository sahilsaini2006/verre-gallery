import React from "react";
import blueStar5 from "../../assets/img/png/5blueStar.png";

const Testimonials = ({ testi }) => {
  return (
    <div className="lg:w-4/12 sm:w-6/12 md:px-4 px-3 xl:mt-8 mt-7">
      <div className="h-full flex flex-col justify-between">
        <div>
          <p className="md:text-xl text-lg text-[#2B2B2B] italic lg:mb-6 sm:mb-3 mb-0">“{testi.text}”</p>
        </div>
        <div className="lg:mt-7 sm:mt-5 mt-4">
          <span className="border-7 border-[#B1EAFF] inline-block w-full"></span>
          <div className="flex items-center justify-between lg:mt-5 mt-3">
            <div className="flex items-center gap-2">
              <img
                src={testi.authorImages}
                alt={testi.name}
                className="w-10 h-12 rounded-full"
              />
              <span className="md:text-xl sm:text-lg text-base font-medium font-sans">
                {testi.name}
              </span>
            </div>
            <img
              className="xl:h-6 xl:w-[175px] md:w-[140px] sm:w-[120px] w-[90px] ml-3"
              src={blueStar5}
              alt="blueStar5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
