import { Router } from 'express';

import {
  generateProductsData,
  defaultProductsData,
} from '../../utils/index.js';

const productsRouter = Router();

productsRouter.get('/', ({ query }, response) => {
  response.json(generateProductsData(query.limit || 100));
});

productsRouter.get('/:id', ({ params }, response) => {
  response.json(defaultProductsData[params.id]);
});

productsRouter.post('/', ({ body }, response) => {
  response.json({ message: 'Successfully posted.', body });
});

productsRouter.patch('/:id', ({ body, params }, response) => {
  response.json({ message: 'Successfully posted.', id: params.id, body });
});

export default productsRouter;
