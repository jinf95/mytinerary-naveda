const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Persona = require('../models/Persona')

const controllersUsers = {

    nuevoUsuario: async (req, res) => {

        const {nombre, apellido, email, contraseña, url, ciudad, pais, google} = req.body
        try {

            const emailExiste = await Persona.findOne({ email })
            if (emailExiste){
                res.json({succes: false, response: null, error: "El email ya esta en uso"})
            }

            else{

            const contraseñaHasheada = bcryptjs.hashSync(contraseña, 10)
            const nuevoUsuario = new Persona({
                nombre,
                apellido,
                email,
                contraseña: contraseñaHasheada,
                url,
                ciudad,
                pais,
                google
            })
            console.log("Console log linea 30")
            console.log(nuevoUsuario)
            const token = jwt.sign({...nuevoUsuario}, process.env.SECRET_KEY)

            await nuevoUsuario.save()

            res.json({ success: true, response: {token, nuevoUsuario}, error: null })
            }
          
        } catch (error) {
            res.json({ success: false, response: "Llegue aca", error: null })

        }
             
    },

    accederACuenta: async(req, res) => {
        const {email, contraseña, google} = req.body
        console.log(req.body)
    try{
        const usuarioExiste = await Persona.findOne({email})
        if(usuarioExiste.google && !google) throw new Error ("Email Invalido")
        if(!usuarioExiste){
            res.json({success: false, error: "Usuario y/o contraseña incorrectos"})
        }else{
            let autContraseña = bcryptjs.compareSync(contraseña, usuarioExiste.contraseña)
            if(autContraseña){
                const token = jwt.sign({...usuarioExiste}, process.env.SECRET_KEY)
            res.json({success: true , response: {token,email}, error: null})

            }  
        }
        
        }catch(error){
            res.json({success: false, response: null, error: error})
        }
    },

    accederConToken: async(req,res) => {
        let {nombre, email, url} = req.user

        res.json({success: true, response: {nombre, email, url}})
        
    }

}

module.exports = controllersUsers

