const Router = require('express').Router()
const validator = require('../config/validator')
const controllerCities = require('../controllers/controllerCities')
const controllerItineraries = require('../controllers/controllerItineraries')
const controllersUsers = require('../controllers/controllersUsers')

const {obtenerCities, obtenerCity, cargarCity,borrarCity,actualizarCity} = controllerCities
const {obtenerItineraries,obtenerItinerary,obtenerItineraryByCity, cargarItinerary,borrarItinerary, modificarItinerary} = controllerItineraries
const {nuevoUsuario, accederACuenta} = controllersUsers

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

Router.route('/signUp')
.post(validator, nuevoUsuario)

Router.route('/signIn')
.post(accederACuenta)

module.exports = Router
