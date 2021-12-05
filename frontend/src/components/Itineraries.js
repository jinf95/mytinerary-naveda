import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const Itinerary = ({itinerarios}) => {
  
    const [display, setDisplay] = useState(false)
    const HandleDisplay = () => setDisplay(!display)

    return (
        <>
            {itinerarios.map(itinerario=> 
                 <Card className="card-itinerary text-center">
                <Card.Header>{itinerario.titulo} </Card.Header>
                <Card.Body className="body-itinerary">
                    <Card.Title></Card.Title>
                    <img className="imagen-celebrity" src={`/assets/celebridades/${itinerario.imagen}`} alt={itinerario.publicador} />
                    <Card.Text>
                       {itinerario.publicador}
                    </Card.Text>
                    <div className="div-card">
                        <div className="d-flex">
                            <p>PRICE:</p>
                            <img className="money" src={"/assets/iconos/money.png"} alt="money" />                            
                        </div>
                        <p>{itinerario.duracion}</p>
                        <div>
                            <img className="money" src={"/assets/iconos/favorito.png"} alt="favorito" />
                            <p>{itinerario.likes} </p>
                        </div>
                    </div>
                    <div className="hashtag">
                        <p>{}</p>
                    </div>
                </Card.Body>
            <Button onClick={HandleDisplay} variant="primary">{display ? 'view less' : 'view more'} </Button>
            {display && <h1> Under Construction</h1>}
            </Card>
             )}
           
            

        </>
    )

}

export default Itinerary