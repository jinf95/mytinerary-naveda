import React from "react";
import "../elements/ButtonCall.css"

const ButtonCall = () => {
  return (
    <button  className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">COME ON!</span>
    </button>
  );
};

export default ButtonCall;
