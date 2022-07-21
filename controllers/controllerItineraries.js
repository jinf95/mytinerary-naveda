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
            respuesta = await Itinerario.find({ ciudades: id }).populate('comentarios.idUsuario')
            // console.log(respuesta);
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
        // console.log(req.body)
        switch(req.body.type){
            case "agregarComentario":
                try {
                    const nuevoComentario = await Itinerario.findOneAndUpdate({_id: req.params.id}, {$push: {comentarios: {comentario: req.body.comentario, idUsuario: req.user._id}}}, {new: true}).populate('comentarios.idUsuario')
                    console.log(nuevoComentario)

                    if (nuevoComentario) {
                        res.json({success: true, response: nuevoComentario.comentarios})
                        
                    }else {
                        throw new Error("error")
                    }
                }catch(error){
                        console.log(error)
                }
                break
            case "borrarComentario":
                try {
                    console.log(req.body)
                    const comentarioEliminado = await Itinerario.findOneAndUpdate({"comentarios._id": req.body.idComentario}, {$pull: {comentarios: {_id: req.body.idComentario}}})
                    console.log(comentarioEliminado )
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
                    const editarComentario = await Itinerario.findOneAndUpdate({"comentarios._id": req.params.id}, {$set:{"comentarios.$.comentario": req.body.comentario}}, {new: true})
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
            Itinerario.findOne({_id: req.params.id})
            .then((itinerario) =>{
                if(itinerario.likes.includes(req.user._id)){
                   Itinerario.findOneAndUpdate({_id:req.params.id}, {$pull:{likes:req.user._id}},{new:true})
                   .then((nuevoItinerario)=> res.json({success:true, response:nuevoItinerario.likes}))
                   .catch((error) => console.log(error))
                }else{
                    Itinerario.findOneAndUpdate({_id: req.params.id}, {$push:{likes:req.user._id}},{new:true})
                    .then((nuevoItinerario) => res.json({success:true, response:nuevoItinerario.likes}))
                    .catch((error) => console.log(error))
                }
            })
            .catch((error) => res.json({success:false, response:error}))
        }   
    }

module.exports = controllerItineraries;