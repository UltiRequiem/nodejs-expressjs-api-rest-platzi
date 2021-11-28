import { Router } from 'express';

import validationHandler from '../../middlewares/validator.js';

import {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
} from '../../schemas/product.js';

import service from '../../services/product.js';

const productsRouter = Router();

productsRouter.get('/', async (_request, { json }) => {
  json(await service.find());
});

productsRouter.get(
  '/:id',
  validationHandler(getProductSchema, 'params'),
  async ({ params }, { json }, next) => {
    try {
      json(await service.findOne(params.id));
    } catch (error) {
      next(error);
    }
  },
);

productsRouter.post(
  '/',
  validationHandler(createProductSchema, 'body'),
  ({ body }, { status }) => {
    status(201).json(service.create(body));
  },
);

productsRouter.patch(
  '/:id',
  validationHandler(getProductSchema, 'params'),
  validationHandler(updateProductSchema, 'body'),
  ({ body, params }, { json }) => {
    json(service.update(params.id, body));
  },
);

productsRouter.delete(
  '/:id',
  validationHandler(getProductSchema, 'params'),
  ({ params }, { json }) => {
    json(service.delete(params.id));
  },
);

export default productsRouter;
