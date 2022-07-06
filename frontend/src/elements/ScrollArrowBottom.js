import React, { useState } from "react";
import { SiAcclaim } from "react-icons/si";
import "../index.css";
import "../elements/ScrollArrow.css";

const ScrollArrowBottom = () => {
  const [showScrollBottom, setShowScrollBottom] = useState(true);

  const checkScrollBottom = () => {
    if (!showScrollBottom && window.pageYOffset < 100) {
      setShowScrollBottom(true);
    } else if (showScrollBottom && window.pageYOffset > 100) {
      setShowScrollBottom(false);
    }
  };

  const scrollBottom = () => {
    window.scrollTo({ top: 590, behavior: "smooth" });
  };

  window.addEventListener("scroll",  checkScrollBottom);

  return (
    <>
      {showScrollBottom && (
        <SiAcclaim
          className="scrollBottom"
          onClick={scrollBottom}
          style={{ display: showScrollBottom ? "flex" : "none" }}
        />
      )}
    </>
  );
};

export default ScrollArrowBottom;
