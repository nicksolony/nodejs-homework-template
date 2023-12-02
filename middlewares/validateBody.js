const {HttpError} = require("../helpers");

const validateBody = schema => {
    const func = (req, res, next) => {
        
        const { error } = schema.validate(req.body);
        if (error) {
            if (error.message === '"favorite" is required') {
                next(HttpError(400, `missing field favorite`));
            } else {
            next(HttpError(400, `missing required fields - ${error.message}`));}
        }
        next()
    }

    return func;
}

module.exports = validateBody;