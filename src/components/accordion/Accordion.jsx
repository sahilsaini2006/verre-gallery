import React, { useState } from "react";
import "./Accordion.css";
import { Questions } from "./Api";
import MyAccordion from "./MyAccordion";

const Accordion = ({ accordionStyle }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };


  return (
    <>
      <div className={`${accordionStyle}`}>
        {Questions.map((item) => (
          <MyAccordion
            key={item.id}
            {...item}
            isOpen={activeId === item.id}
            onToggle={() => toggleAccordion(item.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Accordion;
