const { gql } = require('apollo-server-express');

// set up login in Mutation may also include username per user-controller function
const typeDefs = gql`
type User {
    _id: ID!
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
}

type Book {
    _id: ID!
    description: String
    authors: [String]
    bookId: String
    image: String
    link: String
    title: String
}

input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    deleteBook(bookId: ID!): User
}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;