import React from "react";
import { SiAcclaim } from "react-icons/si";
import "../index.css";
import "../elements/ScrollArrow.css";
import { Link } from "react-scroll";

const ScrollArrowTop = () => {
  return (
    <>
      <Link
        to="top"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={0}
      >
        <SiAcclaim className="scrollTop" />
      </Link>
    </>
  );
};

export default ScrollArrowTop;
