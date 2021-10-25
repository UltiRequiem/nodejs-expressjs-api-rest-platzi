import express from 'express';

import { PORT } from './config.js';

const app = express();

app.get('/', (request, response) => {
  response.send({ message: 'Hello, world!' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on http://localhost:${PORT}`);
});
