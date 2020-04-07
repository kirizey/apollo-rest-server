import { UserInputError } from 'apollo-server';

export default {
  Query: {
    companies: (_, __, { models }) => models.Company.findAll(),
    company: (_, { id }, { models }) => models.Company.findOne({ where: { id } }),
  },

  Mutation: {
    createCompany: (_, { name, ownerId }, { models }) => models.Company.create({ name, ownerId }),
    updateCompany: async (_, { id, ...rest }, { models }) => {
      if (!id) throw new UserInputError('You should provide company id');

      try {
        const company = await models.Company.update(rest, {
          where: { id },
        });

        return company;
      } catch (error) {
        throw new UserInputError(error.message);
      }
    },
  },

  Company: {
    owner: (parent, args, { models }) => models.Owner.findOne({ where: { id: parent.ownerId } }),
  },
};
