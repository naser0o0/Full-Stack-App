import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});
