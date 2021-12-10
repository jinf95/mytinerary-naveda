import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputGroup, FormControl, Alert} from "react-bootstrap";
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions';

const MainCities = (props) => {

const filtrar = e => props.filtro(e.target.value)

    return (
        <div className="card-contenedor">
            <div className="input-contenedor ">
                <InputGroup size="sm">
                    <FormControl onChange={filtrar} placeholder="FIND YOUR FAVORITE DESTINATION" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
            </div>
           {props.lugaresFiltrados.length > 0 
            ? props.lugaresFiltrados.map(ciudad => 
                <Card as={Link} to={`/City/${ciudad._id}`} className="tarjetas bg-dark text-white" key={ciudad.nombre} datos={ciudad}>
                            <Card.Img className="card-imagen" src={`./assets/ciudades/${ciudad.imagen}`} alt="Card imagen" />
                            <Card.ImgOverlay className="nombre-card">
                                <Card.Title className="card-title" >{ciudad.nombre} </Card.Title>
                                <Card.Text className="card-title" >{ciudad.pais}</Card.Text>
                            </Card.ImgOverlay>
                        </Card> )
            :   <Alert className="alerta-filtro" variant="primary">
                 <Alert.Heading>HEY, NICE TO SEE YOU</Alert.Heading>
                 <p>
                 VERIFY THAT THE NAME OF THE CITY YOU ARE LOOKING FOR IS SPELLED CORRECTLY
                </p>
            </Alert>
                   }
        </div>

    )
}

const mapStateToProps = (state) => {
    return { lugaresFiltrados: state.citiesReducer.auxiliar }
}

const mapDispatchToProps = {
    filtro: citiesActions.filtro

}

export default connect(mapStateToProps, mapDispatchToProps)(MainCities)
