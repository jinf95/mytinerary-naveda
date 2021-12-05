const Router = require('express').Router()
const controllerCities = require('../controllers/controllerCities')
const controllerItineraries = require('../controllers/controllerItineraries')

const {obtenerCities, obtenerCity, cargarCity,borrarCity,actualizarCity} = controllerCities
const {obtenerItineraries,obtenerItinerary,obtenerItineraryByCity, cargarItinerary,borrarItinerary, modificarItinerary} = controllerItineraries

Router.route('/ciudades')
.get(obtenerCities)
.post(cargarCity)

Router.route('/ciudades/:id')
.get(obtenerCity)
.delete(borrarCity)
.put(actualizarCity)

Router.route('/itinerarios')
.get(obtenerItineraries)
.post(cargarItinerary)

Router.route('/itinerarios/:id')
.get(obtenerItinerary)
.delete(borrarItinerary)
.put(modificarItinerary)

Router.route('/itinerarios/ciudades/:id')
.get(obtenerItineraryByCity)


module.exports = Router
