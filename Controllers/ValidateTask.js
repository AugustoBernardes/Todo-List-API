const Joi = require('@hapi/joi')

const validateTask = (data) => {
    const schema = Joi.object({
        title:Joi.string().min(3).required(),
    })

    return schema.validate(data)
}

module.exports = validateTask 