const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): User
  }

  type User {
    id: ID
    name: String
    email: String
  }
`);

module.exports = schema;
