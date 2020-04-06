import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    owners: [Owner]
  }

  type Owner {
    name: String,
    companies: [Company]
  }
`;

export default typeDefs;
