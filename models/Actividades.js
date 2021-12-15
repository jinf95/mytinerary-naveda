const mongoose = require("mongoose")

const actividadSchema = new mongoose.Schema ({
    actividad: {type: String, required: true},
    src: {type: String, required: true},
    
    itinerarios : {type : [{type: mongoose.Types.ObjectId, ref: "itinerario", required: true}],required: true}
})

const Actividad = mongoose.model("actividad", actividadSchema)

module.exports = Actividad;