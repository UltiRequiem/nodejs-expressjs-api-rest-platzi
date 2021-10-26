import faker from 'faker';

export function generateProductsData(quantity) {
  const products = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < quantity; index++) {
    products.push({
      name: faker.commerce.product(),
      id: index,
      price: `$${faker.commerce.price()}`,
      image: faker.image.imageUrl(),
    });
  }

  return products;
}

export const defaultData = generateProductsData(100);
