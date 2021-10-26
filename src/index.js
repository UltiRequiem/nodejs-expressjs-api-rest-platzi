import express from 'express';

import { PORT } from './config.js';

import { productsRouter } from './routes/index.js';

const app = express();

app.use('/products', productsRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on http://localhost:${PORT}`);
});
