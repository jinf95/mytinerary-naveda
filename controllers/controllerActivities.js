const Actividad = require('../models/Actividades')

const controllerActivities = {

    obtenerActividades: async(req,res) => {
        let respuesta

        try{
            respuesta = await Actividad.find().populate('itinerarios')
        }catch(error){
            console.log(error)
        }
            res.json(respuesta)
    },

    cargarActividad: async(req,res)=>{
        const actividad =  req.body
        let respuesta
        try{

            respuesta = await new Actividad(actividad).save()

        }catch(err){
            console.log(err)
        }

        res.json(respuesta)
    },

    obtenerActPorItinerario: async(req,res) => {
       
        let respuesta
            let id = req.params.id
        try{
           
            respuesta = await Actividad.find({itinerarios:id})
            
        }catch(err){
            console.log(err)
        }
        res.json(respuesta)
    }   
}

module.exports = controllerActivities