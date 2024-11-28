import React, { useState } from "react";
import "./Maindata.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Customtest from "./Customtest";
import Customdetails from "./Customdetails";
import Homevideo from "./Loghomevideo";
import Mainfoot from "./Mainfoot";
import Sliptwo from "./Sliptwo";
import Downloadpack from './Downloadpack';

const Maindata = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main-container">
      {/* Expandable Section with Toggle Button */}
      <div className="header-bar">
        <button className="toggle-btn-left" onClick={toggleSection}>
          {isOpen ? (
            <ArrowDropUpIcon className="icon" />
          ) : (
            <ArrowDropDownIcon className="icon" />
          )}
        </button>
        <button className="toggle-btn-right" onClick={toggleSection}>
          {isOpen ? (
            <ArrowDropUpIcon className="icon" />
          ) : (
            <ArrowDropDownIcon className="icon" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="bordered-content">
          <p>Why choose Movesbook?  Put content here............</p>
        </div>
      )}

      {/* Customer Testimonials */}
      <div className="testimonials-section">
        <Customtest />
        <Customdetails />
        <Homevideo />
        <Mainfoot />
        <Sliptwo />
        <Downloadpack />
      </div>
    </div>
  );
};

export default Maindata;
