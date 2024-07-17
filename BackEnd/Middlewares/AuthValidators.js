const joi = require('joi');

const registrationValidations = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(20).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(20).required(),
        mobileNumber: joi.number().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.json({
            message: "Bad request,Please check your validations properly", error,
            statuscode: 402
        });
    }
    next();
}

const loginValidations = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(20).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.json({
            message: "Bad request,Please check your validations properly", error
        });
    }
    next();
}

module.exports = {
    registrationValidations,
    loginValidations
}