import { Router } from 'express';
import UserService from '../../services/user.js';
import validatorHandler from '../../middlewares/validator.js';
import {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} from '../../schemas/product.js';

const router = Router();

router.get('/', async (_request, { json }, next) => {
  try {
    json(await UserService.find());
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async ({ params: { id } }, { json }, next) => {
    try {
      json(await UserService.findOne(id));
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async ({ body }, { status }, next) => {
    try {
      status(201).json(await UserService.create(body));
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async ({ body, params: { id } }, { json }, next) => {
    try {
      json(await UserService.update(id, body));
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async ({ params: { id } }, { status }, next) => {
    try {
      status(201).json(await UserService.delete(id));
    } catch (error) {
      next(error);
    }
  },
);

export default router;
