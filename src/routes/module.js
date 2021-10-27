import { Router } from 'express';

import { productsRouter, categoriesRouter } from './v1/module.js';

export function routerV1() {
  const router = Router();
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  return router;
}

export function routerV2() {}
