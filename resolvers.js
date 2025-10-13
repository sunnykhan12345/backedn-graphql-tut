import { users, quoats } from "./Fakedb.js";
const resolvers = {
  Query: {
    users: () => users,
    // ✅ Fix: find a single user by id
    user: (_, { id }) => users.find((u) => u.id === id),
    quoats: () => quoats,
    iquoat: (_, { by }) => quoats.filter((quate) => quate.by === by),
  },
  User: {
    quoates: (ur) => quoats.filter((quoate) => quoate.by === ur.id),
  },
};

export default resolvers;
