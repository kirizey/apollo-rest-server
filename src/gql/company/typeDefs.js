import { gql } from 'apollo-server';

export default gql`
 extend type Query {
    companies: [Company]
    company(id: Int!): Company
  }

  type Mutation {
    createCompany(input: CompanyCreateInput): Company
    updateCompany(input: CompanyUpdateInput): Company
  }

  type Company {
    id: Int!
    name: String
    legalName: String
    abbrName: String
    phone: String
    address: String
    city: String
    zipCode: Int
    employeesNumber: Int
    description: String
    lastResearchDate: String
    logo: String
    photos: [String]
    web: String
    owner: Owner
  }

  input CompanyCreateInput {
    name: String
    legalName: String
    abbrName: String
    phone: String
    address: String
    city: String
    zipCode: Int
    employeesNumber: Int
    description: String
    lastResearchDate: String
    logo: String
    photos: [String]
    web: String
    ownerId: Int
  }

  input CompanyUpdateInput {
    id: Int!
    name: String
    legalName: String
    abbrName: String
    phone: String
    address: String
    city: String
    zipCode: Int
    employeesNumber: Int
    description: String
    lastResearchDate: String
    logo: String
    photos: [String]
    web: String
    ownerId: Int
  }
`;
