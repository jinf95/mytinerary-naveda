import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";

function MainCities() {
    const [ciudades, setCiudades] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/api/ciudades")
            .then((res) => res.json())
            .then((data) => setCiudades(data.response.ciudades))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="card-contenedor">
            {ciudades.map((ciudad) => {
                let imagenes = `./assets/ciudades/${ciudad.imagen}`
                return (
                    <Card className="tarjetas bg-dark text-white">
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