import mongoose, { Schema } from "mongoose";

const blogPostSchema = new Schema({
  title: String,
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("blogPost", blogPostSchema);
