import db from "../db/db.js";
import blogPost from "../schemas/postSchema.js";

/**
 * Articles
 */
export const getArticles = async (req, res) => {
  const blogPosts = await blogPost.find();
  console.log(blogPosts);
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
export const userLogin = (req, res) => {
  res.status(200).json({ msg: "Login successful" });
};
export const createUser = (req, res) => {
  res.status(200).json({ msg: "User created" });
};
