const mongoose = require('mongoose')

const ciudadSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    pais: {type: String},
    imagen:{type: String, required: true}
})

const Ciudad = mongoose.model('ciudad', ciudadSchema)

module.exports = Ciudad;