import React from "react";
import {Button, Alert} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Itinerary from "../components/Itineraries";

class City extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    
    componentDidMount() {
       
        this.props.obtenerCiudad(this.props.params.id)
        this.props.fetchearItinerarios(this.props.params.id)
     
    }

    render() {
        window.scrollTo(0, 0);

        return (
            <>
             <div className="headerContenedor">
                {this.props.ciudad && <h1 className="nombre-ciudad">{this.props.ciudad.nombre}</h1>}
                {this.props.ciudad && <img src= {`/assets/ciudades/${this.props.ciudad.imagen}`} alt="city" className="imagenHeader"></img> }
            </div>
            <div className="main-city d-flex align-items-center flex-column">
            {this.props.itinerarios.length > 0 ? <Itinerary itinerarios={this.props.itinerarios}/> 
            : <Alert className="alerta-itinerarios" variant="primary">
            <p className="mensaje-itinerarios">
            THERE ARE NO ITINERARIES YET FOR THIS CITY
           </p>
            </Alert>}
                <Button size="lg" as={Link} to='/Cities' className="boton-call">
                    Cities
                </Button>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        ciudad: state.citiesReducer.ciudad,
        itinerarios: state.itinerariesReducer.itinerarios
    }
}

const mapDispatchToProps = {
    
    obtenerCiudad : citiesActions.obtenerCiudad,
    fetchearItinerarios : itinerariesActions.fetchearItinerarios
}

export default connect (mapStateToProps, mapDispatchToProps)(City)