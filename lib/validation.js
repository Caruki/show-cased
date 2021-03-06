const Joi = require('@hapi/joi');

function validateRegistration(data) {
  const schema = Joi.object({
    username: Joi.string().min(5).max(100).required(),

    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .lowercase()
      .required()
      .min(6),

    password: Joi.string().min(6).required(),
  });
  const validation = schema.validate(data);
  return validation;
}

function validateLogin(data) {
  const schema = Joi.object({
    username: Joi.string().allow(''),

    email: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),

    password: Joi.string().required(),
  }).or('username', 'email');
  const validation = schema.validate(data);
  return validation;
}

module.exports = { validateRegistration, validateLogin };
