const Joi = require('@hapi/joi');

function validateRegistration(data) {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(5).max(100).required(),

    email: Joi.string().email({ minDomainSegments: 2 }).required().min(6),

    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),

    towatch: Joi.array(),
  });
  return Joi.validate(data, schema);
}

module.exports = { validateRegistration };
