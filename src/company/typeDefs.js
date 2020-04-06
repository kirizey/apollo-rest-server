import { gql } from 'apollo-server';

const typeDefs = gql`
  type Company {
    name: String
    owner: String
  }
  extend type Query {
    companies: [Company]
  }
`;

export default typeDefs;
