import pg from 'pg';

import {
  DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT,
} from '../config.js';

function postgres() {
  const DB = new pg.Client({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
  });

  let databaseConnection;

  DB.connect().then((value) => {
    databaseConnection = value;
  });

  return databaseConnection;
}

export default postgres();
