import React from "react";
import "./Accordion.scss";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const AccordionItem = ({
  title,
  subtitle,
  children,
  isOpen,
  onToggle,
  iconClose,
  iconOpen,
  aria = "accordion-item",
}) => {
  if (iconClose === "FaMinus") {
    iconClose = <FaMinus />;
  } else if (iconClose == undefined) {
    iconClose = <SlArrowDown />;
  } else {
    iconClose = iconClose;
  }

  if (iconOpen === "FaPlus") {
    iconOpen = <FaPlus />;
  } else if (iconOpen == undefined) {
    iconOpen = <SlArrowLeft />;
  } else {
    iconOpen = iconOpen;
  }

  return (
    <div className="accordion-item" aria-label={aria}>
      <button className="accordion-toggle" onClick={onToggle}>
        <div className="title-wrapper">
          <div>{title}</div>
          <div>{subtitle}</div>
        </div>
        {isOpen ? iconClose : iconOpen}
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        {isOpen && children}
      </div>
    </div>
  );
};

export default AccordionItem;
