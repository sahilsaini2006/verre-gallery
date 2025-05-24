import React from "react";
import { Link } from "react-router-dom";
import blueStar from "../assets/img/png/blueStars.png";
import blueWhiteHeart from "../assets/img/png/blueWhiteHeart.png"

const BasinProduct = ({ mapData }) => {
  return (
    <>
      <Link to="/Details">
        <div className="flex justify-between flex-col h-full">
          <div className="overflow-hidden rounded-[10px]">
            <img
              className="w-full hover:scale-[1.1] duration-500"
              src={mapData.img}
              alt="img1"
            />
          </div>
          <div className="flex justify-between flex-col mt-8">
            <div>
              <p className="md:text-[21px] text-lg font-bold font-Helvetica  text-[#17313A]">
                {mapData.heading}
              </p>
              <p className="md:text-lg text-base text-[#6D6D6D] font-medium mt-3">
                {mapData.description}
              </p>
            </div>
            <p className="md:text-[24px] text-xl font-bold  text-[#17313A] md:mt-6 mt-4">
              {mapData.price}
            </p>
            <div className="flex items-center gap-4 md:mt-5 mt-3">
              <div>
                <img
                  className="sm:w-[150px] w-[120px]"
                  src={blueStar}
                  alt="blueStar"
                />
              </div>
              <p className="text-xl font-normal text-[#2B2B2B] ">
                {mapData.views}
              </p>
            </div>

            <div className="flex items-center justify-between gap-5 md:mt-6 mt-4">
              <button className="text-xl font-normal font-Helvetica border-2 border-[#17313A] md:py-3 py-[10px] w-full cursor-pointer">
                Add to Cart
              </button>
              <button className="cursor-pointer">
                <img
                  className="md:h-[55px] h-[50px] md:w-[70px] w-[60px]"
                  src={blueWhiteHeart}
                  alt="blueWhiteHeart"
                />
              </button>
            </div>
            <div className="lg:mt-8 sm:mt-6 mt-4">
              <img src={mapData.colorOption} alt="colorOption" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BasinProduct;



