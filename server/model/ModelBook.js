// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
  {
    id: 'abc',
    title: 'Harry Potter and the Chamber of Secrets',
    author: {
      firstName: 'J.K.',
      lastName: 'Rowling'
    }
  },
  {
    id: '123',
    title: 'Jurassic Park',
    author: {
      firstName: 'Michael',
      lastName: 'Crichton'
    },
  },
];

module.exports = {
  books
}