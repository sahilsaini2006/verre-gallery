import React from "react";
import footerLogo from "../assets/img/svg/footerLogo.svg";
import { Link } from "react-router-dom";
import facebookImg from "../assets/img/svg/facebookImg.svg";
import instagramImg from "../assets/img/svg/InstagramImg.svg";
import youtubeImg from "../assets/img/svg/youtubeImg.svg";
import xtwitterImg from "../assets/img/svg/xtwitterImg.svg";
import usaflag from "../assets/img/svg/USAflag.svg";
import paymentImg from "../assets/img/svg/paymentImg.svg";
import Services from "../Pages/Services";
const Footer = () => {
  return (
    <>
      <footer>
        {/* ----- services ----- */}
        <Services />

        <div className="bg-[#FAFAFA] xl:py-[90px] md:mt-[75px] sm:mt-[54px] mt-12">
          <div className="my_container">
            <div className="flex justify-between flex-wrap">
              <div className="xl:w-3/12 sm:w-6/12 w-full xl:px-3 ps-3 pe-6 order-1">
                <Link className="inline-block">
                  <img src={footerLogo} alt="footerLogo" />
                </Link>
                <div className="sm:block hidden">
                  <div className="flex items-center gap-7 xl:mt-14 lg:mt-11 md:mt-8 sm:mt-6 mt-4">
                    <div>
                      <Link>
                        <img
                          className="md:w-8 w-6 hover:scale-120"
                          src={facebookImg}
                          alt="facebookImg"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link>
                        <img
                          className="md:w-8 w-6 hover:scale-120"
                          src={instagramImg}
                          alt="instagramImg"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link>
                        <img
                          className="md:w-8 w-6 hover:scale-120"
                          src={youtubeImg}
                          alt="youtubeImg"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link>
                        <img
                          className="md:w-8 w-6 hover:scale-120"
                          src={xtwitterImg}
                          alt="xtwitterImg"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="xl:mt-14 lg:mt-11 md:mt-8 mt-6">
                    <p className="lg:text-2xl md:text-xl sm:text-lg text-base font-Helvetica font-normal text-[#17313A]">
                      PHONE:
                    </p>
                    <p className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] md:mt-3 mt-2">
                      +1 888 414-4022 opt. 2
                    </p>

                    <p className="lg:text-2xl md:text-xl sm:text-lg text-base font-Helvetica font-normal text-[#17313A] lg:mt-10 md:mt-7 mt-5">
                      EMAIL:
                    </p>
                    <p className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] md:mt-3 mt-2">
                      info@renaissanceglassworks.com
                    </p>
                    <p className="lg:text-2xl md:text-xl sm:text-lg text-base font-Helvetica font-normal text-[#17313A] lg:mt-10 md:mt-7 mt-5">
                      BUSINESS HOURS:
                    </p>
                    <p className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] sm:mt-3 mt-2">
                      Monday - Friday <br />
                      8:00am - 5:00pm EST
                    </p>
                  </div>
                </div>
              </div>
              <div className="xl:w-3/12 sm:w-6/12 w-full xl:px-3 ps-3 pe-6 xl:mt-0 md:mt-10 mt-8 xl:order-2 sm:order-3 order-2">
                <p className="lg:text-2xl md:text-xl sm:text-lg text-base font-Helvetica font-normal text-[#17313A]">
                  SHOP BY CATEGORY
                </p>
                <div className="xl:mt-14 lg:mt-11 md:mt-8 sm:mt-6 mt-4">
                  <div>
                    <Link className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] inline-block">
                      Basin
                    </Link>
                  </div>
                  <div>
                    <Link className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] lg:mt-6 sm:mt-[18px] mt-3 inline-block">
                      Pedestal
                    </Link>
                  </div>
                  <div>
                    <Link className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] lg:mt-6 sm:mt-[18px] mt-3 inline-block">
                      Undermount
                    </Link>
                  </div>
                  <div>
                    <Link className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] lg:mt-6 sm:mt-[18px] mt-3 inline-block">
                      Drop-In{" "}
                    </Link>
                  </div>
                  <div>
                    <Link className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] lg:mt-6 sm:mt-[18px] mt-3 inline-block">
                      Custom
                    </Link>
                  </div>
                </div>
              </div>

              <div className="xl:w-2/12 sm:w-6/12 w-full xl:px-3 ps-3 pe-6 xl:mt-0 md:mt-10 mt-8 xl:order-3 sm:order-4 order-3">
                <p className="lg:text-2xl md:text-xl sm:text-lg text-base font-Helvetica font-normal text-[#17313A]">
                  QUICK LINKS
                </p>
                <div className="xl:mt-14 lg:mt-11 md:mt-8 sm:mt-6 mt-4">
                  <div>
                    <Link className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] inline-block">
                      About
                    </Link>
                  </div>
                  <div>
                    <Link className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] lg:mt-6 sm:mt-[18px] mt-3 inline-block">
                      Orders
                    </Link>
                  </div>
                  <div>
                    <Link className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] lg:mt-6 sm:mt-[18px] mt-3 inline-block">
                      Returns & Refunds
                    </Link>
                  </div>
                  <div>
                    <Link className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] lg:mt-6 sm:mt-[18px] mt-3 inline-block">
                      Warranty Policy
                    </Link>
                  </div>
                  <div>
                    <Link className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] lg:mt-6 sm:mt-[18px] mt-3 inline-block">
                      Shipping Policy
                    </Link>
                  </div>
                  <div>
                    <Link className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] lg:mt-6 sm:mt-[18px] mt-3 inline-block">
                      Privacy Policy
                    </Link>
                  </div>
                  <div>
                    <Link className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] lg:mt-6 sm:mt-[18px] mt-3 inline-block">
                      Terms & Conditions
                    </Link>
                  </div>
                </div>
              </div>
              <div className="xl:w-3/12 sm:w-6/12 w-full xl:px-3 ps-3 pe-6 xl:order-4 sm:order-2 order-4 sm:mt-0 mt-8">
                <p className="lg:text-2xl md:text-xl sm:text-lg text-base font-Helvetica font-normal text-[#17313A]">
                  ADDRESS
                </p>
                <div className="xl:mt-14 lg:mt-11 md:mt-8 sm:mt-6 mt-4">
                  <p className="lg:text-2xl md:text-xl sm:text-lg text-base font-Helvetica font-normal text-[#17313A]">
                    Manufacturing Plant:
                  </p>
                  <p className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] md:mt-4 mt-2">
                    Montreal, (Québec) Canada, H1E 4M1
                  </p>
                  <p className="lg:text-2xl md:text-xl sm:text-lg text-base font-Helvetica font-normal text-[#17313A] lg:mt-10 md:mt-7 mt-5">
                    US Distribution Center:
                  </p>
                  <p className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] md:mt-4 mt-2">
                    Champlain NY 12919 USA
                  </p>
                  <div className="block sm:hidden">
                    <div className="xl:mt-14 lg:mt-10 mt-8">
                      <p className="lg:text-2xl md:text-xl sm:text-lg text-base font-Helvetica font-normal text-[#17313A]">
                        PHONE:
                      </p>
                      <p className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] md:mt-3 mt-2">
                        +1 888 414-4022 opt. 2
                      </p>

                      <p className="lg:text-2xl md:text-xl sm:text-lg text-base font-Helvetica font-normal text-[#17313A] lg:mt-10 md:mt-7 mt-5">
                        EMAIL:
                      </p>
                      <p className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] md:mt-3 mt-2">
                        info@renaissanceglassworks.com
                      </p>
                      <p className="lg:text-2xl md:text-xl sm:text-lg text-base font-Helvetica font-normal text-[#17313A] lg:mt-10 md:mt-7 mt-5">
                        BUSINESS HOURS:
                      </p>
                      <p className="md:text-xl sm:text-lg text-sm font-normal font-Helvetica text-[#6D6D6D] md:mt-3 mt-2">
                        Monday - Friday <br />
                        8:00am - 5:00pm EST
                      </p>
                      <div className="flex items-center gap-7 xl:mt-14 lg:mt-11 mt-7">
                        <div>
                          <Link>
                            <img
                              className="sm:w-8 w-6 hover:scale-120"
                              src={facebookImg}
                              alt="facebookImg"
                            />
                          </Link>
                        </div>
                        <div>
                          <Link>
                            <img
                              className="sm:w-8 w-6 hover:scale-120"
                              src={instagramImg}
                              alt="instagramImg"
                            />
                          </Link>
                        </div>
                        <div>
                          <Link>
                            <img
                              className="sm:w-8 w-6 hover:scale-120"
                              src={youtubeImg}
                              alt="youtubeImg"
                            />
                          </Link>
                        </div>
                        <div>
                          <Link>
                            <img
                              className="sm:w-8 w-6 hover:scale-120"
                              src={xtwitterImg}
                              alt="xtwitterImg"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap xl:mt-[80px] lg:mt-[65px] md:mt-[52px] sm:mt-[44px] mt-10">
              <div className="lg:w-2/12 md:w-2/12 sm:w-2/12 w-full px-3">
                <Link className="flex items-center gap-3">
                  <img src={usaflag} alt="usaflag" />{" "}
                  <span>
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 3L10 11L2.5 3"
                        stroke="#17313A"
                        strokeWidth="3"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="lg:w-5/12 md:w-8/12 sm:w-9/12 w-full sm:mt-0 mt-5 px-3">
                <p className="md:text-lg text-base font-normal font-Helvetica text-[#6D6D6D]">
                  © 2025 - VERRE GALLERY by Renaissance Glassworks Inc.
                </p>
              </div>
              <div className="lg:w-4/12 w-full text-center lg:mt-0 mt-5 m-auto ">
                <img
                  className="inline-block"
                  src={paymentImg}
                  alt="paymentImg"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
