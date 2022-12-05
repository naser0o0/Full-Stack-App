import {Router} from 'express'
import { getArticles, createArticle, getSingleArticle, updateArticle, deleteArticle, userLogin, createUser } from '../controller/controller.js'

const routes = new Router()

routes.route('/')
	.get(getArticles)
	.post(createArticle)

routes.route('/article/:id')
	.get(getSingleArticle)
	.put(updateArticle)
	.delete(deleteArticle)
	
routes.route("/login")
    .post(userLogin)

routes.route("/register")
    .post(createUser)

export default routes