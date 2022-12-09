import { Router } from "express";
import {
  getArticles,
  createArticle,
  getSingleArticle,
  updateArticle,
  deleteArticle,
  userLogin,
  createUser,
  deleteUser,
  getUser,
} from "../controller/controller.js";
import {
  postSchemaJoi,
  userSchemaJoi,
  loginSchemaJoi,
} from "../joi/schemas.js";
import validateJoi from "../middleware/validateJoi.js";

const routes = new Router();

routes
  .route("/")
  .get(getArticles)
  .post(validateJoi(postSchemaJoi), createArticle);

routes
  .route("/article/:id")
  .get(getSingleArticle)
  .put(updateArticle)
  .delete(deleteArticle);

routes.route("/login").post(validateJoi(loginSchemaJoi), userLogin);

routes.route("/register").post(validateJoi(userSchemaJoi), createUser);

routes.route("/me/:id").get(getUser).delete(deleteUser);

export default routes;
