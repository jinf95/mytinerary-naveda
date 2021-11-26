import React from "react";

const HeaderCities = () =>{

    let header = "./assets/header.jpg"
    
    return(

    <div className="headerContenedor">       
        <img className="imagenHeader" src={header} alt="foto"></img>
         <div className="bienvenida">
            <h1> MyTinerary!</h1>
        </div>        
    </div>

    )
}

export default HeaderCities