
const resolvers = {
  Query: {
    owners: (_, __, { models }) => models.Person.findAll(),
    owner: (_, { id }, { models }) => models.Person.findOne({ where: { id } }),
  },

  Mutation: {
    createOwner: (_, { name }, { models }) => models.Person.create({ name }),
  },

  Owner: {
    companies: (parent, __, { models }) => models.Company.findAll({ where: { ownerId: parent.id } }),
  },
};

export default resolvers;
