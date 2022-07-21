import React from "react";
import HeaderCities from "../components/HeaderCities";
import MainCities from "../components/MainCities";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import Loader from "../elements/Loader.js";

class Cities extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchCiudades();
  }
  render() {
    window.scrollTo(0, 0);

    return (
      <>
        <HeaderCities />
        <div className="cities">
          {this.props.ciudades.length > 0 ? <MainCities /> : <Loader />}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { ciudades: state.citiesReducer.ciudades };
};

const mapDispatchToProps = {
  fetchCiudades: citiesActions.obtenerCiudades,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
