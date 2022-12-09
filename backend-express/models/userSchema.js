import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: { type: String, select: false },
  createdAt: { type: Date, default: Date.now },
});

export default model("User", userSchema);
