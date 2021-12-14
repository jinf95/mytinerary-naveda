const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Persona = require('../models/Persona')

const controllersUsers = {

    nuevoUsuario: async (req, res) => {

        const {nombre, apellido, email, contraseña, url, ciudad, pais, google} = req.body
        try {

            const emailExiste = await Persona.findOne({ email })
            if (emailExiste){
                res.json({succes: false, response: null, error: "Email is already in use"})
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
            console.log(nuevoUsuario)
            const token = jwt.sign({...nuevoUsuario}, process.env.SECRET_KEY)

            await nuevoUsuario.save()

            res.json({ success: true, response: {token,...nuevoUsuario}, error: null })
            }
          
        } catch (error) {
            res.json({ success: false, response: null, error: null })

        }
             
    },

    accederACuenta: async(req, res) => {
        const {email, contraseña, google} = req.body
        console.log(req.body)
    try{
        const usuarioExiste = await Persona.findOne({email})
        if(usuarioExiste.google && !google) throw new Error ("Invalid Email")
        if(!usuarioExiste){
            res.json({success: false, error: "Incorrect user name and/or password"})
        }else{
            let autContraseña = bcryptjs.compareSync(contraseña, usuarioExiste.contraseña)
            if(autContraseña){
                const token = jwt.sign({...usuarioExiste}, process.env.SECRET_KEY)
            res.json({success: true , response: {token,...usuarioExiste}, error: null})

            }  
        }
        
        }catch(error){
            res.json({success: false, response: null, error: error})
        }
    },

    accederConToken: async(req,res) => {
        console.log(req.user)
        let {nombre, email, url} = req.user
        res.json({success: true, response: {nombre, email, url}})
        
    }

}

module.exports = controllersUsers

