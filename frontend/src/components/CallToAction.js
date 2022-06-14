import React from 'react'
import {Link} from 'react-router-dom'
import ButtonCall from '../elements/ButtonCall'

const CallToAction = () => {
    let imagen = `./assets/fotoGo.jpg`

    return (
        <div className="callToAction">
            <div className="col-6 d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="texto-call">Dive into this adventure!</h1>            
            <Link as={Link} to='/Cities'>
                <ButtonCall size="lg"/>
            </Link>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
                <img width="80%" height="80%" src={imagen} alt="fotoGo"/>
            </div>
        </div>
        
            )
}

export default CallToAction