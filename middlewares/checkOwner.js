const { HttpError } = require("../helpers");
const { Contact } = require("../models/contact");



const checkOwner = async (req, res, next) => {
    const { id } = req.user;
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    if (result.owner.toString() !== id) {
        next(HttpError(401));
    };
    next();
};

module.exports = checkOwner;