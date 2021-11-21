import { User, UserSchema } from './user.model.js';

export default function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
}
