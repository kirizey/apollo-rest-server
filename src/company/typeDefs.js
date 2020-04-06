import { gql } from 'apollo-server';

export default gql`
 extend type Query {
    allCompanies: [Company]
  }

  type Mutation {
    createCompany(name: String): Company
  }

  type Company {
    name: String
    owner: Owner
  }
`;
