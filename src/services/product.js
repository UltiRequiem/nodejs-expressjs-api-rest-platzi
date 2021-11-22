import boom from '@hapi/boom';

import sequelize from '../libs/sequelize.js';

class ProductService {
  constructor() {
    this.db = sequelize;
    this.product = sequelize.models.product;
  }

  async find() {
    return this.product.findAll();
  }

  async create({ name }) {
    const [data] = await this.db.query(
      `INSERT INTO tasks(title, completed) values('${name}', false)`,
    );
    return data;
  }

  async findOne(id) {
    const allProduct = await this.find();
    const product = allProduct.find(
      (item) => item.id === Number.parseInt(id, 10),
    );

    if (!product) {
      throw boom.notFound(`Product ${id} not found.`);
    }

    return product;
  }
}

export default new ProductService();
