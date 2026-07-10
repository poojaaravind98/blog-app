const { gql } = require("graphql-tag");


const typeDefs = gql`

type Post {
    id: ID!
    title: String!
    content: String!
    createdAt: String!
}


type Query {
    posts: [Post]
}


type Mutation {
    addPost(
        title: String!
        content: String!
    ): Post
}

`;

module.exports = typeDefs;