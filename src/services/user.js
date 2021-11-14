/* eslint-disable class-methods-use-this */

import DBService from '../libs/module.js';

class UserService {
  async create(data) {
    return data;
  }

  async find() {
    const rta = await DBService.client.query('SELECT * FROM tasks');
    return rta.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
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
