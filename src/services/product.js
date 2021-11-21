import boom from '@hapi/boom';

import sequelize from '../libs/sequelize.js';

class ProductService {
  constructor() {
    this.db = sequelize;
  }

  async find() {
    const [data] = await this.db.query('SELECT * FROM tasks');
    return data;
  }

  async findOne(id) {
    const product = await this.find().find((item) => item.id === id);

    if (!product) {
      throw boom.notFound(`Product ${id} not found.`);
    }

    return product;
  }
}

export default new ProductService();
