import { gql } from "apollo-server";
const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quoats: [Quoats]
    iquoat(by: ID!): [Quoats]
  }
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    quoates: [Quoats]
  }
  type Quoats {
    name: String
    by: ID
  }
  type Token {
    token: String!
  }
  type Mutation {
    signupUserDummy(userNew: UserInput): User
    signinUser(userSignin: UserSigninInput): Token
  }
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  input UserSigninInput {
    email: String!
    password: String!
  }
`;

export default typeDefs;
