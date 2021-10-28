/* eslint-disable class-methods-use-this */

class UserService {
  async create(data) {
    return data;
  }

  static async find() {
    return [];
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
