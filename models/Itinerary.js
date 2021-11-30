const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    publicador: {type: String, required: true},
    imagen: {type: String, required: true},
    precio:{type: String, required: true},
    duracion:{type: String, required:true}

})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary;