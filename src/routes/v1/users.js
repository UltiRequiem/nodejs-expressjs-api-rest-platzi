import { Router } from 'express';

import UserService from '../../services/user.js';
import validatorHandler from '../../middlewares/validator.js';
import {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} from '../../schemas/product.js';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    const products = await UserService.find();
    response.json(products);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async ({ params: { id } }, response, next) => {
    try {
      response.json(await UserService.findOne(id));
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async ({ body }, response, next) => {
    try {
      const newProduct = await UserService.create(body);
      response.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async ({ body, params: { id } }, response, next) => {
    try {
      const product = await UserService.update(id, body);
      response.json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async ({ params: { id } }, response, next) => {
    try {
      await UserService.delete(id);
      response.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  },
);

export default router;
