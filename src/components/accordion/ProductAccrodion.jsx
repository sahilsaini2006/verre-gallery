import React, { useState } from "react";
import "./Accordion.css";
import { Questions2 } from "./Api";
import MyAccordion from "./MyAccordion";

const ProductAccrodion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion2 = (id) => {
    setActiveAccordion((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      <div className="border-t border-[#ccc] mt-[65px] ml-auto w-[80%]">
        {Questions2.map((item) => (
          <MyAccordion
            key={item.id}
            {...item}
            isOpen={activeAccordion === item.id}
            onToggle={() => toggleAccordion2(item.id)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductAccrodion;
