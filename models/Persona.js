const mongoose = require('mongoose')

const personaSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, required: true},
    contraseña:{type: String, required: true},
    url:{type: String, required: true},
    ciudad:{type: String, required: true},
    pais:{type: String, required: true},
    google: {type: Boolean, default: false}
})

const Persona = mongoose.model('usuario', personaSchema)

module.exports = Persona