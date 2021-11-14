import pg from 'pg';

import {
  DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT,
} from '../config.js';

class Postgres {
  constructor() {
    this.client = new pg.Client({
      host: DB_HOST,
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
      port: DB_PORT,
    });

    (async () => {
      await this.client.connect();
    })();
  }
}

export default new Postgres();
