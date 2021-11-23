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
    return this.model.findByPk(id);
  }

  async update(id, changes) {
    const user = await this.model.findByPk(id);
    user.update(changes);
    return user;
  }

  async delete(id) {
    return { id };
  }
}

export default new UserService();
