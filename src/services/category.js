import sequelize from '../libs/sequelize.js';

class CategoryService {
  constructor() {
    this.model = sequelize.models.Category;
  }

  async create(data) {
    const newCategory = await this.model.create(data);
    return newCategory;
  }

  async find() {
    const categories = await this.model.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await this.model.findByPk(id, {
      include: ['products'],
    });
    return category;
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
