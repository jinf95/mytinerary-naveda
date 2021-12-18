const joi = require ('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
    nombre:joi.string().required().trim(),
    apellido:joi.string().required().trim(),
    email: joi.string().email().required().trim().messages({
        'string.email':'You must enter a valid email',
        'string.empty':'This field cannot be empty, it is required'
    }),
    contraseña: joi.string().required().trim().min(8).messages({
        'string.min':'The password field must have 8 characters includin letters and numbers.',
        'string.empty':'This field cannot be empty, it is required',
    }),
    url: joi.required(),
    ciudad: joi.string().optional(),
    pais: joi.required().messages({
        'string.empty':'This field cannot be empty, it is required',
    }),
    google: joi.boolean(),

})

const validation = schema.validate(req.body,{abortEarly:false})

    if(validation.error){
       return res.json({success: false, response: validation.error.details, error: true})
    }
    next()
}

module.exports = validator