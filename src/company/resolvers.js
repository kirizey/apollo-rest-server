import Company from './Company';

const resolvers = {
  Query: {
    companies: () => Company.all(),
  },
};

export default resolvers;
