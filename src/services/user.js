import boom from '@hapi/boom';
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
    const user = await this.model.findByPk(id);

    if (!user) throw boom.notFound(`User ${id} not found`);

    return user;
  }

  async update(id, changes) {
    const user = await this.findOnek(id);
    await user.update(changes);
    return user;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return user;
  }
}

export default new UserService();
