import { ApolloServer, gql } from 'apollo-server';
import company from './company';

const typeDefs = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDefs, company.typeDefs],
  resolvers: [company.resolvers],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
