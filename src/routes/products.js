import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', ({ query }, response) => {
  const data = [
    { product: 'watermelon' },
    { product: 'apple' },
    { product: 'apple pie' },
  ];

  response.json(query.limit ? data.slice(0, query.limit) : data);
});

productsRouter.get('/:id', ({ params }, response) => {
  response.json({ product: 'apple', id: params.id });
});

export default productsRouter;
