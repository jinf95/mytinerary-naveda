  const ciudades = [
            { ciudad: "New York", pais: "United States", imagen: "newYork.jpg" },
            { ciudad: "Paris", pais: "France", imagen: "paris.jpg" },
            { ciudad: "Rome", pais: "Italy", imagen: "roma.jpg" },
            { ciudad: "Moscow", pais: "Russia", imagen: "moscu.jpg" },
            { ciudad: "Guiza", pais: "Egypt", imagen: "egipto.jpg" },
            { ciudad: "Pekin", pais: "China", imagen: "china.jpg" },
            { ciudad: "Tokyo", pais: "Japan", imagen: "tokio.jpg" },
            { ciudad: "Sidney", pais: "Australia", imagen: "sidney.jpg" },
            { ciudad: "San Juan", pais: "Argentina", imagen: "sanJuan.jpg" },
            { ciudad: "Misiones", pais: "Argentina", imagen: "misiones.jpg" },
            { ciudad: "Rio de Janeiro", pais: "Brazil", imagen: "rioDeJaneiro.jpg" },
            { ciudad: "Cancún", pais: "Mexico", imagen: "cancun.jpg" },
            { ciudad: "Dubai", pais: "United Arab Emirates", imagen: "dubai.jpg" },
            { ciudad: "London", pais: "England", imagen: "londres.jpg" },
            { ciudad: "Doha", pais: "Qatar", imagen: "doha.jpg" },

            ]

const express = require("express")
const cors = require ("cors")

const app = express()
app.use(cors())

  

app.get("/api/ciudades", (req,res) => {
    res.json({response: {ciudades}})
})


app.listen(4000, () => {
    console.log("Esta Corriendo servidor 4000")
})