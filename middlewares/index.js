const validateBody = require("./validateBody");
const isValidId = require("./isValidId")
const authenticate = require("./authenticate")
const checkOwner = require("./checkOwner");
const upload = require("./upload");

module.exports = {
    validateBody,
    isValidId,
    authenticate,
    checkOwner,
    upload,
}