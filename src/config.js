import dotenv from 'dotenv';
import process from 'node:process';

import { getEncoded } from './utils.js';

dotenv.config();

export const {
  ENV, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT,
} = process.env;

export const [USER, PASSWORD] = getEncoded(DB_USER, DB_PASSWORD);

export const URI = `postgres://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

export const PORT = process.env.PORT || 3000;
