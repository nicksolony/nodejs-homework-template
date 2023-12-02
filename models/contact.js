const {Schema, model} = require("mongoose");
const Joi = require("joi");
const myCustomJoi = Joi.extend(require('joi-phone-number'));
const { handleMongooseError } = require("../helpers");

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
}, { versionKey: false, timestamps: true });

contactsMongooseSchema.post("save", handleMongooseError);

const contactsJoiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: myCustomJoi.string().phoneNumber().required(),
    favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

const Contact = model('contact', contactsMongooseSchema);

const schemas = {
    contactsJoiSchema,
    contactsMongooseSchema,
    updateFavoriteSchema
};

module.exports = {
  Contact,
  schemas
}