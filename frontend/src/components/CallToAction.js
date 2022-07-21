import React from "react";
import { Link } from "react-router-dom";
import ButtonCall from "../elements/ButtonCall";

const CallToAction = () => {
  let imagen = `./assets/fotoGo.jpg`;

  return (
    <div className="callToAction" id="call">
      <div className="boton-container">
        <h1 className="texto-call">Dive into this adventure!</h1>
        <Link as={Link} to="/Cities">
          <ButtonCall size="lg" />
        </Link>
      </div>
      <div className="img-container">
        <img className="img-call" src={imagen} alt="fotoGo" />
      </div>
    </div>
  );
};

export default CallToAction;
