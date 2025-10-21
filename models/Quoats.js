import mongoose from "mongoose";

const quoatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

 mongoose.model("Quote", quoatSchema);
