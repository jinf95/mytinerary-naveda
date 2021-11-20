import React from 'react'
import Button from 'react-bootstrap/Button'

const CallToAction = () => {

    return (
        <div className="callToAction">
            <div className="col-6 d-flex flex-column justify-content-center align-items-center text-center">
            <h1>Dive into this adventure!</h1>            
                <Button size="lg" className="boton-call">
                COME ON!
                </Button>
            </div>
            <div className="col-6 p-3">
                <img width="100%" height="100%" src="./assets/fotoGo.jpg" alt="fotoGo"/>
            </div>
        </div>
        
            )
}

export default CallToAction