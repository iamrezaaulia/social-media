const { gql } = require('apollo-server');

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    username: String!
    created: String!
  }
  type User {
    id: ID!
    email: String!
    username: String!
    token: String!
    created: String!
  }
  input RegisterInput {
    email: String!
    username: String!
    password: String!
    confirmPassword: String!
  }
  input LoginInput {
    username: String!
    password: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(loginInput: LoginInput): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
  }
`;