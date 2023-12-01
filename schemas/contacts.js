const { Schema } = require('mongoose');
const Joi = require("joi");
const myCustomJoi = Joi.extend(require('joi-phone-number'));

const contactsJoiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: myCustomJoi.string().phoneNumber().required(),
});

const contactsMongooseSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    }
});

module.exports = {
    contactsJoiSchema,
    contactsMongooseSchema
}