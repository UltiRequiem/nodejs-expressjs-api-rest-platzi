import sequelize from '../libs/sequelize.js';

class CategoryService {
  constructor() {
    this.model = sequelize.models.Category;
  }

  async create(data) {
    return this.model.create(data);
  }

  async find() {
    return this.model.findAll();
  }

  async findOne(id) {
    return this.model.findByPk(id, {
      include: ['products'],
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  async delete(id) {
    return { id };
  }
}

export default new CategoryService();
