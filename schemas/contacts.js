const Joi = require("joi");
const myCustomJoi = Joi.extend(require('joi-phone-number'));

const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.email().required(),
    phone: myCustomJoi.string().phoneNumber(),
})

module.exports = {
    addSchema,
}