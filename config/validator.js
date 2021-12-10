const joi = require ('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
    nombre:joi.string().required().trim(),
    apellido:joi.string().required().trim(),
    email: joi.string().email().required().trim().messages({
        'string.email':'You must enter a valid email',
        'string.empty':'This field cannot be empty, it is required'
    }),
    contraseña: joi.string().required().trim().min(8).max(20).messages({
        'string.min':'The password field must have 8 characters includin letters and numbers.',
        'string.max':'The password field must contain 20 characters or less',
        'string.empty':'This field cannot be empty, it is required',
    }),
    url: joi.required(),
    ciudad: joi.string().optional(),
    pais: joi.string().required().messages({
        'string.empty':'This field cannot be empty, it is required',
    })

})

const validation = schema.validate(req.body,{abortEarly:true})

    if(validation.error){
       return res.json({success: false, response: validation.error.details})
    }
    next()
}

module.exports = validator