import Book from './Book';

const resolvers = {
  Query: {
    books: () => Book.all(),
  },
};

export default resolvers;
