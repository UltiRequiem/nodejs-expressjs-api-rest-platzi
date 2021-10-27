import faker from 'faker';

import boom from '@hapi/boom';

export default class ProductService {
  constructor() {
    this.products = [];
    this.generate();
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

  find(limit) {
    return limit ? this.products.slice(0, limit) : this.products;
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
