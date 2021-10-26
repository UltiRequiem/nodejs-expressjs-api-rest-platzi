import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', (_request, response) => {
  response.json([{ product: 'watermelon' }]);
});

productsRouter.get('/:id', ({ params }, response) => {
  response.json({ product: 'apple', id: params.id });
});

export default productsRouter;
