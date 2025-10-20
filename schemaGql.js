import { gql } from "apollo-server";
const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    quoats: [Quoats]
    iquoat(by: ID!): [Quoats]
  }
  type User {
    id: ID!
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
