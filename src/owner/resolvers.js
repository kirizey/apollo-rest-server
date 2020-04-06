import Owner from './Owner';

const resolvers = {
  Query: {
    owners: () => Owner.all(),
  },
};

export default resolvers;
