import React from "react";
import freeDelivery from "../assets/img/svg/freeDelivery.svg";
import satisfiedRefund from "../assets/img/svg/satisfiedRefund.svg";
import dimaondIcon from "../assets/img/svg/Dimond_alt_light.svg";
import lockImg from "../assets/img/svg/Lock.svg";
import Slider from "react-slick";

const Services = () => {
  const servivesSetting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 639.99,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="xl:mt-[100px] lg:mt-[75px] md:mt-[55px] sm:mt-[46px] mt-8">
        <div className="bg-[#2B2B2B] py-[60px]">
          <div className="my_container">
            <div className="md:block hidden">
              <div className="flex justify-between flex-wrap">
                <div className="xl:w-3/12 md:w-5/12 sm:w-6/12 w-full px-3">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div>
                      <img
                        className="w-14 inline-block"
                        src={freeDelivery}
                        alt="freeDelivery"
                      />
                    </div>
                    <p className="md:text-2xl text-xl font-Helvetica text-[#DFCEBC] font-normal md:mt-5 sm:mt-4 mt-3">
                      FREE DELIVERY
                    </p>
                    <p className="md:text-xl text-base font-normal font-Helvetica text-[#FAFAFA] md:mt-3 mt-2 md:w-[80%] w-full">
                      DHL express delivery worldwide
                    </p>
                  </div>
                </div>
                <div className="xl:w-3/12 md:w-5/12 sm:w-6/12 w-full px-3 sm:mt-0 mt-7">
                  <div className="flex flex-col items-center justify-center text-center">
                    <img
                      className="w-14"
                      src={satisfiedRefund}
                      alt="satisfiedRefund"
                    />
                    <p className="md:text-2xl text-xl font-Helvetica text-[#DFCEBC] font-normal md:mt-5 sm:mt-4 mt-3">
                      SATISFIED OR REFUND
                    </p>
                    <p className="md:text-xl text-base font-normal font-Helvetica text-[#FAFAFA] md:mt-3 mt-2 md:w-[80%] w-full">
                      Genuine returns & refunds process
                    </p>
                  </div>
                </div>
                <div className="xl:w-3/12 md:w-5/12 sm:w-6/12 w-full px-3 xl:mt-0 mt-7">
                  <div className="flex flex-col items-center justify-center text-center">
                    <img className="w-14" src={dimaondIcon} alt="dimaondIcon" />
                    <p className="md:text-2xl text-xl font-Helvetica text-[#DFCEBC] font-normal md:mt-5 sm:mt-4 mt-3">
                      LIFETIME WARRANTY
                    </p>
                    <p className="md:text-xl text-base font-normal font-Helvetica text-[#FAFAFA] md:mt-3 mt-2 md:w-[80%] w-full">
                      Lifetime warranty on discoloration & themal shocks
                    </p>
                  </div>
                </div>
                <div className="xl:w-3/12 md:w-5/12 sm:w-6/12 w-full px-3 xl:mt-0 mt-7">
                  <div className="flex flex-col items-center justify-center text-center">
                    <img className="w-14" src={lockImg} alt="lockImg" />
                    <p className="md:text-2xl text-xl font-Helvetica text-[#DFCEBC] font-normal md:mt-5 sm:mt-4 mt-3">
                      SECURE PAYMENTS
                    </p>
                    <p className="md:text-xl text-base font-normal font-Helvetica text-[#FAFAFA] md:mt-3 mt-2 md:w-[80%] w-full">
                      DHL express delivery worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden block px-2 services_slider">
              <Slider {...servivesSetting}>
                <div className="px-3">
                  <div className=" text-center">
                    <img
                      className="w-14 mx-auto"
                      src={freeDelivery}
                      alt="Free Delivery"
                    />
                    <p className="text-xl font-Helvetica text-[#DFCEBC] font-normal mt-4">
                      FREE DELIVERY
                    </p>
                    <p className="text-base font-normal font-Helvetica text-[#FAFAFA] mt-2">
                      DHL express delivery worldwide
                    </p>
                  </div>
                </div>
                <div className="px-3">
                  <div className=" text-center">
                    <img
                      className="w-14 mx-auto"
                      src={satisfiedRefund}
                      alt="Satisfied Refund"
                    />
                    <p className="text-xl font-Helvetica text-[#DFCEBC] font-normal mt-4">
                      SATISFIED OR REFUND
                    </p>
                    <p className="text-base font-normal font-Helvetica text-[#FAFAFA] mt-2">
                      Genuine returns & refunds process
                    </p>
                  </div>
                </div>
                <div className="px-3">
                  <div className=" text-center">
                    <img
                      className="w-14 mx-auto"
                      src={dimaondIcon}
                      alt="Lifetime Warranty"
                    />
                    <p className="text-xl font-Helvetica text-[#DFCEBC] font-normal mt-4">
                      LIFETIME WARRANTY
                    </p>
                    <p className="text-base font-normal font-Helvetica text-[#FAFAFA] mt-2">
                      Lifetime warranty on discoloration & thermal shocks
                    </p>
                  </div>
                </div>
                <div className="px-3">
                  <div className=" text-center">
                    <img
                      className="w-14 mx-auto"
                      src={lockImg}
                      alt="Secure Payments"
                    />
                    <p className="text-xl font-Helvetica text-[#DFCEBC] font-normal mt-4">
                      SECURE PAYMENTS
                    </p>
                    <p className="text-base font-normal font-Helvetica text-[#FAFAFA] mt-2">
                      DHL express delivery worldwide
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
