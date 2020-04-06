export default {
  Query: {
    allCompanies: (_, __, { models }) => models.Company.findAll(),
  },

  Mutation: {
    createCompany: (_, { name }, { models }) => models.Company.create({ name }),
  },
};
