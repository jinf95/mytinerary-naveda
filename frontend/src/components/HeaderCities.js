import React from "react";
import { InputGroup, FormControl} from "react-bootstrap";
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions';

const HeaderCities = (props) =>{

    const filtrar = e => props.filtro(e.target.value)

    let header = "./assets/header.jpg"
    
    return(

    <div className="headerContenedor">       
        <img className="imagenHeader" src={header} alt="foto"></img>
         <div className="bienvenida">
            <h1> MyTinerary!</h1>
        </div>
        <div className="input-contenedor ">
                <InputGroup size="sm">
                    <FormControl onChange={filtrar} placeholder="FIND YOUR FAVORITE DESTINATION" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
            </div>   
    </div>

    )
}

const mapDispatchToProps = {
    filtro: citiesActions.filtro

}

export default connect(null , mapDispatchToProps)(HeaderCities)