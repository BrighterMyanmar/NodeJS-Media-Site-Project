const joi = require('joi');

let Schema = {
    register: joi.object({
        name : joi.string(), 
        phone : joi.string().min(7).max(11),
        email: joi.string().min(13),
        password: joi.string().min(8)
    }),
    login: joi.object({
        phone : joi.string().min(7).max(11),
        password: joi.string().min(8)
    })
}

module.exports = Schema;

