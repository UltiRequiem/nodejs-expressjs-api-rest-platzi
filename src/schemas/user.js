import Joi from 'joi';

export const id = Joi.number().integer();
export const email = Joi.string().email();
export const password = Joi.string().min(8);
export const role = Joi.string().min(5);

export const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
});

export const updateUserSchema = Joi.object({
  email,
  role,
});

export const getUserSchema = Joi.object({
  id: id.required(),
});
