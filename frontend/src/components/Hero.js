import React from "react";



const Hero = () => {


    return (

        <div className="contenedor">
            <video className="videoHero" src="./assets/playa.mp4" autoPlay loop muted alt="video"></video>
            <div className="bienvenida">
                <h1> MyTinerary</h1>
                <p>"Find your perfect trip,
                    designed by insiders who know and love their cities!</p>
            </div>
        </div>


    )
}

export default Hero