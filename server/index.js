require('dotenv').config();
const { importSchema } = require('graphql-import');
const { ApolloServer, gql } = require('apollo-server');
const opn = require('opn');
const PORT = process.env.port || 3000;
const {ModelPost, ModelBooks} = require('./model');

// console.log(process.env);

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`${importSchema(__dirname + "/schema/schema.graphql")}`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
// console.log('query', ModelPost);
const resolvers = {
  Query: {
    books: () => ModelBook.books,
    posts: () => ModelPost.posts,
  },
  Mutation: {
    createBook: (parent, args) => {
      // console.log('data', args);
      books.push({
        ...args,
        id: Date.now().toString().substr(-4)
      });
      return books;
    },
    createPost: async (parent, args) => {
      const rsp = ModelPost.createPost(args);
      return rsp;
    }
  }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  // typeDefs: __dirname + '/schema/schema.graphql',
  typeDefs,
  resolvers
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen({port: PORT}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  // opn(url);
});
