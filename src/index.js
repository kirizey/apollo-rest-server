import { ApolloServer, gql } from 'apollo-server';

import models, { sequelize } from './models';
import company from './company';
import owner from './owner';

const typeDefs = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDefs, company.typeDefs, owner.typeDefs],
  resolvers: [company.resolvers, owner.resolvers],
  context: {
    models,
  },
});

sequelize.sync({  }).then(() => {
  console.log('🚀🚀🚀 DB synced');

  server.listen({ port: 4000, path: '/gql' }).then(({ url }) => {
    console.log(`🚀🚀🚀 Server ready at ${url}`);
  });
});
