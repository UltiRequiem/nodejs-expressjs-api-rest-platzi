import { Router } from 'express';

import validationHandler from '../../middlewares/validator.js';

import {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
} from '../../schemas/product.js';

import service from '../../services/product.js';

const productsRouter = Router();

productsRouter.get('/', async ({ query }, response) => {
  // eslint-disable-next-line unicorn/no-array-callback-reference
  response.json(await service.find(query.limit));
});

productsRouter.get(
  '/:id',
  validationHandler(getProductSchema, 'params'),
  ({ params }, response, next) => {
    try {
      response.json(service.findOne(params.id));
    } catch (error) {
      next(error);
    }
  },
);

productsRouter.post(
  '/',
  validationHandler(createProductSchema, 'body'),
  ({ body }, response) => {
    response.status(201).json(service.create(body));
  },
);

productsRouter.patch(
  '/:id',
  validationHandler(getProductSchema, 'params'),
  validationHandler(updateProductSchema, 'body'),
  ({ body, params }, response) => {
    response.json(service.update(params.id, body));
  },
);

productsRouter.delete(
  '/:id',
  validationHandler(getProductSchema, 'params'),
  ({ params }, response) => {
    response.json(service.delete(params.id));
  },
);

export default productsRouter;
