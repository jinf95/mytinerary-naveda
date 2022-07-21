import React from "react";
import { SiAcclaim } from "react-icons/si";
import "../index.css";
import "../elements/ScrollArrow.css";
import { Link } from "react-scroll";

const ScrollArrowBottom = () => {

  return (
    <>
       <Link
        to="call"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-50}
        duration={0}
      >
        <SiAcclaim className="scrollBottom" />
      </Link>
    </>
  );
};

export default ScrollArrowBottom;
