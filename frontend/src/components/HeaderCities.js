import React from "react";
// import { InputGroup, FormControl} from "react-bootstrap";
import { connect } from "react-redux";
import Input from "../elements/Input";
import citiesActions from "../redux/actions/citiesActions";

const HeaderCities = (props) => {
  const filtrar = (e) => props.filtro(e.target.value);
  // const filtrar = e => console.log(e)
  let header = "./assets/header.jpg";

  return (
    <div className="headerContenedor">
      <img className="imagenHeader" src={header} alt="foto" />
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
