import React from "react";

const MyAccordion = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="lg:mt-9 sm:mt-7 mt-5">
      <div
        className={`accordion-header xl:text-2xl md:text-xl text-lg font-Helvetica text-[#2B2B2B] md:pb6-6 sm:pb-4 pb-2 ${
          isOpen ? "active" : ""
        }`}
        onClick={onToggle}
      >
        <p>{question}</p>
        <span>
          {isOpen ? (
            <svg
              width="15"
              height="12"
              viewBox="0 0 40 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 4L20 20L4 4"
                stroke="#2B2B2B"
                strokeWidth="5"
                strokeLinecap="square"
              />
            </svg>
          ) : (
            <svg
              width="15"
              height="12"
              viewBox="0 0 40 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 19.9985L20 3.99853L36 19.9985"
                stroke="#2B2B2B"
                strokeWidth="5"
                strokeLinecap="square"
              />
            </svg>
          )}
        </span>
      </div>
      {isOpen && (
        <div className="accordion-body lg:mt-5 mt-2">
          <p className="md:text-lg text-base font-normal font-Helvetica text-[#6D6D6D] leading-[24px] xl:w-[80%] md:w-[90%] w-full">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default MyAccordion;
