import sequelize from '../libs/sequelize.js';

class OrderService {
  constructor() {
    this.model = sequelize.models.Order;
  }

  async create(data) {
    return this.model.create(data);
  }

  async addItem(data) {
    return this.model.create(data);
  }

  // eslint-disable-next-line class-methods-use-this
  async find() {
    return [];
  }

  async findOne(id) {
    return this.models.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
        'items',
      ],
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  async delete(id) {
    return { id };
  }
}

export default new OrderService();
