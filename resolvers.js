import { users, quoats } from "./Fakedb.js";
import User from "./models/User.js";
import bcrypt from "bcryptjs";
const resolvers = {
  Query: {
    users: () => users,
    // find a single user by _id
    user: (_, { _id }) => users.find((u) => u._id === _id),
    quoats: () => quoats,
    iquoat: (_, { by }) => quoats.filter((quate) => quate.by === by),
  },
  User: {
    quoates: (ur) => quoats.filter((quoate) => quoate.by === ur._id),
  },
  Mutation: {
    signupUserDummy: async (_, { userNew }) => {
      const user = await User.findOne({ email: userNew.email });
      if (user) {
        throw new Error("user already exist with that email");
      }
      const hashedPassword = await bcrypt.hash(userNew.password, 12);
      const newuser = new User({
        ...userNew,
        password: hashedPassword,
      });
     return await newuser.save()
    },
  },
};

export default resolvers;
