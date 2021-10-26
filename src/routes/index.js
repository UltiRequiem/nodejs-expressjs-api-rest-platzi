import { Router } from 'express';

import { productsRouter } from './v1/index.js';

export function routerV1() {
  const router = Router();
  router.use('/products', productsRouter);
  return router;
}

export function routerV2() {}
