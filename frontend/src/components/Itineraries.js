import React, { useState } from 'react'
import { Card, Button} from 'react-bootstrap'

const Itinerary = ({ itinerarios }) => {

    const [display, setDisplay] = useState(false)
    const HandleDisplay = () => setDisplay(!display)

    return (
        <>
            {itinerarios.map(itinerario =>
                <Card className="card-itinerary text-center">
                    <Card.Header className="titulo-itinerario">{itinerario.titulo} </Card.Header>
                    <Card.Body className="body-itinerary">
                        <img className="imagen-celebrity" src={`/assets/celebridades/${itinerario.imagen}`} alt={itinerario.publicador} />
                        <Card.Text>
                            {itinerario.publicador}
                        </Card.Text>
                        <div className="div-card">
                            <div className="d-flex">
                                <p className="mb-0">PRICE: </p>
                                <img className="money ms-2" src={"/assets/iconos/money.png"} alt="money" />
                            </div>
                            <p className="m-0">DURACION: {itinerario.duracion}</p>
                            <div className="favorito">
                                <img src={"/assets/iconos/favorito.png"} alt="favorito" />
                                <p className="ms-3">{itinerario.likes} </p>
                            </div>
                        </div>
                        <div className="hashtag-container">
                            <p className="hashtag">{itinerario.hashtag}</p>
                        </div>
                    </Card.Body>   
                    <Button onClick={HandleDisplay} className="boton-itinerario">{display ? 'view less' : 'view more'} </Button>
                    {display && <h1> Under Construction</h1>}                
                </Card>   
           
                        )
                        }        
             
               
            </>
    )

}

export default Itinerary