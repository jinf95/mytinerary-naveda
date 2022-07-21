import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

const MainCities = (props) => {


    return (
        <div className="card-contenedor" >
          
           {props.lugaresFiltrados.length > 0 
            ? props.lugaresFiltrados.map(ciudad => 
                <Card key={ciudad.nombre} as={Link} to={`/City/${ciudad._id}`} className="tarjetas bg-dark text-white" datos={ciudad}>
                            <Card.Img className="card-imagen" src={`./assets/ciudades/${ciudad.imagen}`} alt="Card imagen" />
                            <Card.ImgOverlay className="nombre-card">
                                <Card.Title className="card-title" >{ciudad.nombre} </Card.Title>
                                <Card.Text className="card-title" >{ciudad.pais}</Card.Text>
                            </Card.ImgOverlay>
                        </Card> )
            :   <div className="alerta-filtro">
                 <p className="mje-filtro">HEY, NICE TO SEE YOU<br/>                 
                 VERIFY THAT THE NAME OF THE CITY YOU ARE LOOKING FOR IS SPELLED CORRECTLY
                </p>
            </div>
                   }
        </div>

    )
}

const mapStateToProps = (state) => {
    return { lugaresFiltrados: state.citiesReducer.auxiliar }
}


export default connect(mapStateToProps)(MainCities)
