import dotenv from 'dotenv';
import process from 'node:process';

dotenv.config();

export const {
  ENV, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT,
} = process.env;

export const PORT = process.env.PORT || 3000;
