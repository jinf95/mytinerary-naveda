const Itinerary = require('../models/Itinerary')

const controllerItineraries = {
    
    obtenerItineraries: async(req,res)=>{
        let respuesta;
        try{
            respuesta = await Itinerary.find()
        }catch(err){
            console.log(err)
        }

        res.json(respuesta)
    },
    cargarMateria: async(req,res)=>{
        const materia =  req.body
        console.log(req.body)
        let respuesta
        try{

            respuesta = await new Materia(materia).save()

        }catch(err){
            console.log(err)
        }

        res.json(respuesta)
    }
}

module.exports = materiasController;