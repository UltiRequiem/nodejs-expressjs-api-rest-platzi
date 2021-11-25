import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { PORT } from './config.js';

import { routerV1 } from './routes/index.js';

import {
  boomErrorHandler,
  errorHandler,
  ormErrorHandler,
  logErrors,
} from './middlewares/error.js';

const app = express();

app.use(json());
app.use(helmet());
app.use(cors());

app.use('/v1', routerV1());

app.use(logErrors);
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on http://localhost:${PORT}`);
});
