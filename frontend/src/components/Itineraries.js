import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const Itinerary = () => {

    //    const imagen = "/assets/iconos/money.svg"

    //    const billetes = imagen * 3



    const [display, setDisplay] = useState(false)
    const HandleDisplay = () => setDisplay(!display)

    return (
        <>
            <Card className="card-itinerary text-center">
                <Card.Header>New York</Card.Header>
                <Card.Body className="card-body">
                    <Card.Title>Conociendo New York</Card.Title>
                    <img className="imagen-celebrity" src="/assets/celebridades/mircoYmarley.jpg" alt="marley" />
                    <Card.Text>
                        Mirco y Marley
                    </Card.Text>
                    <div className="div-card">
                        <div className="d-flex">
                            <p>PRICE:</p>
                            <img className="money" src={"/assets/iconos/money.ico"} alt="money" />
                            <img className="money" src={"/assets/iconos/money.ico"} alt="money" />
                            <img className="money" src={"/assets/iconos/money.ico"} alt="money" />
                        </div>

                        <p>Duration : 4 hs</p>
                        <img className="money" src={"/assets/iconos/favorito.png"} alt="favorito" />

                    </div>
                    <div className="hashtag">
                        <p>#Aca en newYork</p>
                        <p>#Hola Hola Hola</p>
                        <p>#VeniPasea</p>
                    </div>
                </Card.Body>
            </Card>
            <Button onClick={HandleDisplay} variant="primary">{display ? 'view less' : 'view more'} </Button>
            {display && <h1> ACTIVITIES</h1>}

        </>
    )

}

export default Itinerary