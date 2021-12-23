const mongoose = require('mongoose')

const itinerarioSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    publicador: {type: String, required: true},
    imagen: {type: String, required: true},
    precio:{type: String, required: true},
    duracion:{type: String, required:true},
    likes:{type: Array,requerided : true},
    hashtag:{type: Array, required:true},  
    comentarios:[{
        comentario:{type: String},
        idUsuario: {type:mongoose.Types.ObjectId, ref: "usuario"}
    }],

    ciudades: { type:[{type: mongoose.Types.ObjectId, ref: 'ciudad', required: true}], required: true }

})

const Itinerario = mongoose.model('itinerario', itinerarioSchema)

module.exports = Itinerario;