import { User, UserSchema } from './user.js';
import { Product, ProductSchema } from './product.js';
import { Order, OrderSchema } from './order.js';
import { OrderProduct, OrderProductSchema } from './order-product.js';
import { Category, CategorySchema } from './category.js';
import { Customer, CustomerSchema } from './costumer.js';

export default function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}
