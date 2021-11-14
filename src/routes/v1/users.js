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
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const product = UserService.findOne(id);
      response.json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (request, response, next) => {
    try {
      const { body } = request;
      const newProduct = UserService.create(body);
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
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const { body } = request;
      const product = UserService.update(id, body);
      response.json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      UserService.delete(id);
      response.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  },
);

export default router;
