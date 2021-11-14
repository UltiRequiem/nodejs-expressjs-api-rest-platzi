import pg from 'pg';

class Postgres {
  constructor() {
    this.client = new pg.Client({
      host: 'localhost',
      database: 'cool_db',
      user: 'zero_example',
      password: 'requiem_example',
      port: 5432,
    });

    (async () => {
      await this.client.connect();
    })();
  }
}

export default new Postgres();
