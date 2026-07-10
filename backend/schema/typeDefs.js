const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    "Fetch all blog posts, most recent first"
    posts: [Post!]!
    "Fetch a single post by its id"
    post(id: ID!): Post
  }

  type Mutation {
    "Add a new blog post"
    addPost(title: String!, content: String!): Post!
    "Delete a blog post by its id"
    deletePost(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;
