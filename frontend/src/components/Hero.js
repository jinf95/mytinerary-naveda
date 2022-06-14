import React from "react";
import { ToastContainer } from "react-toastify";
import ScrollArrow from "../elements/ScrollArrow";

const Hero = () => {
  let hero = `./assets/playa.jpg`;
  return (
    <div className="heroContenedor">
      <ToastContainer />
      <img
        className="videoHero"
        src={hero}
        alt="hero"
      />
      <p className="bienvenida">
        Find your perfect trip
        <span className="mensaje rounded-pill">MyTinerary!</span>
        &mdash; designed by insiders who know and love their cities &mdash;
      </p>
      <div className="scroll-hero">
        <ScrollArrow />
      </div>
    </div>
  );
};

export default Hero;
