import React, {useEffect,useState} from "react";
import { Card } from "react-bootstrap";

const MainCities = () => {

    const [ciudades,setCiudades] = useState([])

useEffect(() => {
    fetch("http://localhost:4000/api/ciudades")
    .then(res => res.json())
    .then(data => console.log(data.response.ciudades))
    .catch(err => console.error(err.message))
})

    return (
        <div className="card-contenedor">
            <Card className="tarjetas bg-dark text-white">
                <Card.Img src="holder.js/100px270" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>

    )
}

export default MainCities