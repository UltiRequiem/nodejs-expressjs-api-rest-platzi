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
app.use(
  cors({
    origin: (origin, callback) => {
      // eslint-disable-next-line no-unused-expressions
      [`http://localhost:${PORT}`].includes(origin)
        ? callback(undefined, true)
        : callback(new Error('Not allowed by CORS!'));
    },
  }),
);

app.use('/v1', routerV1());

app.use(boomErrorHandler);

app.use(logErrors);

app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on http://localhost:${PORT}`);
});
