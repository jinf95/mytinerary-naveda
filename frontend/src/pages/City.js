import React from "react";
import {Button} from 'react-bootstrap'
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
        
        this.props.fetchearItinerarios(this.props.params.id)
     
     this.props.ciudades.length > 0
     ? this.props.obtenerCiudad(this.props.params.id)
     : this.props.obtenerCiudades()
    }

    componentDidUpdate(prevProps){
        prevProps.ciudades !== this.props.ciudades &&
        this.props.obtenerCiudad(this.props.params.id)
    }

  
    render() {
        window.scrollTo(0, 0);

        return (
            <>
             <div className="headerCity">
                {this.props.ciudad && <h1 className="nombre-ciudad">{this.props.ciudad.nombre}</h1>}
                {this.props.ciudad && <img src= {`/assets/ciudades/${this.props.ciudad.imagen}`} alt="city" className="imagenHeader"></img> }
            </div>
            <div className="main-city d-flex align-items-center flex-column">
                
            {this.props.itinerarios 
            ? (this.props.itinerarios.map(itinerario => {
               return <Itinerary itinerario={itinerario} key={itinerario.titulo}/>
            }
             )) 
            : (<div className="alerta-itinerarios" >
            <p className="mensaje-itinerarios">
               THERE ARE NO ITINERARIES YET FOR THIS CITY
                </p>
           </div>)
            }
                     
            {/* <div class="loader"></div>  */}
            
                <Button size="lg" as={Link} to='/Cities' className="boton-cities">
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
        ciudades: state.citiesReducer.ciudades,
        itinerarios: state.itinerariesReducer.itinerarios
    }
}

const mapDispatchToProps = {
    
    obtenerCiudad : citiesActions.obtenerCiudad,
    obtenerCiudades: citiesActions.obtenerCiudades,
    fetchearItinerarios : itinerariesActions.fetchearItinerarios
}

export default connect (mapStateToProps, mapDispatchToProps)(City)