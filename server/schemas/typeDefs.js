const { gql } = require('apollo-server-express');

// set up login in Mutation may also include username per user-controller function
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
    bookCount: Int
}

type Book {
    _id: ID
    description: String
    authors: [Authors]
    bookId: String
    image: String
    link: String
    title: String
}

type Authors: {
    _id: ID
    name: String
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
}

type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(username: String!, title: String!): User
    deleteBook(username: String!, bookId: String!): User
}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;