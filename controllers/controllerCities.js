
const Ciudad = require('../models/Ciudad')

const controllerCities = {
    obtenerCities: async (req, res) => {
        let ciudades
        let error = null

      try{
       ciudades = await Ciudad.find()

     }catch(error){
            error = true
            console.error(error)
        }   
       
       res.json({
            respuesta: error ? 'ERROR' : ciudades, 
            success: error ? false : true,
            error: error
        })

    },

    obtenerCity: async (req, res) => {
        let ciudad
        const id = req.params.id        
        try{
            ciudad = await Ciudad.findOne({_id:id})

        }catch(error){
            console.log(error)
        }

        res.json({respuesta:ciudad,success:true})
    },

    cargarCity: async(req, res) => {
        let ciudad
        const { nombre, pais, imagen } = req.body

        try{
           ciudad = await new Ciudad({ nombre, pais, imagen }).save()
        
        }catch(error){
            console.log(error)
        } 
       
        res.json({respuesta:ciudad,succes:true})

    },

    borrarCity: async(req,res)=>{
        let ciudades
        const id = req.params.id
        try{
            await Ciudad.findOneAndDelete({_id:id})
            ciudades = await Ciudad.find()

        }catch(error){
            console.log(error)
        }

        res.json({respuesta: ciudades,success:true})
    },

    actualizarCity: async(req,res)=>{
        let id = req.params.id
        let ciudad = req.body
        let actualizado

        try{
            actualizado = await Ciudad.findOneAndUpdate({_id:id},ciudad,{new:true})
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
    }

}


module.exports = controllerCities