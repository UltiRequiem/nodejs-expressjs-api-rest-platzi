import { Router } from 'express';

import {
  defaultCategoriesData,
  generateCategoriesData,
} from '../../utils.js';

const categoriesRouter = Router();

categoriesRouter.get('/', ({ query }, response) => {
  response.json(generateCategoriesData(query.limit || 100));
});

categoriesRouter.get('/:id', ({ params }, response) => {
  response.json(defaultCategoriesData[params.id]);
});

categoriesRouter.post('/', ({ body }, response) => {
  response.json({ message: 'Successfully posted.', body });
});

categoriesRouter.patch('/:id', ({ body, params }, response) => {
  response.json({ message: 'Successfully posted.', id: params.id, body });
});

export default categoriesRouter;
