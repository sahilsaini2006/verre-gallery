import React from "react";

const BlueButton = ({ btnText, style }) => {
  return (
    <>
      <div>
        <button
          className={`font-normal font-Helvetica text-white border border-[#009DD9] bg-[#009DD9] hover:bg-white hover:text-[#009DD9] transition-all duration-300 inline-block cursor-pointer ${style}`}
        >
          {btnText}
        </button>
      </div>
    </>
  );
};

export default BlueButton;
