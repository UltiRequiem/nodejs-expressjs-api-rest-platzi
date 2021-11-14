import faker from 'faker';
import boom from '@hapi/boom';

import PostgresPool from '../libs/postgres.pool.js';

class ProductService {
  constructor() {
    this.products = [];
    this.generate();

    this.pool = PostgresPool;

    this.pool.on('error', (error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
  }

  generate() {
    this.products = Array.from({ length: 100 }).map(() => ({
      name: faker.commerce.productName(),
      id: faker.datatype.uuid(),
      price: `$${faker.commerce.price()}`,
      image: faker.image.imageUrl(),
    }));
  }

  create({ name, price, image }) {
    const newProduct = {
      id: faker.datatype.uuid(),
      name,
      price,
      image,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  async find(limit) {
    const rta = await this.pool.query('SELECT * FROM tasks');
    return limit ? rta.rows.slice(0, limit) : rta.rows;
  }

  findOne(id) {
    const product = this.products.find((item) => item.id === id);

    if (!product) {
      throw boom.notFound(`Product ${id} not found.`);
    }

    return product;
  }

  update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw boom.notFound(`Product ${id} not found.`);
    }

    this.products[index] = {
      ...this.products[index],
      ...changes,
    };

    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw boom.notFound(`Product ${id} not found.`);
    }

    this.products = this.products.slice(index, 1);

    return { message: `${id} deleted correctly.` };
  }
}

export default new ProductService();
