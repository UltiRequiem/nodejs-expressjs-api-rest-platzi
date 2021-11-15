import { Sequelize } from 'sequelize';

import setupModels from '../db/models/module.js';

import {
  DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT,
} from '../config.js';

const USER = encodeURIComponent(DB_USER);
const PASSWORD = encodeURIComponent(DB_PASSWORD);
const URI = `postgres://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false,
});

setupModels(sequelize);

sequelize.sync();

export default sequelize;
