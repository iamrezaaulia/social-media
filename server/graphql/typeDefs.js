const { gql } = require('apollo-server');

module.exports = gql`
  type Post {
    id: ID!,
    body: String!,
    username: String!,
    created: String!
  }
  type User {
    id: ID!,
    email: String!,
    username: String!,
    token: String!,
    created: String!
  }
  input RegisterInput {
    email: String!,
    username: String!,
    password: String!,
    confirmPassword: String!
  }
  type Query {
    getPosts: [Post]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
  }
`;