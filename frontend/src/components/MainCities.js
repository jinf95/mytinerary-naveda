import { Card } from "react-bootstrap";
import React from "react";

const MainCities = (props) => {

    const ciudades = props.ciudades
        console.log(ciudades)

 return (
        <div className="card-contenedor">
            
            {ciudades.map((ciudad) => {
                let imagenes = `./assets/ciudades/${ciudad.imagen}`
                return (
                    <Card to={'/Cities/${} '} className="tarjetas bg-dark text-white" key={ciudad.ciudad}>
                        <Card.Img className="card-imagen" src={imagenes} alt="Card imagen" />
                        <Card.ImgOverlay className="nombre-card">
                            <Card.Title className="card-title" >{ciudad.ciudad} </Card.Title>
                            <Card.Text className="card-title" >{ciudad.pais}</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                )
            })}

        </div>

    )
}

export default MainCities