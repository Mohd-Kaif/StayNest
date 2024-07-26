const Joi = require('joi');

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.object({
            filename: Joi.string().allow("", null),
            url: Joi.string().allow("", null),
        }).allow(null),
        price: Joi.number().min(0),
        location: Joi.string().required(),
        country: Joi.string().required()
    }).required(),
});

module.exports = listingSchema;