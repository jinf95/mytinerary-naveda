import React, { useState } from "react";
import { SiAcclaim } from "react-icons/si";
import "../index.css";
import "../elements/ScrollArrow.css";

const ScrollArrow = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);

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

  // window.addEventListener('scroll', checkScrollTop)
  // window.addEventListener('scroll', checkScrollBottom)
  window.addEventListener("scroll", checkScrollTop || checkScrollBottom);

  return (
    <>
      {showScrollTop && (
        <SiAcclaim
          className="scrollTop"
          onClick={scrollTop}
          style={{ display: showScrollTop ? "flex" : "none" }}
        />
      )}
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

export default ScrollArrow;
