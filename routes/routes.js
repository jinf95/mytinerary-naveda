const Router = require('express').Router()
const controllerCities = require('../controllers/controllerCities')

const {obtenerCities, obtenerCity, cargarCity,borrarCity,actualizarCity} = controllerCities

Router.route('/ciudades')
.get(obtenerCities)
.post(cargarCity)

Router.route('/ciudades/:id')
.get(obtenerCity)
.delete(borrarCity)
.put(actualizarCity)




module.exports = Router
