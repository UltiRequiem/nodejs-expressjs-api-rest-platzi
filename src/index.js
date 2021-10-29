import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { PORT } from './config.js';

import { routerV1 } from './routes/module.js';

import {
  boomErrorHandler,
  errorHandler,
  logErrors,
} from './middlewares/error.js';

const app = express();

app.use(json());
app.use(helmet());
app.use(cors());

app.use('/v1', routerV1());

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on http://localhost:${PORT}`);
});
