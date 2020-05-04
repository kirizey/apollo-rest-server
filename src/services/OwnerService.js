import models from '../models';

const OwnerService = {
  getAll() {
    return models.Person.findAll();
  },

  getById(id) {
    return models.Person.findOne({ where: { id } });
  },

  async create(fields) {
    const result = await models.Person.create(fields, {
      returning: true,
      plain: true,
    });

    if (result) {
      return result[1].dataValues;
    }

    return null;
  },

  async update(id, fields) {
    const result = await models.Person.update(fields, {
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
    return models.Person.findAll({ where: params });
  },
};

export default OwnerService;
