import { Sequelize } from 'sequelize';

import setupModels from '../db/models/module.js';

import { URI } from '../config.js';

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);

sequelize.sync();

export default sequelize;
