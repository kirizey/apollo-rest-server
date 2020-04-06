import { gql } from 'apollo-server';

const typeDef = gql`
  type Book {
    title: String
    author: String
  }
  extend type Query {
    books: [Book]
  }
`;

export default typeDef;
