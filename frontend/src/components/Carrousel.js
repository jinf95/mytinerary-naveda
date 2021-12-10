import React from "react";
import { Carousel, Row, Col, Card } from 'react-bootstrap'



const Carrousel = () => {

    const ciudades = [
        [
            { ciudad: "New York", pais: "United States", imagen: "newYork.jpg" },
            { ciudad: "Paris", pais: "France", imagen: "paris.jpg" },
            { ciudad: "Rome", pais: "Italy", imagen: "roma.jpg" },
            { ciudad: "Moscow", pais: "Russia", imagen: "moscu.jpg" },
        ],
        [
            { ciudad: "Guiza", pais: "Egypt", imagen: "egipto.jpg" },
            { ciudad: "Pekin", pais: "China", imagen: "china.jpg" },
            { ciudad: "Tokyo", pais: "Japan", imagen: "tokio.jpg" },
            { ciudad: "Sidney", pais: "Australia", imagen: "sidney.jpg" },
        ],
        [
            { ciudad: "San Juan", pais: "Argentina", imagen: "sanJuan.jpg" },
            { ciudad: "Misiones", pais: "Argentina", imagen: "misiones.jpg" },
            { ciudad: "Rio de Janeiro", pais: "Brazil", imagen: "rioDeJaneiro.jpg" },
            { ciudad: "Cancún", pais: "Mexico", imagen: "cancun.jpg" },
        ]
    ]

    return (

        <div >
            <h2 className="titulo-carrousel">POPULAR MYTINERARIES</h2>
            <Carousel  >
            {ciudades.map((arrayCiudad) => {
                return (
                    <Carousel.Item className="item">
                        <Row xs={1} md={2} className="g-4">
                            {arrayCiudad.map((ciudad) => {
                                let imagenes = `./assets/ciudades/${ciudad.imagen}`
                                return (
                                    <Col className="d-flex justify-content-center">
                                        <Card className="card-carousel">
                                            <Card.Img variant="top" src={imagenes} className="imagen-cards"/>
                                            <Card.Body className="card-body">
                                                <Card.Title>{ciudad.ciudad} </Card.Title>
                                                <Card.Text>
                                                    {ciudad.pais}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                 )
                            })}
                        </Row>
                    </Carousel.Item>

                )
            }
            )}

        </Carousel>
        </div>
        
    )
}

export default Carrousel



