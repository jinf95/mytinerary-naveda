const Itinerario = require('../models/Itinerary')

const controllerItineraries = {

    obtenerItineraries: async (req, res) => {
        let respuesta;
        try {
            respuesta = await Itinerario.find().populate('ciudades')
        } catch (err) {
            console.log(err)
        }

        res.json(respuesta)
    },

    obtenerItineraryByCity: async (req, res) => {
        let respuesta
        const id = req.params.id

        try {
            respuesta = await Itinerario.find({ ciudades: id })
        } catch (err) {
            console.log(err)
        }

        res.json(respuesta)
    },

    obtenerItinerary: async (req, res) => {

        let respuesta
        const id = req.params.id
        try {
            respuesta = await Itinerario.findOne({ _id: id })

        } catch (error) {
            console.log(error)
        }

        res.json(respuesta)
    },


    cargarItinerary: async (req, res) => {
        const itinerario = req.body
        let respuesta
        try {

            respuesta = await new Itinerario(itinerario).save()

        } catch (err) {
            console.log(err)
        }

        res.json(respuesta)
    },

    borrarItinerary: async (req, res) => {
        let respuesta
        const id = req.params.id

        try {
            await Itinerario.findOneAndDelete({ _id: id })
            respuesta = await Itinerario.find()

        } catch (error) {
            console.log(error)
        }
        res.json(respuesta)

    },

    modificarItinerary: async (req, res) => {

        let id = req.params.id
        let itinerario = req.body
        let modificado

        try {
            modificado = await Itinerario.findOneAndUpdate({ _id: id }, itinerario, { new: true })
        } catch (error) {
            console.log(error)
        }
        res.json({ success: modificado ? true : false })
    },
    comentario: async (req, res)=>{

        switch(req.body.type){
            case "agregarComentario":
                try {
                    const nuevoComentario = await Itinerario.findOneAndUpdate({id: req.params._id}, {$push: {comentarios: {comentario: req.body.comentario, idUsuario: req.user._id}}}, {new: true}).populate('comentarios.idUsuario', {nombre: 1, url: 1})
                    if (nuevoComentario) {
                        res.json({success: true, response: nuevoComentario.comentario})
                        console.log(response)
                    }else {
                        throw new Error("error")
                    }
                }catch(error){
                        console.log(error)
                }
                break
            case "borrarComentario":
                try {
                    const comentarioEliminado = await Itinerario.findOneAndUpdate({"comentario.id": req.body.idComentario}, {$pull: {comentarios: {id: req.body.idComentario}}})
                    if(comentarioEliminado){
                        res.json({success: true})
                    }else{
                        throw new Error()
                    }

                }catch(error){
                    console.log(error)
                }
                break
            case "editarComentario":
                try {
                    const editarComentario = await Itinerario.findOneAndUpdate({"comentarios._id": req.params._id}, {$set:{"comentarios.$.comentario": req.body.comentario}}, {new: true})
                    if(editarComentario){
                        res.json({success: true, response: editarComentario.comentarios})

                    }else{
                        throw new Error()
                    }
                }catch(error){
                    console.log(error)
                }
                break
         }
        },
        
        likeItinerario:(req,res) =>{
            Itinerario.findOne({id: req.params._id})
            .then((itinerario) =>{
                if(itinerario.likes.includes(req.user._id)){
                   Itinerario.findOneAndUpdate({id:req.params.id}, {$pull:{likes:req.user._id}},{new:true})
                   .then((nuevoItinerario)=> res.json({success:true, response:nuevoItinerario.likes}))
                   .catch((error) => console.log(error))
                }else{
                    Itinerario.findOneAndUpdate({id: req.params._id}, {$push:{likes:req.user._id}},{new:true})
                    .then((nuevoItinerario) => res.json({success:true, response:nuevoItinerario.likes}))
                    .catch((error) => console.log(error))
                }
            })
            .catch((error) => res.json({success:false, response:error}))
        }   
    }

module.exports = controllerItineraries;