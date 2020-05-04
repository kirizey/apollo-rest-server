import { UserInputError } from 'apollo-server';

import { CompanyService, OwnerService } from '../../services';

export default {
  Query: {
    companies: () => CompanyService.getAll(),
    company: (_, { id }) => CompanyService.getById(id),
  },

  Mutation: {
    createCompany: (_, fields) => CompanyService.create(fields.input),
    updateCompany: async (_, fields) => {
      const { id, ...data } = fields.input;
      if (!id) return new UserInputError('You should provide company id');

      try {
        return CompanyService.update(data);
      } catch (error) {
        return new UserInputError(error.message);
      }
    },
  },

  Company: {
    owner: (parent) => {
      const { ownerId } = parent;

      if (ownerId) {
        return OwnerService.getById(parent.ownerId);
      }

      return null;
    },
  },
};
