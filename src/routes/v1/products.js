import { Router } from 'express';

import { generateProductsData, defaultData } from '../../utils/index.js';

const productsRouter = Router();

productsRouter.get('/', ({ query }, response) => {
  response.json(generateProductsData(query.limit || 100));
});

productsRouter.get('/:id', ({ params }, response) => {
  response.json(defaultData[params.id]);
});

productsRouter.post('/', ({ body }, response) => {
  response.json({ message: 'Successfully posted.', body });
});

export default productsRouter;
