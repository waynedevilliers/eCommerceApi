import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().positive().required(),
  categoryId: Joi.number().integer().required(),
});
