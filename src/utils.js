import faker from 'faker';

export function generateProductsData(quantity) {
  return Array.from({ length: quantity }).map((_element, index) => ({
    name: faker.commerce.product(),
    id: index,
    price: `$${faker.commerce.price()}`,
    image: faker.image.imageUrl(),
  }));
}

export function generateCategoriesData(quantity) {
  return Array.from({ length: quantity }).map((_element, index) => ({
    id: index,
    category: faker.commerce.department(),
    image: faker.image.imageUrl(),
  }));
}

export const defaultProductsData = generateProductsData(100);
export const defaultCategoriesData = generateCategoriesData(100);

export function getEncoded(...strings) {
  return strings.map((string) => encodeURIComponent(string));
}
