import React from "react";



const Hero = () => {

    let video = `./assets/playa.mp4`
    return (

        <div className="heroContenedor">
            <video className="videoHero" src={video} autoPlay loop muted alt="video"></video>
            <div className="bienvenida">
                <h1> MyTinerary!</h1>
                <p className="mensaje rounded-pill" >Find your perfect trip,
                    designed by insiders who know and love their cities!</p>
            </div>
        </div>


    )
}

export default Hero