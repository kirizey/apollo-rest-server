
const resolvers = {
  Query: {
    owners: (_, __, { models }) => models.Owner.findAll(),
    owner: (_, { id }, { models }) => models.Owner.findOne({ where: { id } }),
  },

  Mutation: {
    createOwner: (_, { name }, { models }) => models.Owner.create({ name }),
  },

  Owner: {
    companies: (parent, __, { models }) => models.Company.findAll({ where: { ownerId: parent.id } }),
  },
};

export default resolvers;
