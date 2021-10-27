import faker from 'faker';

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

  create() {}

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((item) => item.id === id);
  }

  update() {}

  delete() {}
}
