const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    token: String!
    created: String!
  }
  type Post {
    id: ID!
    body: String!
    username: String!
    created: String!
    comments: [Comment]!
    commentCount: Int!
    likes: [Like]!
    likeCount: Int!
  }
  type Comment {
    id: ID!
    body: String!
    username: String!
    created: String!
  }
  type Like {
    id: ID!
    username: String!
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
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;