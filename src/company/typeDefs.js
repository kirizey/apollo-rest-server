import { gql } from 'apollo-server';

export default gql`
 extend type Query {
    companies: [Company]
    company(id: Int!): Company
  }

  type Mutation {
    createCompany(name: String!, ownerId: Int): Company
    updateCompany(id: Int!, name: String, ownerId: Int): Company
  }

  type Company {
    id: Int!
    name: String
    owner: Owner
  }
`;
