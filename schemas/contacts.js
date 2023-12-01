const { Schema } = require('mongoose');
const Joi = require("joi");
const myCustomJoi = Joi.extend(require('joi-phone-number'));

const contactsJoiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: myCustomJoi.string().phoneNumber().required(),
})

module.exports = {
    contactsJoiSchema,
}