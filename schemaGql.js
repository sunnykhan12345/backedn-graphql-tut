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
    firstName:String!
    lastName: String!
    email: String!
    password: String!
    quoates: [Quoats]
  }
  type Quoats {
    name: String
    by: ID
  }
  type Mutation {
    signupUserDummy(userNew: UserInput): User
  }
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;

export default typeDefs;
