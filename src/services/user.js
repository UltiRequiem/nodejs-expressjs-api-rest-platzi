/* eslint-disable class-methods-use-this */

import sequelize from '../libs/sequelize.js';

class UserService {
  constructor() {
    this.model = sequelize.models.User;
  }

  async create(data) {
    return this.model.create(data);
  }

  async find() {
    return this.model.findAll();
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    const user = this.model.findByPk(id);
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

export default new UserService();
