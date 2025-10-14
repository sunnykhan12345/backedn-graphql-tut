import {gql } from "apollo-server";
const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    quoats: [Quoats]
    iquoat(by: ID!): [Quoats]
  }
  type User {
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    quoates: [Quoats]
  }
  type Quoats {
    name: String
    by: ID
  }
    type Mutation{signupUserDummy(firstname: String!, lastname: String!,email: String!, password: String!):User
    }
`;

export default typeDefs;
