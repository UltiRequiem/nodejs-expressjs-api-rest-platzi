import Joi from 'joi';

export const id = Joi.number().integer();
export const name = Joi.string().min(3).max(15);
export const image = Joi.string().uri();

export const createCategorySchema = Joi.object({
  name: name.required(),
  image: image.required(),
});

export const updateCategorySchema = Joi.object({
  name,
  image,
});

export const getCategorySchema = Joi.object({
  id: id.required(),
});
