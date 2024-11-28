import React, { useState } from "react";
import "./Maindata.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Htmldoc from './Htmldoc';

const Sliptwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Sliptwo-container">
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
        <Htmldoc />
      )}
    </div>
  );
};

export default Sliptwo;
