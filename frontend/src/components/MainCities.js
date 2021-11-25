import { Card } from "react-bootstrap";
import React, {useEffect,useState} from "react";

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
                
                <Card.Img className="card-imagen" src={imagenes} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
                )
            })}
            
        </div>

    )
}

export default MainCities