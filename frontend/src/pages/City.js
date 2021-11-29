import React from "react";
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

class City extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    
    id = this.props.params.id

    componentDidMount() {
       

        axios.get(`http://localhost:4000/api/ciudades/`+ this.id)
            .then(res => this.setState({ciudad : res.data.respuesta}))
    }


    render() {
        return (
            <>
            <div className="headerContenedor">
                {this.state.ciudad && <h1 className="nombre-ciudad">{this.state.ciudad.nombre}</h1> }
                {this.state.ciudad && <img src= {`/assets/ciudades/${this.state.ciudad.imagen}`} className="imagenHeader"></img> }

            </div>
            <div className="d-flex align-items-center flex-column">
                    <h2>Under construction</h2>
                <Button size="lg" as={Link} to='/Cities' className="boton-call">
                    Cities
                </Button>
            </div>
            

            </>
        )
    }
}

export default City