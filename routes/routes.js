const Router = require('express').Router()
const controllerCities = require('../controllers/controllerCities')

const {getCities} = controllerCities

Router.route('/ciudades')
.get(getCities)

module.exports = Router