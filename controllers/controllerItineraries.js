const Itinerario = require('../models/Itinerary')

const controllerItineraries = {
    
    obtenerItineraries: async(req,res)=>{
        let respuesta;
        try{
            respuesta = await Itinerario.find().populate('ciudades')
        }catch(err){
            console.log(err)
        }

        res.json(respuesta)
    },

    obtenerItineraryByCity: async (req,res) => {
        let respuesta
        const id = req.params.id

        try{
            respuesta = await Itinerario.find({ciudades:id})
        }catch(err) {
            console.log(err)
        }

        res.json(respuesta)
    },

    obtenerItinerary: async(req,res) => {

        let respuesta
        const id = req.params.id        
        try{
            respuesta = await Itinerario.findOne({_id:id})

        }catch(error){
            console.log(error)
        }

        res.json(respuesta)
    },


    cargarItinerary: async(req,res)=>{
        const itinerario =  req.body
        let respuesta
        try{

            respuesta = await new Itinerario(itinerario).save()

        }catch(err){
            console.log(err)
        }

        res.json(respuesta)
    },

    borrarItinerary: async(req,res)=>{
        let respuesta
        const id = req.params.id

        try{
            await Itinerario.findOneAndDelete({_id:id})
            respuesta = await Itinerario.find()

        }catch(error){
            console.log(error)
        }
        res.json(respuesta)

    },

    modificarItinerary : async(req,res)=>{
        
        let id = req.params.id
        let itinerario = req.body
        let modificado

        try{
            modificado = await Itinerario.findOneAndUpdate({_id:id},itinerario,{new:true})
        }catch(error){
            console.log(error)
        }
        res.json({success:modificado ? true : false})
    }

    }


module.exports = controllerItineraries;