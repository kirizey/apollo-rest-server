import models from '../models';

const OwnerService = {
  getAll() {
    console.log('kek')
    return models.Owner.findAll();
  },

  getById(id) {
    return models.Owner.findOne({ where: { id } });
  },

  async create(fields) {
    const result = await models.Owner.create(fields, {
      returning: true,
      plain: true,
    });

    if (result) {
      return result[1].dataValues;
    }

    return null;
  },

  async update(id, fields) {
    const result = await models.Owner.update(fields, {
      where: { id },
      returning: true,
      plain: true,
    });

    if (result) {
      return result[1].dataValues;
    }

    return null;
  },

  getWhere(params) {
    return models.Owner.findAll({ where: params });
  },
};

export default OwnerService;
