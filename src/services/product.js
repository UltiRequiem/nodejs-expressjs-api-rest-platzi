import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js';

class ProductService {
  constructor() {
    this.product = sequelize.models.product;
  }

  async find() {
    return this.product.findAll();
  }

  async create(data) {
    return this.product.create(data);
  }

  async findOne(id) {
    const allProduct = await this.find();
    const product = allProduct.find((item) => item.id === id);

    if (!product) {
      throw boom.notFound(`Product ${id} not found.`);
    }

    return product;
  }
}

export default new ProductService();
