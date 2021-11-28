import SequelizeLib from 'sequelize';

import setupModels from '../db/models/index.js';

import { URI } from '../config.js';

export const { Model, DataTypes, Sequelize } = SequelizeLib;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);

sequelize.sync();

export default sequelize;
