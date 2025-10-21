import { JWT_SECRET } from "./config.js";
import { users, quoats } from "./Fakedb.js";
import User from "./models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
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
      return await newuser.save();
    },
    signinUser: async (_, { userSignin }) => {
     const user = await User.findOne({email:userSignin.email})
     if(!user){
      throw new Error("User dosent exist with that email!")
     }
     const doMatch =  await bcrypt.compare(userSignin.password,user.password)
        if (!doMatch) {
          throw new Error("email or password invalid");
        }
       const token =  jwt.sign({userId:user._id},JWT_SECRET)
       return {token}
    },
  },
};

export default resolvers;
