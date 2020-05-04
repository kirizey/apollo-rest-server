import { CompanyService, OwnerService } from '../../services';

const resolvers = {
  Query: {
    owners: () => OwnerService.getAll(),
    owner: (_, { id }) => OwnerService.getById(id),
  },

  Mutation: {
    createOwner: (_, { name }) => OwnerService.create({ name }),
  },

  Owner: {
    companies: (parent) => CompanyService.getWhere({ ownerId: parent.id }),
  },
};

export default resolvers;
