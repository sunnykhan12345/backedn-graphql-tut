import { users, quoats } from "./Fakedb.js";
import { randomBytes } from "crypto";
const resolvers = {
  Query: {
    users: () => users,
    // find a single user by id
    user: (_, { id }) => users.find((u) => u.id === id),
    quoats: () => quoats,
    iquoat: (_, { by }) => quoats.filter((quate) => quate.by === by),
  },
  User: {
    quoates: (ur) => quoats.filter((quoate) => quoate.by === ur.id),
  },
  Mutation: {
    signupUserDummy: (_, { userNew }) => {
      const id = randomBytes(5).toString("hex");
      users.push({
        id,
        ...userNew,
      });
      return users.find((user) => user.id == id);
    },
  },
};

export default resolvers;
