import React from "react";
// import { InputGroup, FormControl} from "react-bootstrap";
import { connect } from "react-redux";
import Input from "../elements/Input";
import citiesActions from "../redux/actions/citiesActions";

const HeaderCities = (props) => {
  const filtrar = (e) => props.filtro(e.target.value);
  let imgHeader = "./assets/header.jpg";

  return (
    <div className="headerContenedor" id="top">
      <img className="imagenHeader" src={imgHeader} alt="foto" />
      <div className="bienvenida">
        <h1> MyTinerary!</h1>
      </div>
      <div className="input-contenedor ">
        <Input filtrar={filtrar} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  filtro: citiesActions.filtro,
};

export default connect(null, mapDispatchToProps)(HeaderCities);
