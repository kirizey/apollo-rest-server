export default {
  Query: {
    allCompanies: (_, __, { models }) => models.Company.findAll().then(res => {
      console.log(res);

      return res;
    }),
  },

  Mutation: {
    createCompany: (_, { name }, { models }) => models.Company.create({ name }),
  },
};
