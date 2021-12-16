const Actividad = require('../models/Actividades')

const controllerActivities = {

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

    
}

module.exports = controllerActivities