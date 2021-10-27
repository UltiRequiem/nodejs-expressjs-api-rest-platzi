import { Router } from 'express';

import ProductService from '../../services/product.js';

const service = new ProductService();

const productsRouter = Router();

productsRouter.get('/', ({ query }, response) => {
  // eslint-disable-next-line unicorn/no-array-callback-reference
  response.json(service.find(query.limit));
});

productsRouter.get('/:id', ({ params }, response) => {
  response.json(service.findOne(params.id));
});

productsRouter.post('/', ({ body }, response) => {
  response.status(201).json(service.create(body));
});

productsRouter.patch('/:id', ({ body, params }, response) => {
  response.json(service.update(params.id, body));
});

productsRouter.delete('/:id', ({ params }, response) => {
  response.json(service.delete(params.id));
});

export default productsRouter;
