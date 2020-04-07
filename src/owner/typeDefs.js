import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    owners: [Owner]
    owner: Owner
  }

  extend type Mutation {
    createOwner(name: String): Owner
  }

  type Owner {
    id: Int
    name: String,
    companies: [Company]
  }
`;

export default typeDefs;
