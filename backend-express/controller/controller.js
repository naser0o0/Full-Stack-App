import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import db from "../db/db.js";
import blogPost from "../models/postSchema.js";
import User from "../models/userSchema.js";
import asyncHandler from "../utilities/asyncHandler.js";
import ErrorResponse from "../utilities/ErrorResponse.js";

/**
 * Articles
 */
export const getArticles = async (req, res) => {
  const blogPosts = await blogPost.find();
  res.status(200).json(blogPosts);
};
export const createArticle = (req, res) => {
  const { title, author, body } = req.body;
  blogPost
    .create({
      title: title,
      author: author,
      body: body,
    })
    .then((newBlogPost) => {
      res.status(201).json(newBlogPost);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
};
export const getSingleArticle = (req, res) => {
  res.status(200).json({ msg: "Hi single Article" });
};
export const updateArticle = (req, res) => {
  res.status(200).json({ msg: "Article updated" });
};
export const deleteArticle = (req, res) => {
  res.status(200).json({ msg: "Article deleted" });
};

/**
 * User Login/Register
 */
export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email }).select("+password");
  if (!userExists) throw new ErrorResponse("User doesn't exist", 404);
  console.log(userExists);
  const pwMatch = await bcrypt.compare(password, userExists.password);
  if (!pwMatch) throw new ErrorResponse("False password", 403);
  const token = jwt.sign({ _id: userExists._id }, process.env.JWT_SECRET);
  res.status(200).json(token);
});

export const createUser = asyncHandler(async (req, res) => {
  const { email, password, ...rest } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) throw new ErrorResponse("User already exists", 403);
  const hash = await bcrypt.hash(password, 10);
  const { _id } = await User.create({ ...rest, email, password: hash });
  const token = jwt.sign({ _id }, process.env.JWT_SECRET);
  res.status(201).json(token);
});

export const deleteUser = (req, res) => {
  const { id } = req.params;
  User.deleteOne({ _id: id }).then(
    res.status(200).json({ msg: "User deleted" })
  );
};

export const getUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log(req.params);
  const user = await User.findById(id);
  res.status(201).json(user);
});
