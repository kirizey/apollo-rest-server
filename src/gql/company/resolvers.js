import { UserInputError } from 'apollo-server';

export default {
  Query: {
    companies: (_, __, { models }) => models.Company.findAll(),
    company: (_, { id }, { models }) => models.Company.findOne({ where: { id } }),
  },

  Mutation: {
    createCompany: (_, fields, { models }) => models.Company.create(fields.input),
    updateCompany: async (_, fields, { models }) => {
      const { id, ...data } = fields.input;
      if (!id) return new UserInputError('You should provide company id');

      try {
        const result = await models.Company.update(data, {
          where: { id },
          returning: true,
          plain: true,
        });

        if (result) {
          return result[1].dataValues;
        }
      } catch (error) {
        return new UserInputError(error.message);
      }

      return null;
    },
  },

  Company: {
    owner: (parent, __, { models }) => {
      const { ownerId } = parent;

      if (ownerId) {
        return models.Owner.findOne({ where: { id: parent.ownerId } });
      }

      return null;
    },
  },
};
