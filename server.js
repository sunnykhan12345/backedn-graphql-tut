import { ApolloServer} from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import typeDefs from "./schemaGql.js";
import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
mongoose.connect(MONGODB_URI)
mongoose.connection.on("connected", () =>{
  console.log("db is connected succefully")
})
mongoose.connection.on("erorr", (erorr) => {
  console.log("error is connecting", erorr);
});

// import modles here
import resolvers from "./resolvers.js";
import "./models/User.js";
import "./models/Quoats.js"

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`server ready that url is ${url}`);
});

