import { Router } from 'express';

import CategoryService from '../../services/category.js';

const categoriesRouter = Router();

categoriesRouter.get('/', async (_request, { json }) => {
  json(await CategoryService.find());
});

categoriesRouter.get('/:id', async ({ params: { id } }, { json }) => {
  json(await CategoryService.findOne(id));
});

categoriesRouter.post('/', async ({ body }, { json }) => {
  json(await CategoryService.create(body));
});

categoriesRouter.patch('/:id', ({ body, params: { id } }, { json }) => {
  json(CategoryService.update(id, body));
});

export default categoriesRouter;
