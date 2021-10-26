import faker from 'faker';

export function generateProductsData(quantity) {
  return Array.from({ length: quantity }).map((_element, index) => ({
    name: faker.commerce.product(),
    id: index,
    price: `$${faker.commerce.price()}`,
    image: faker.image.imageUrl(),
  }));
}

export const defaultData = generateProductsData(100);
