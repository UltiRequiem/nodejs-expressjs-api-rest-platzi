import { Router } from 'express';

import ProductService from '../../services/product.js';

const service = new ProductService();

const productsRouter = Router();

// eslint-disable-next-line no-unused-vars
productsRouter.get('/', ({ _query }, response) => {
  response.json(service.find());
});

productsRouter.get('/:id', ({ params }, response) => {
  response.json(service.findOne(params.id));
});

productsRouter.post('/', ({ body }, response) => {
  response.json({ message: 'Successfully posted.', body });
});

productsRouter.patch('/:id', ({ body, params }, response) => {
  response.json({ message: 'Successfully posted.', id: params.id, body });
});

export default productsRouter;
