import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', (_request, response) => {
  response.json({ product: 'watermelon' });
});

export default productsRouter;
