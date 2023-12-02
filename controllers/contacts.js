const {Contact} = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
    const result = await Contact.find({},"-createdAt -updatedAt");
    console.log(req.url);
    res.json(result);
}

const getById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

const add = async (req, res) => {
    const result = await Contact.create(req.body);
    console.log(req.body);
    res.status(201).json(result);
};

const updateById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

// const deleteById = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await contacts.removeContact(contactId);
//     if (!result) {
//         throw HttpError(404, "Not found");
//     }
//     res.json({
//         message: "Contact deleted"
//     })
// }

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    // deleteById: ctrlWrapper(deleteById),
}