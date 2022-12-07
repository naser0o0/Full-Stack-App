import Joi from "joi";

export const postSchemaJoi = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  body: Joi.string().required(),
});

export const userSchemaJoi = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().alphanum().min(12).required(),
});

export const loginSchemaJoi = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().alphanum().min(12).required(),
});
