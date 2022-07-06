import React, { useState } from "react";
import { SiAcclaim } from "react-icons/si";
import "../index.css";
import "../elements/ScrollArrow.css";

const ScrollArrowTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const checkScrollTop = () => {
    if (!showScrollTop && window.pageYOffset > 100) {
      setShowScrollTop(true);
    } else if (showScrollTop && window.pageYOffset < 100) {
      setShowScrollTop(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  
  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      {showScrollTop && (
        <SiAcclaim
          className="scrollTop"
          onClick={scrollTop}
          style={{ display: showScrollTop ? "flex" : "none" }}
        />
      )}
     
    </>
  );
};

export default ScrollArrowTop;
