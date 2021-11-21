import { Router } from 'express';

import { categoriesRouter, productsRouter, usersRouter } from './v1/index.js';

export function routerV1() {
  const router = Router();
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  return router;
}

export function routerV2() {}
